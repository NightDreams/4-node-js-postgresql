import express from 'express';
import routerApi from './routes/index.js';
import cors from 'cors';

import {
	errorHandler,
	logErrors,
	boomErrorHandler,
} from './middlewares/error.handler.js';

const app = express();
const port = process.env.PORT || 3000;
// midleware for json
app.use(express.json());

const whitelist = [
	'http://localhost:8080',
	'http://127.0.0.1:8080',
	'https://myapp.co',
];
const options = {
	origin: (origin, callback) => {
		if (whitelist.includes(origin) || !origin) {
			callback(null, true);
		} else {
			callback(new Error('no permitido'));
		}
	},
};
app.use(cors(options));

app.get('/api', (req, res) => {
	res.send('Express Server');
});

app.get('/api/nueva-ruta', (req, res) => {
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
