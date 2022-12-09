import AppError from '@shared/errors/AppErros';
import { compare } from 'bcryptjs';
import User from '../typeorm/entities/User';
import { UsersRepository } from '../typeorm/repositories/UsersRepository';

interface IRequest {
  email: string;
  password: string;
}

// interface IResponse{
user: User;
// }

class CreateSessionsService {
  public async execute({ email, password }: IRequest): Promise<User> {
    const user = await UsersRepository.findByEmail(email);
    if (!user) {
      throw new AppError('Incorrect email or passord');
    }
    const passwordConfirmed = await compare(password, user.password);
    if (!passwordConfirmed) {
      throw new AppError('Incorrect email or password');
    }
    return user;
  }
}

export default CreateSessionsService;
