import express from 'express';
import { faker } from '@faker-js/faker';

const router = express.Router();

router.get('/', (req, res) => {
	const products = [];
	const { size } = req.query;
	const limit = size || 10;

	for (let i = 0; i < limit; i++) {
		products.push({
			name: faker.commerce.productName(),
			price: parseInt(faker.commerce.price(), 10),
			image: faker.image.urlLoremFlickr(),
		});
	}

	res.json(products);
});

router.get('/filter', (req, res) => {
	res.json('soy filter');
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	res.json({ id, name: 'Product 2', price: 200 });
});
// midleware para usar jsonk

router.post('/', (req, res) => {
	const body = req.body;
	res.json({ message: 'created', body });
});
router.patch('/:id', (req, res) => {
	const { id } = req.params;
	const body = req.body;
	res.json({ message: 'update', body, id });
});
router.delete('/:id', (req, res) => {
	const { id } = req.params;
	res.json({ message: 'deleted', id });
});
export default router;
