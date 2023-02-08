//Node Modules
const express = require('express');
const router = express.Router();

//Controllers
const transactionController = require('../controllers/transaction');

router.get('/:id', transactionController.findOneTransaction);

router.post('/', transactionController.createTransaction);

module.exports = router;