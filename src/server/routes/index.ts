import { Router } from 'express';
import httpStatusCodes from 'http-status-codes';

const router = Router();

router.get('/', (req, res) => {
  return res.status(httpStatusCodes.ACCEPTED).send('Olá mundo!');
});




export { router };