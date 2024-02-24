import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/test', async (req: Request, res: Response) => {
  res.json({ message: 'Hello World! /api/test' });
});

app.listen(7001, () => {
  console.log(`Server is running on port ${7001}`);
});
