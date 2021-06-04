import { observable, action, computed, runInAction, autorun } from "mobx";
import { rootStore } from "declarations/web/store/root.store.d";
import config from "@config/index";
import fetch from "@lib/fetch";

class User {
  rootStore: rootStore;
  @observable OAUser = {};

  constructor(rootStore: rootStore) {
    this.rootStore = rootStore;
  }
}

export default User;
