import { defineConfig } from "drizzle-kit";
import { loadEnvFile } from "node:process";

loadEnvFile("./.env.local");

const connectionString = process.env.DATABASE_URL;

if (!connectionString) throw new Error("Database Connection String Invalid");

export default defineConfig({
  dialect: "postgresql",
  out: "./src/drizzle/migrations",
  schema: "./src/drizzle/schema.ts",
  dbCredentials: {
    url: connectionString,
  },
});
