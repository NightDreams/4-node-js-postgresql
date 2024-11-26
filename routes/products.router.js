import express from 'express';
import { faker } from '@faker-js/faker';
import ProductsService from '../services/product.service.js';

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => {
	const products = service.find();
	res.json(products);
});

router.get('/filter', (req, res) => {
	res.json('soy filter');
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	const product = service.findOne(id);
	res.status(201).json(product);
});

router.post('/', (req, res) => {
	const body = req.body;
	res.status(201).json({ message: 'created', body });
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
