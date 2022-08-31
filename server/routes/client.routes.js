const express = require('express');

const {
  getAllClients,
  createClient,
  updateClient,
  deleteClient,
  getClientById,
} = require('../controllers/client.controller');
const { clientExists } = require('../middlewares/client.middleware');
const { createClientValidators } = require('../middlewares/validators.middleware');
const { upload } = require('../utils/upload.utils');

const clientRouter = express.Router();

clientRouter.get('/', getAllClients);

clientRouter.get('/:id', clientExists, getClientById);

clientRouter.post('/',createClientValidators, createClient);
//upload.single('documentPdf'),
clientRouter
  .route('/:id')
  .patch(clientExists, updateClient)
  .delete(clientExists, deleteClient);

module.exports = { clientRouter };
