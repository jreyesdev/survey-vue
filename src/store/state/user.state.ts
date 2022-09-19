import { UserAuth } from '../../interfaces/UserInterface';

const user: UserAuth = {
  data: {},
  token: sessionStorage.getItem('TOKEN'),
};

export default user;
