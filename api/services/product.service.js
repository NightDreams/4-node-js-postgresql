import { faker } from '@faker-js/faker';
import boom from '@hapi/boom';
import { pool } from '../libs/postgres.pool.js';

class ProductsService {
	constructor() {
		this.products = [];
		this.generate();
		this.pool = pool;
		this.pool.on('error', err => console.log(err));
		// listen errors de conexion
	}

	generate() {
		const limit = 100;
		for (let index = 0; index < limit; index++) {
			this.products.push({
				id: faker.string.uuid(),
				name: faker.commerce.productName(),
				price: parseInt(faker.commerce.price(), 10),
				image: faker.image.urlLoremFlickr(),
				isBlock: faker.datatype.boolean(),
				// image: faker.image.imageUrl(),
			});
		}
	}

	create(data) {
		const newProduct = {
			id: faker.string.uuid(),
			...data,
		};

		this.products.push(newProduct);
		return newProduct;
	}

	async find() {
		const query = 'SELECT * FROM tasks';
		const rta = await this.pool.query(query);
		return rta.rows;
	}

	async findOne(id) {
		const product = this.products.find(item => item.id === id);
		if (!product) {
			throw boom.notFound('product not found');
		}
		if (product.isBlock) {
			throw boom.conflict('product is block');
		}
		return product;
	}

	async update(id, changes) {
		const index = this.products.findIndex(item => item.id === id);

		if (index === -1) {
			throw boom.notFound('product not found');
		}

		const product = this.products[index];
		this.products[index] = {
			...product,
			...changes,
		};

		return this.products[index];
	}

	async delete(id) {
		const index = this.products.findIndex(item => item.id === id);

		if (index === -1) {
			throw boom.notFound('product not found ');
		}
		this.products.splice(index, 1);
		return { id };
	}
}

export default ProductsService;
