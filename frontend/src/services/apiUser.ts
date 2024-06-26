import api from './api';
import { UpdateUserModel, CreateUserModel, UserModel } from '../models/User.model';
import { SingupModel } from '../models/auth.models';

type ResponseKeys = 'user' | 'users';

const handleRequest = async <T>(
  method: 'get' | 'post' | 'patch' | 'delete',
  url: string,
  responseKey: ResponseKeys,
  data?: UserModel | SingupModel | UpdateUserModel | string
): Promise<T | null> => {
  try {
    const response = await api[method](url, data);
    return response.data.data[responseKey];
  } catch (error) {
    throw new Error(`${method.toUpperCase()} request to ${url} failed`);
  }
};

export const getUsers = async (): Promise<UserModel[] | null> => {
  return await handleRequest<UserModel[]>('get', '/user', 'users');
};

export const createUser = async (user: CreateUserModel): Promise<UserModel | null> => {
  return await handleRequest<UserModel>('post', '/user', 'user', user);
};

export const updateUser = async ({ user, userId }: UpdateUserModel): Promise<UserModel | null> => {
  return await handleRequest<UserModel>('patch', `/user/${userId}`, 'user', user);
};

export const deleteUser = async (userId: string): Promise<UserModel | null> => {
  return await handleRequest<UserModel>('delete', `/user/${userId}`, 'user');
};
