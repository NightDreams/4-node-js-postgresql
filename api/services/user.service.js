import boom from '@hapi/boom';

import { sequelize } from '../libs/sequelize.js';

class UserService {
	constructor() {}

	async create(data) {
		return data;
	}

	async find() {
		const rta = await sequelize.models.User.findAll();
		return { rta };
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
