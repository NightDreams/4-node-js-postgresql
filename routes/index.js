import productsRouter from './products.router.js';
import express from 'express';
function routerApi(app) {
	const router = express.Router();
	app.use('/api/v1', router);

	router.use('/products', productsRouter);
	//  app.use('/users', productsRouter);
	//  app.use('/categories', productsRouter);
}

export default routerApi;
