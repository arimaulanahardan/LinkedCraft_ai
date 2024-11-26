export default {
  dialect: "postgresql",
  schema: "./utils/db/schema.ts",
  out: "./drizzle",

  dbCredentials: {
    url: "postgresql://neondb_owner:Kc8oasCzq3ij@ep-summer-boat-a5wow6t6.us-east-2.aws.neon.tech/neondb?sslmode=require",
    connectionString:
      "postgresql://neondb_owner:Kc8oasCzq3ij@ep-summer-boat-a5wow6t6.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
};
