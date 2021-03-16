import { observable, action, computed } from 'mobx';
import { rootStore } from 'declarations/web/store/root.store';

class module {
  rootStore: rootStore;
  @observable collapsed = false;
  @observable isLoading = false;
  @observable message = { content: '', status: '' }; // 提示信息状态 

  constructor(rootStore: rootStore) {
    this.rootStore = rootStore;
  }
}

export default module;