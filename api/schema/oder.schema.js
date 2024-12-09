import Joi from 'joi';

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const role = Joi.string().min(5);

const createOrderSchema = Joi.object({
	email: email.required(),
	password: password.required(),
	role: role.required(),
});

const updateOrderSchema = Joi.object({
	email: email,
	role: role,
});

const getOrderSchema = Joi.object({
	id: id.required(),
});

export { createOrderSchema, updateOrderSchema, getOrderSchema };
