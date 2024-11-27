import express from 'express';
import routerApi from './routes/index.js';

import {
	errorHandler,
	logErrors,
	boomErrorHandler,
} from './middlewares/error.handler.js';

const app = express();
const port = 3000;
// midleware for json
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Express Server');
});

app.get('/nueva-ruta', (req, res) => {
	res.send('Nueva ruta');
});

// ejecucion en orden
routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
	console.log('esuchando en el puerto' + port);
});
