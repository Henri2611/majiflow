import { resolve4 } from "node:dns/promises";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { reportFailure } from "@/lib/monitoring";
import * as schema from "@/lib/server/db/schema";

function databaseUrl(): string {
  const value = process.env.DATABASE_URL?.trim();
  if (!value) {
    throw new Error("DATABASE_URL is required to use the database.");
  }
  return value;
}

const connectionUrl = new URL(databaseUrl());
const [ipv4Host] = await resolve4(connectionUrl.hostname);
if (!ipv4Host) {
  throw new Error("DATABASE_URL hostname has no IPv4 address.");
}

const ipv4ConnectionUrl = new URL(connectionUrl);
ipv4ConnectionUrl.hostname = ipv4Host;
// pg gives URL sslmode precedence over programmatic TLS options. Remove only
// that option so the explicit certificate-verified configuration is authoritative;
// all other DATABASE_URL options remain intact.
ipv4ConnectionUrl.searchParams.delete("sslmode");

export const pool = new Pool({
  connectionString: ipv4ConnectionUrl.toString(),
  ssl: {
    rejectUnauthorized: true,
    servername: connectionUrl.hostname,
  },
});

pool.on("error", (error: NodeJS.ErrnoException) => {
  void reportFailure("store", "Database pool idle connection error.", {
    code: error.code ?? "UNKNOWN",
    name: error.name,
  });
});

export const db = drizzle(pool, { schema });
