import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/node-postgres';
import postgres from 'postgres';
import { profilesTable } from './schema/profiles-schema';

config({ path: '.env.local' });

const schema = { profiles: profilesTable };

const client = postgres(process.env.DATABASE_URL!);
export const db = drizzle(client, { schema });