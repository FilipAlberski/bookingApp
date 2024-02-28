import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import usersRoute from './routes/usersRoute';
import authRoute from './routes/auth';
import cookieParser from 'cookie-parser';

import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);

app.listen(7001, () => {
  console.log(`Server is running on port ${7001}`);
});
