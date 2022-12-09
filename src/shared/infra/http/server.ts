import 'reflect-metadata';
import { dataSource } from '../typeorm/migrations';
import { app } from './app';

dataSource.initialize().then(() => {
  app.listen(3333, () => {
    console.log('server is running on port 3333');
  });
});
