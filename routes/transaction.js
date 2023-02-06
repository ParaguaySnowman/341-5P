//Node Modules
const express = require('express');
const router = express.Router();

//Controllers
const contactsController = require('../controllers/transaction');

router.get('/:id', contactsController.findOneTransaction);

router.post('/', contactsController.createTransaction);

module.exports = router;