// errorHandler.js
const { ApiError } = require('./errorResponse');

function errorHandler(err, req, res, next) {
  if (err instanceof ApiError) {
    res.status(err.status).json({
      error: err.code,
      message: err.message
    });
  } else {
    res.status(500).json({
      error: 'internal_error',
      message: 'Something went wrong'
    });
  }
}

module.exports = errorHandler;
