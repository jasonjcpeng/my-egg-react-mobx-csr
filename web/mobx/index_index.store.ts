import { observable, action, computed, runInAction } from 'mobx';
import { rootStore } from 'declarations/web/store/root.store';
import fetch from '@lib/fetch';

class Index {
  rootStore: rootStore;
  @observable data = [];
  @observable count = 0;
  @observable response = '';

  constructor(rootStore: rootStore) {
    this.rootStore = rootStore;
  }

  @computed
  get countPow(): number {
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
      this.response = data + ''
    } catch (error) {
      this.response = error
    }

  }


}

export default Index;