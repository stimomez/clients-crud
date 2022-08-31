const { body, validationResult } = require('express-validator');

const { AppError } = require('../utils/appError.util');

const checkResult = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // Array has errors
    const errorMsgs = errors.array().map(err => err.msg);

    const message = errorMsgs.join('. ');

    return next(new AppError(message, 400));
  }

  next();
};

const createClientValidators = [
  body('name')
    .notEmpty()
    .withMessage('Name cannot be empty')
    .isLength({ max: 30 })
    .withMessage('Name maximum 30 characters'),
  body('lastName')
    .notEmpty()
    .withMessage('lastName cannot be empty')
    .isLength({ max: 30 })
    .withMessage('LastName maximum 30 characters'),
  body('identificationDocument')
    .notEmpty()
    .withMessage('identificationDocument cannot be empty')
    .isLength({ max: 12 })
    .withMessage('identificationDocument maximum 12 characters')
    .isNumeric()
    .withMessage(
      'identificationDocument  must contain numbers'
    ),
  body('telephone')
    .notEmpty()
    .withMessage('Telephone cannot be empty')
    .isLength({ max: 12 })
    .withMessage('Telephone maximum 12 characters')
    .isNumeric()
    .withMessage('Telephone identificationDocument must contain numbers'),
  body('email')
    .isEmail()
    .withMessage('Must provide a valid email')
    .isLength({ max: 20 })
    .withMessage('Email maximum 20 characters'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .isLength({ Max: 12 })
    .withMessage('Password maximum 12 characters')
    .isAlphanumeric()
    .withMessage('Password is Alphanumeric'),
  checkResult,
];

module.exports = { createClientValidators };
