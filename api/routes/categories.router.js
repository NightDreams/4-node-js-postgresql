import express from 'express';
import CategoryService from '../services/categorie.service.js';
import { validatorHandler } from '../middlewares/validator.handler.js';

import {
	createCategorySchema,
	updateCategorySchema,
	getCategorySchema,
} from '../schema/category.schema.js';

const router = express.Router();
const service = new CategoryService();

router.get('/', async (req, res, next) => {
	try {
		const categories = await service.find();
		res.json(categories);
	} catch (error) {
		next(error);
	}
});

router.get(
	'/:id',
	validatorHandler(getCategorySchema, 'params'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const category = await service.findOne(id);
			res.json(category);
		} catch (error) {
			next(error);
		}
	}
);

router.post(
	'/',
	validatorHandler(createCategorySchema, 'body'),
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
	validatorHandler(getCategorySchema, 'params'),
	validatorHandler(updateCategorySchema, 'body'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const body = req.body;
			const category = await service.update(id, body);
			res.json(category);
		} catch (error) {
			next(error);
		}
	}
);

router.delete(
	'/:id',
	validatorHandler(getCategorySchema, 'params'),
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
