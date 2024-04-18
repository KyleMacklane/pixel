// pages/api/example.js
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';

const cors = initMiddleware(
  Cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'OPTIONS'],
  })
);

export default async function handler(req, res) {
  await cors(req, res);

  // Your API logic here
  res.status(200).json({ message: 'Success' });
}
