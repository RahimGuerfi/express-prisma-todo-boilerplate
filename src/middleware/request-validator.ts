import { MiddlewaresErrors } from '@/constants';
import { HttpBadRequestError } from '@/lib';
import { NextFunction, Request, Response } from 'express';
import { AnyZodObject, ZodError } from 'zod';

export const validate =
  (schema: AnyZodObject) =>
  async (req: Request, _res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params
      });
      return next();
    } catch (error: any) {
      if (error instanceof ZodError) {
        error = error.issues.map((e) => {
          const stringsOnlyPath = e.path.filter(
            (path) => typeof path === 'string'
          );

          const formattedPath = stringsOnlyPath.join(' => ');

          return {
            path: formattedPath,
            message: e.message
          };
        });
      }

      return next(
        new HttpBadRequestError({
          message: MiddlewaresErrors.ErrorValidatingInput,
          error
        })
      );
    }
  };
