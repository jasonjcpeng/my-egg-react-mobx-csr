import { observable, action, computed } from 'mobx';

class RouterStore {
  @observable history = window.location.hash;

  @action
  setHistory(history) {
    this.history = history;
  }

  @computed
  get path() {
    return this.history.match(/(?<=^#).*(?=\?)|(?<=^#).*/) ? this.history.match(/(?<=^#).*(?=\?)|(?<=^#).*/)[0] : '/';
  }

  @computed
  get query() {
    const queryString = this.history.match(/(?<=\?)\S*/) ? this.history.match(/(?<=\?)\S*/)[0] : '';
    const queryObj = {};
    if (!queryString) return queryObj;

    queryString.split('&').forEach(item => {
      const split = item.split('=');
      queryObj[split[0]] = split[1];
    });
    return queryObj;
  }
}

export default RouterStore;