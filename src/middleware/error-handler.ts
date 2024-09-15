import { ApiError } from '@/lib';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

interface IErrorBody {
  code: number;
  message: string;
  error?: object;
  stack?: string;
}

export const errorHandler = (
  err: ApiError,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  const { statusCode, error } = err;

  const code = statusCode ?? httpStatus.INTERNAL_SERVER_ERROR;
  const message = err.message ?? httpStatus[code];

  const errorBody: IErrorBody = {
    code,
    message,
    error
  };

  // if (Config.environment === 'development') {
  //   errorBody.stack = err.stack;
  // }

  res.status(code).send(errorBody);

  next();
};
