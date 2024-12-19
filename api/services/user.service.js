import boom from '@hapi/boom';
import { sequelize } from '../libs/sequelize.js';

class UserService {
	constructor() {}

	async create(data) {
		return data;
	}

	async find() {
		const query = 'SELECT * FROM tasks';
		const [data] = await sequelize.query(query);

		return { data };
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
