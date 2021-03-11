import { observable, action, computed, runInAction, autorun } from 'mobx';
import config from '@config';
import fetch from '@lib/fetch';

class User {
  @observable OAUser = {};
}

export default User;