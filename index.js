// const express = require('express');
import express from 'express';

import routerApi from './routes/index.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Express Server');
});

app.get('/nueva-ruta', (req, res) => {
	res.send('Nueva ruta');
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

routerApi(app);

app.listen(port, () => {
	console.log('esuchando en el puerto' + port);
});
