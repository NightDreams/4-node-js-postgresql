import pg from 'pg';
const { Pool } = pg;

import { config } from '../../config/config.js';

const pool = new Pool({
	host: config.dbHost,
	port: config.dbPort,
	user: config.dbUser,
	password: config.dbPassword,
	database: config.dbName,
});
export { pool };
