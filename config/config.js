import 'dotenv/config';

const config = {
	env: process.env.NODE_ENV || 'dev',
	port: process.env.PORT || 3000,
	// postgress db
	dbUser: process.env.DB_USER,
	dbPassword: process.env.DB_PASSWORD,
	dbHost: process.env.DB_HOST,
	dbName: process.env.DB_NAME,
	dbPort: process.env.DB_PORT,
};

export { config };
