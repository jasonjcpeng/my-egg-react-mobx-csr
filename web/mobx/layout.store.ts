import { observable, action, computed } from 'mobx';
import { rootStore } from 'declarations/web/store/root.store.d';
import * as layoutStore from 'declarations/web/store/layout.store.d';

class module {
  rootStore: rootStore;
  @observable collapsed: boolean = false;
  @observable isLoading: boolean = false;
  @observable message: layoutStore.message = { content: '', status: '' }; // 提示信息状态 

  constructor(rootStore: rootStore) {
    this.rootStore = rootStore;
  }
}

export default module;