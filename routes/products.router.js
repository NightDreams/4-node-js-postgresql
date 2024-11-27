import express from 'express';
import { faker } from '@faker-js/faker';
import ProductsService from '../services/product.service.js';

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res) => {
	const products = await service.find();
	res.json(products);
});

router.get('/filter', (req, res) => {
	res.json('soy filter');
});

router.get('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const product = await service.findOne(id);
		res.status(201).json(product);
	} catch (error) {
		// run middlewar for errors
		next(error);
	}
});

router.post('/', async (req, res) => {
	const body = req.body;
	const newProduct = await service.create(body);
	res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const body = req.body;
		const product = await service.update(id, body);
		res.json(product);
	} catch (error) {
		next(error);
	}
});

router.delete('/:id', async (req, res) => {
	const { id } = req.params;
	const rta = await service.delete(id);
	res.json(rta);
});
export default router;
