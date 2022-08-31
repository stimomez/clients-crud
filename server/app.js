const express = require('express');
const cors = require('cors');

const { AppError } = require('./utils/appError.util');
const { globalErrorHandler } = require('./controllers/error.controller');

const { clientRouter } = require('./routes/client.routes');
const app = express();

app.use(express.json());
app.use(cors())
// Define endpoints
app.use('/api/v1/clients', clientRouter);

// Manejar rutas entrantes desconocidas al servidor
app.all('*', (req, res, next) => {
  next(
    new AppError(
      `${req.method} ${req.originalUrl} not found in this server`,
      404
    )
  );
});

app.use(globalErrorHandler);

module.exports = { app };
