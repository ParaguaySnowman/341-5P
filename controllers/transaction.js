const db = require('../models');
const Transaction = db.transactions;

const apiKey =
  'Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68Xwaj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N';

exports.createTransaction = (req, res) => {
  /*
    #swagger.description = 'API Key if needed: Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68Xwaj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N'
  */
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  // Create a Transaction
  const transaction = new Transaction({
    transaction_id: req.body.transaction_id,
    amount: req.body.amount,
    date: req.body.date,
    merchant: req.body.merchant,
    category: req.body.category,
    description: req.body.description,
    account: req.body.account,
    taxRelated: req.taxRelated
  });
  // Save Transaction in the database
  transaction
    .save(transaction)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the transaction.',
      });
    });
};

// Find a single Temple with an id
exports.findOneTransaction = (req, res) => {
  /*
    #swagger.description = 'API Key if needed: Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68XwZj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N'
  */
  const trasaction_id = req.params.transaction_id;
  if (req.header('apiKey') === apiKey) {
    Temple.find({ temple_id: temple_id })
      .then((data) => {
        if (!data)
          res
            .status(404)
            .send({ message: 'Not found transaction with id ' + trasaction_id });
        else res.send(data[0]);
      })
      .catch((err) => {
        res.status(500).send({
          message: 'Error retrieving transaction with transaction_id=' + transaction_id,
        });
      });
  } else {
    res.send('Invalid apiKey, please read the documentation.');
  }
};