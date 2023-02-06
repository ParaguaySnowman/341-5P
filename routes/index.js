const routes = require('express').Router();
const transaction = require('./transaction');

routes.use('/', require('./swagger'));
routes.use('/transactions', transaction);
routes.use(
  '/',
  (docData = (req, res) => {
    let docData = {
      documentationURL: 'https://nathanbirch.github.io/nathan-byui-api-docs',
    };
    res.send(docData);
  })
);

module.exports = routes;