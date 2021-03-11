import { observable, action, computed, runInAction } from 'mobx';
import fetch from '@lib/fetch';

class Index {
  @observable data = [];
  @observable count = 0;
  @observable response = '';

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @computed
  get countPow() {
    return Math.pow(this.count, 2);
  }

  @action
  async fetch() {
    try {
      const data = await fetch({
        method: 'get',
        url: 'http://www.baidu.com',
        params: {
        }
      });
      this.response = data
    } catch (error) {
      this.response = error
    }

  }


}

export default Index;