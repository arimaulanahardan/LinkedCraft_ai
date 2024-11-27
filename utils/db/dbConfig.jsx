import { neon } from "@neondatabase/serverless";

import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

const sql = neon("postgresql://neondb_owner:Kc8oasCzq3ij@ep-summer-boat-a5wow6t6.us-east-2.aws.neon.tech/neondb?sslmode=require" || process.env.DATABASE_URl);

export const db = drizzle(sql, { schema });
