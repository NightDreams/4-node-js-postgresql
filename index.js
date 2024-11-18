// const express = require('express');
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Express Server');
});

app.get('/nueva-ruta', (req, res) => {
	res.send('Nueva ruta');
});

app.get('/products', (req, res) => {
	res.json([
		{ name: 'Product 1', price: 1000 },
		{ name: 'Product 2', price: 4000 },
	]);
});

app.get('/products/:id', (req, res) => {
	const { id } = req.params;

	res.json({ id, name: 'Product 2', price: 200 });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
	const { categoryId, productId } = req.params;
	res.json({ categoryId, productId });
});

app.listen(port, () => {
	console.log('esuchando en el puerto' + port);
});
