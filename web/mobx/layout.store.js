import { observable, action, computed } from 'mobx';

class Layout {
  @observable
  collapsed = false;
  @observable
  isLoading = false;
  @observable
  message = undefined; // 提示信息状态 

  @action
  setMessage(message) {
    this.message = message
  }

  @action
  setCollapsed(boolean) {
    this.collapsed = boolean;
  }

  @action
  setIsLoading(boolean) {
    this.isLoading = boolean;
  }

}

export default Layout;