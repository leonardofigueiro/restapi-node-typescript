import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { SchemaOf, ValidationError } from 'yup';

type TProperty = 'body' | 'header' | 'params' | 'query'
type TGetSchema = <T>(schema: SchemaOf<T>) => SchemaOf<T>;
type TAllSchemas = Record<TProperty, SchemaOf<any>>
type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas> 
type TValidation = (getSchema: TGetAllSchemas) => RequestHandler;

export const validation: TValidation = (getAllSchemas) => async (req, res, next) => {
  const schemas = getAllSchemas(schema => schema);
  const ErrorsResult: Record<string, Record<string, string>> = {};

  Object.entries(schemas).forEach(([key, schema]) => {
    try {
      schema.validateSync(req[key as TProperty], { abortEarly: false });
    } catch (error) {
      const yupError = error as ValidationError;
      const errors: Record<string, string> = {};

      yupError.inner.forEach(error => {
        if (error.path === undefined) return;
        errors[error.path] = error.message;
      });
      ErrorsResult[key] = errors;
    }

  });

  if (Object.entries(ErrorsResult).length === 0) {
    return next();
  } else {
    return res.status(StatusCodes.BAD_REQUEST).json({ errors: ErrorsResult });
  }
};

