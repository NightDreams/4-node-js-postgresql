import productsRouter from './products.router.js';
function routerApi(app) {
	app.use('/products', productsRouter);
	//  app.use('/users', productsRouter);
	//  app.use('/categories', productsRouter);
}

export default routerApi;
