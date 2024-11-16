// const express = require('express');
import express from 'express';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
	res.send('Express Server');
});

app.listen(port, () => {
	console.log('esuchando en el puert' + port);
});
