import service from '../index';

export const getUserList = () => {
  return service.get('/user');
};
