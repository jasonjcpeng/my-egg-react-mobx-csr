import { observable, action, computed } from 'mobx';

class Layout {
  @observable
  collapsed = false;
  @observable
  isLoading = false;

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