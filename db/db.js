import { Pool } from "pg";

let globalpool = null;

export async function connect() {
	try {
		if (globalpool) return globalpool.connect();

		const config = {
			host: process.env.DB_HOST,
			port: process.env.DB_PORT,
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_NAME,
		};

		if (process.env.REJECT_UNAUTHORIZED) {
			config.ssl = {
				rejectUnauthorized: process.env.REJECT_UNAUTHORIZED === "true",
			};
		}	

		const pool = new Pool(config);

		const testClient = await pool.connect();
		testClient.release();
		console.log("Connected to the database successfully");
		globalpool = pool;
		return globalpool.connect();
	} catch (error) {
		console.error("Error connecting to the database:", error);
		throw error;
	}
}
