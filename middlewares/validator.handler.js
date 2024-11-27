import boom from '@hapi/boom';
function validatorHandler(schema, property) {
	return (req, res, next) => {
		const data = req[property];
		const { error } = schema.validate(data);
		if (error) {
			next (boom.badRequest(error););
		} else{
			next();
		}
	};

	res.status(500).json({
		message: err.message,
		stack: err.stack,
	});
}
export default validatorHandler;