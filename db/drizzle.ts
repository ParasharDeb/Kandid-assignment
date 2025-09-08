import { config } from "dotenv";
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
config({ path: ".env" });

const connection = neon(process.env.DATABASE_URL!);
export const db = drizzle(connection);