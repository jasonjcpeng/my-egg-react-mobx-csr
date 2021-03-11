import { observable, action, computed } from 'mobx';
import beCode from '@lib/queryBeCode';
/**
 * 整合路由信息同步到mobx
 * 获取Url中Query参数<params>： routerStore.query['params']
 * 
 * 跳转页面: routerStore.Jump({path<String>,params<[{a,b}]>,save<['','']>,open<Boolean>})
 * 
 * 新增覆盖params: routerStore.add(obj<{a:b}>)
 * 
 */
class RouterStore {
  @observable history = window.location.hash;

  /**
   * 获取路由的Path字段
   * @returns {String} '/path/'
   */
  @computed
  get path() {
    return this.history.match(/(^#).*(?=\?)|(^#).*/) ? this.history.match(/(^#).*(?=\?)|(^#).*/)[0].replace(/(^#)/, '') : '/';
  }

  /**
  * 获取路由的Query字串
  * @returns {String} 'queryA=A&queryB=B'
  */
  @computed
  get queryString() {
    return this.history.match(/(\?)\S*/) ? this.history.match(/(\?)\S*/)[0].replace(/(\?)/, '') : '';
  }
  /**
   * 获取路由的Query字段
   * @returns {Object} {queryA:'A',queryB:'B'}
   */
  @computed
  get query() {
    const queryString = this.history.match(/(\?)\S*/) ? this.history.match(/(\?)\S*/)[0].replace(/(\?)/, '') : '';
    const queryObj = {};
    if (!queryString) return queryObj;
    beCode.decode(queryString).split('&').forEach(item => {
      const split = item.split('=');
      if (split[1]) {
        queryObj[split[0]] = split[1];
      }
    });
    console.log('[url#Query]', queryObj);
    return queryObj;
  }

  /**
   * 重要函数：用来替换路由中的path而不改动其query参数
   * @param {String} path 要替换的路由地址
   * @param {Array} params  要叠加的Query参数 [{key1:value},{key2:value}]
   * @param {Array} save  要保存的Query参数 ['key1','key2']
   */
  @action
  jump({ path, params = [], open = false, save = [] }) {
    const query = [].concat(['appId', 'startTime', 'endTime'], save); // 每次跳转必须保留的参数
    const queryArray = [];
    let final = '';
    for (let index = 0; index < query.length; index++) {
      const element = query[index];
      if (this.query[element] && params.map(item => Object.keys(item)[0]).indexOf(element) < 0) {
        queryArray.push(`${element}=${this.query[element]}`);
      }
    }
    for (let i = 0; i < params.length; i++) {
      const ele = params[i];
      queryArray.push(`${Object.keys(ele)[0]}=${Object.values(ele)[0]}`);
    }
    final = `#${path}?${beCode.encode(queryArray.join('&'))}`;
    open ? (() => {
      window.open(final)
    })() : (() => {
      window.location.href = final;
      this.history = final
    })()

  }

  /**
   * 重要函数：用来批量URL中的Query参数,
   *    */
  @action
  add(obj) {
    let final = '';
    const _arr = [];
    const newObj = Object.assign(this.query, obj);
    for (const key in newObj) {
      _arr.push(`${key}=${this.query[key]}`)
    }
    final = `#${this.path}?${beCode.encode(_arr.join('&'))}`;
    this.history = final;
    window.location.href = final
  }

  @action
  clearQuery(arr) {
    const _arr = [];
    let final = '';
    for (const key in this.query) {
      if (arr.indexOf(key) < 0) {
        _arr.push(`${key}=${this.query[key]}`)
      }
    }
    final = `#${this.path}?${beCode.encode(_arr.join('&'))}`
    this.history = final;
    window.location.href = final
  }
}

export default RouterStore;