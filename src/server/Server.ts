import express from 'express';

interface Teste {

}

const server = express();
server.get('/', (req, res) => {
  return res.status(200).send('Olá mundo!');
});

export { server };