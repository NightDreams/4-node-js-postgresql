import boom from '@hapi/boom';
import { pool } from '../libs/postgres.pool.js';

class UserService {
	constructor() {
		this.pool = pool;
		this.pool.on('error', err => console.log(err));
	}

	async create(data) {
		return data;
	}

	async find() {
		const query = 'SELECT * FROM tasks';
		const rta = await this.pool.query(query);
		return rta.rows;
	}

	async findOne(id) {
		return { id };
	}

	async update(id, changes) {
		return {
			id,
			changes,
		};
	}

	async delete(id) {
		return { id };
	}
}

export default UserService;
