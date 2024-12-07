import express from 'express';
// routers
import productsRouter from './products.router.js';
import categoriesRouter from './categories.router.js';
import ussersRouter from './ussers.router.js';

function routerApi(app) {
	const router = express.Router();
	app.use('/api/v1', router);
	router.use('/products', productsRouter);
	router.use('/categories', categoriesRouter);
	router.use('/users', ussersRouter);
	// set orders router
}

export default routerApi;
