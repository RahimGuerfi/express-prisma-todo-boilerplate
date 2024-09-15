import dotenv from 'dotenv';
dotenv.config();

import { Config } from '@/constants';
import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';

import { errorHandler } from './middleware';
import routes from './modules';

const app: Express = express();

app.use(express.json());

app.use(helmet());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.options('*', cors());

app.get('/', (_req: Request, res: Response) => {
  res.send('Money 💵 on top of me!');
});

app.use('/', routes);

app.use(errorHandler);

// Start Express Server
app.listen(Config.port, async () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${Config.port}`
  );
});
