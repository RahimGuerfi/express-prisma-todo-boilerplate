import httpStatus from 'http-status';

import { OmitKeys } from './omit-keys';

interface IApiError extends Error {
  statusCode: number;
  error?: object;
}

type TApiErrorArgs = {
  statusCode: number;
  message: string;
  error?: object;
};

type TCustomApiErrorArgs = OmitKeys<TApiErrorArgs, 'statusCode'>;

export class ApiError extends Error implements IApiError {
  statusCode;
  error;

  constructor({ statusCode, message, error }: TApiErrorArgs) {
    super(message);
    this.statusCode = statusCode;
    if (error) {
      this.error = error;
    }

    Error.captureStackTrace(this, this.constructor);
  }
}

export class HttpBadRequestError extends ApiError {
  constructor({ message, error }: TCustomApiErrorArgs) {
    super({
      statusCode: httpStatus.BAD_REQUEST,
      message,
      error
    });
  }
}

export class HttpInternalServerError extends ApiError {
  constructor({ message, error }: TCustomApiErrorArgs) {
    super({
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      message,
      error
    });
  }
}

export class HttpUnAuthorizedError extends ApiError {
  constructor({ message }: TCustomApiErrorArgs) {
    super({
      statusCode: httpStatus.UNAUTHORIZED,
      message
    });
  }
}

export class HttpNotFoundError extends ApiError {
  constructor({ message, error }: TCustomApiErrorArgs) {
    super({
      statusCode: httpStatus.NOT_FOUND,
      message,
      error
    });
  }
}
