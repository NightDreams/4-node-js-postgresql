import pg from 'pg';
import { config } from '../../config/config.js';

const { Client } = pg;

async function getConection() {
	const client = new Client({
		host: config.dbHost,
		port: config.dbPort,
		user: config.dbUser,
		password: config.dbPassword,
		database: config.dbName,
	});

	await client.connect();
	return client;
}

export { getConection };
