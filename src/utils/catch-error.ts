import { NextFunction, Request, RequestHandler, Response } from 'express';

export const catchError =
  (fn: RequestHandler): RequestHandler =>
  (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);
