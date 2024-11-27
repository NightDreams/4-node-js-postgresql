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

export { logErrors, errorHandler };
