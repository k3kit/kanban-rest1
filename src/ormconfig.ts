import dotenv from 'dotenv';
import path from 'path';
import { ConnectionOptions } from 'typeorm';

dotenv.config({
  path: path.join(__dirname, '.env'),
});

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT, POSTGRES_HOST } = process.env;
const LOCAL_URL = `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}`;
const RENDER_URL = `postgres://admin_ysqo_user:HfOTUJDsfLza9lfiIqJBD9I1QEYnRpGH@dpg-cgcpldkeoogljtq54c70-a.frankfurt-postgres.render.com:5432/admin_ysqo
`;
export default {
  type: 'postgres',
  cache: false,
  url: (process.env.DATABASE_URL as string) || RENDER_URL,
  synchronize: false,
  logging: false,
  ssl: {
    rejectUnauthorized: false,
  },
  entities: ['src/resources/**/**.entity{.ts,.js}'],
  migrations: ['./migrations/*.ts'],
} as ConnectionOptions;
