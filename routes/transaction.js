const routes = require('express').Router();
const transactions = require('../controllers/transaction.js');

// Create a new Transaction
routes.post('/', transactions.create);

// Retrieve a single Transaction with id
routes.get('/:transaction_id', transactions.findOne);

module.exports = routes;