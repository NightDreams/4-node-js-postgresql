import boom from '@hapi/boom';
export function validatorHandler(schema, property) {
	return (req, res, next) => {
		const data = req[property];
		// abortEarly - send all errors
		const { error } = schema.validate(data, { abortEarly: false });
		if (error) {
			next(boom.badRequest(error));
		}
		next();
	};
}
