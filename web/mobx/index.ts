import React from "react";
import routerStore from "./router.store";
import indexIndexStore from "./index_index.store";
import aboutIndexStore from "./about_index.store";
import layoutStore from "./layout.store";
import userStore from "./user.store";

const rootStore = class {
  userStore: any;
  routerStore: any;
  layoutStore: any;
  indexIndexStore: any;
  aboutIndexStore: any;

  constructor() {
    this.userStore = new userStore(this);
    this.routerStore = new routerStore(this);
    this.layoutStore = new layoutStore(this);
    this.indexIndexStore = new indexIndexStore(this);
    this.aboutIndexStore = new aboutIndexStore(this);
  }
};

const storesContext = React.createContext({
  rootStore: new rootStore(),
});

export const useStores = () => React.useContext(storesContext);
