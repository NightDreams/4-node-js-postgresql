import express from 'express';

import OrderService from '../services/order.service.js';
import { validatorHandler } from './../middlewares/validator.handler';

import {
	createOrderSchema,
	updateOrderSchema,
	getOrderSchema,
} from '../schema/oder.schema.js';

const router = express.Router();
const service = new OrderService();

router.get('/', async (req, res, next) => {
	try {
		const orders = await service.find();
		res.json(orders);
	} catch (error) {
		next(error);
	}
});

router.get(
	'/:id',
	validatorHandler(getOrderSchema, 'params'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const order = await service.findOne(id);
			res.json(order);
		} catch (error) {
			next(error);
		}
	}
);

router.post(
	'/',
	validatorHandler(createOrderSchema, 'body'),
	async (req, res, next) => {
		try {
			const body = req.body;
			const newCategory = await service.create(body);
			res.status(201).json(newCategory);
		} catch (error) {
			next(error);
		}
	}
);

router.patch(
	'/:id',
	validatorHandler(getOrderSchema, 'params'),
	validatorHandler(updateOrderSchema, 'body'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const body = req.body;
			const order = await service.update(id, body);
			res.json(order);
		} catch (error) {
			next(error);
		}
	}
);

router.delete(
	'/:id',
	validatorHandler(getOrderSchema, 'params'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			await service.delete(id);
			res.status(201).json({ id });
		} catch (error) {
			next(error);
		}
	}
);
export default router;
