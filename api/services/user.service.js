import boom from '@hapi/boom';
import { getConection } from '../libs/postgres.js';
class UserService {
	constructor() {}

	async create(data) {
		return data;
	}

	async find() {
		const client = await getConection();
		const rta = await client.query('SELECT * FROM tasks');
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
