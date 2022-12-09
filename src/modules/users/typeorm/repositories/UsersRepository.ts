import { dataSource } from '@shared/infra/typeorm';
import User from '../entities/User';

export const UsersRepository = dataSource.getRepository(User).extend({
  async findById(id: string): Promise<User | null> {
    const user = await this.findOne({
      where: { id: id },
    });
    return user;
  },
  async findByName(name: string): Promise<User | null> {
    const user = await this.findOne({
      where: { name },
    });
    return user;
  },
  async findByEmail(email: string): Promise<User | null> {
    const user = await this.findOne({
      where: { email },
    });
    return user;
  },
});
