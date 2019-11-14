import Api from './api';

const UsersService = {
  register: (params) => Api.post("/users/register", params)
}

export default UsersService;