import AppError from '@shared/errors/AppErros';
import { hash } from 'bcryptjs';
import User from '../typeorm/entities/User';
import { UsersRepository } from '../typeorm/repositories/UsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: IRequest): Promise<User> {
    const emailExists = await UsersRepository.findByEmail(email);
    if (emailExists) {
      throw new AppError('Email already exists');
    }
    const hashpassword = await hash(password, 8);
    const user = UsersRepository.create({
      name,
      email,
      password: hashpassword,
    });
    await UsersRepository.save(user);
    return user;
  }
}

export default CreateUserService;
