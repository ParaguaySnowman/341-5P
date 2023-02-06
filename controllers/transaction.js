const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const createTransaction = async (req, res) => {
  const transaction = {
    amount: req.body.amount,
    date: req.body.date,
    merchant: req.body.merchant,
    category: req.body.category,
    description: req.body.description,
    account: req.body.account,
    taxRelated: req.body.taxRelated
  };
  const response = await mongodb.getDb().db().collection('transactions').insertOne(transaction);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the transaction.');
  }
};

const findOneTransaction = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('transactions').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

module.exports = {
  findOneTransaction, createTransaction
}