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
	res.json({
		name: 'Product 1',
		price: 1000,
	});
});

app.listen(port, () => {
	console.log('esuchando en el puert' + port);
});
