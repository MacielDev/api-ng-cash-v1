import 'reflect-metadata';
import 'dotenv/config';
import { dataSource } from '../typeorm';
import { app } from './app';

dataSource.initialize().then(() => {
  app.listen(process.env.APP_PORT || 3333, () => {
    console.log('server is running on port 3333');
  });
});
