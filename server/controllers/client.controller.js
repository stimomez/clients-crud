const bcrypt = require('bcryptjs');

//models
const { Client } = require('../models/client.model');

//utils
const { catchAsync } = require('../utils/catchAsync.util');

const getAllClients = catchAsync(async (req, res, next) => {
  const clients = await Client.findAll({ where: { status: 'active' } });

  return res.status(200).json({
    status: 'success',
    clients,
  });
});

const getClientById = catchAsync(async (req, res, next) => {
  const { client } = req;

  return res.status(200).json({
    status: 'success',
    client,
  });
});

const createClient = catchAsync(async (req, res, next) => {
  const {
    name,
    lastName,
    email,
    telephone,
    password,
    address,
    identificationDocument,
  } = req.body;

  //hash password
  const salt = await bcrypt.genSalt(12);
  // const hashPassword = await bcrypt.hash(password, salt);


  // const route = req.file.path.split(`\\FULLSTACK-CRUD\\server\\pdfs\\`)[1];

  const newClient = await Client.create({
    name,
    lastName,
    email,
    telephone,
    password,
    address,
    identificationDocument,
  //  idDocumentPdf: route,
  });
  // Quitar la contraseña de la respuesta
  newClient.password = undefined;

  return res.status(201).json({
    status: 'success',
    newClient,
  });
});

const updateClient = catchAsync(async (req, res, next) => {
  const { client } = req;
  const {
    name,
    lastName,
    telephone,
    password,
    address,
    identificationDocument,
  } = req.body;

  const salt = await bcrypt.genSalt(12);
  //  const hashPassword = await bcrypt.hash(password, salt);

  await client.update({
    name,
    lastName,
    telephone,
    password,
    identificationDocument,
    address,
  });

  return res.status(204).json({ status: 'success' });
});

const deleteClient = catchAsync(async (req, res, next) => {
  const { client } = req;
  console.log(client);
  await client.update({ status: 'deleted' });

  return res.status(204).json({ status: 'success' });
});

module.exports = {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
};
