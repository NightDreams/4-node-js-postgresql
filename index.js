// const express = require('express');
import express from 'express';
import { faker } from '@faker-js/faker';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Express Server');
});

app.get('/nueva-ruta', (req, res) => {
	res.send('Nueva ruta');
});

app.get('/products', (req, res) => {
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

app.get('/products/filter', (req, res) => {
	res.json('soy filter');
});

app.get('/products/:id', (req, res) => {
	const { id } = req.params;
	res.json({ id, name: 'Product 2', price: 200 });
});
app.get('/users', (req, res) => {
	const { limit, offset } = req.query;
	if (limit && offset) {
		res.json({ limit, offset });
	} else {
		res.send('No hay parametros');
	}
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
	const { categoryId, productId } = req.params;
	res.json({ categoryId, productId });
});

app.listen(port, () => {
	console.log('esuchando en el puerto' + port);
});
