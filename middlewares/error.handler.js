import express from 'express';
const router = express.Router();

function logErrors(err, req, res, next) {
	console.log('logErrors');

	next(err);
}

function errorHandler(err, req, res, next) {
	console.log('🚀 errorHandler:');
	res.status(500).json({
		message: err.message,
		stack: err.stack,
	});
}
function boomErrorHandler(err, req, res, next) {
	if (err.isBoom) {
		// informacion del error
		const { output } = err;
		res.status(output.statusCode).json(output.payload);
	} else {
		// run mid normal - cualquier que no sea de boom.
		next(err);
	}
}

export { logErrors, errorHandler, boomErrorHandler };
