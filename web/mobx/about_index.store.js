import { observable, action, computed, runInAction } from 'mobx';
import fetch from '@lib/fetch';

class Index {
  @observable count = 0;
  @observable init = 1;
  @observable response = '';

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action
  async getResponse() {
    const data = await fetch({
      method: 'get',
      url: '/api/ccc',
      params: {
        firstName: 'Fred',
        lastName: 'Flintstone'
      }
    });
    this.rootStore.layoutStore.isLoading = true;
    runInAction(() => {
      this.response = 'res';
    })
  }

}

export default Index;