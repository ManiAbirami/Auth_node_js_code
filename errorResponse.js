// errorResponse.js

class ApiError extends Error {
  constructor(status, code, message) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

function unauthorized(message = 'Unauthorized') {
  return new ApiError(401, 'unauthorized yuo are', message);
}

function forbidden(message = 'Forbidden') {
  return new ApiError(403, 'forbidden', message);
}

function badRequest(message = 'Bad Request') {
  return new ApiError(400, 'bad_request', message);
}

function internalError(message = 'Internal Server Error') {
  return new ApiError(500, 'internal_error', message);
}

module.exports = {
  ApiError,
  unauthorized,
  forbidden,
  badRequest,
  internalError
};
