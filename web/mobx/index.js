import React from 'react'
import routerStore from './router.store'
import indexStore from './index.store'
import layoutStore from './layout.store'

const rootStore = class {
  constructor() {
    this.indexStore = new indexStore(this);
    this.routerStore = new routerStore(this);
    this.layoutStore = new layoutStore(this);
  }
}


const storesContext = React.createContext({
  rootStore: new rootStore()
})

export const useStores = () => React.useContext(storesContext)