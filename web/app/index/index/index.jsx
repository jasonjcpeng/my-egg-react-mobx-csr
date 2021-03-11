import React, { useEffect } from 'react';
import * as styles from './style.scss';
import { useObserver } from 'mobx-react-lite';
import { useStores } from '@store';
import { List, Button, Statistic } from 'antd'

export default (props) => {
  const { indexIndexStore, userStore, routerStore } = useStores().rootStore;

  useEffect(() => {
    window.setTimeout(() => {
      indexIndexStore.data = [{
        title: '归零',
        do: () => {
          indexIndexStore.count = 0
        }
      }, {
        title: '+1',
        do: () => {
          indexIndexStore.count += 1
        }
      }, {
        title: '-1',
        do: () => {
          indexIndexStore.count -= 1
        }
      }, {
        title: '为本页面追加params',
        do: () => {
          const currentParams = ~~(routerStore.query['params'] || 0);
          routerStore.add({ params: currentParams + 1, root: 'root' })
        }
      }, {
        title: '跳转并追加Params',
        do: () => {
          routerStore.jump({ path: '/about/index', params: [{ params: 123 }, { root: 'about' }], open: true })
        }
      },
      {
        title: '发起异步请求',
        do: () => {
          indexIndexStore.fetch()
        }
      },];
    }, 1000)
  }, [])

  return useObserver(() => <div onClick={() => {
  }} className={styles.style}>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
      <Statistic title="总数" value={indexIndexStore.count} />
      <Statistic title="总数的平方" value={indexIndexStore.countPow} />
      <Statistic title="url里的params" value={routerStore.query['params'] + ''} />
    </div>

    <List
      itemLayout="horizontal"
      dataSource={indexIndexStore.data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={<Button type='primary' onClick={item.do}>{item.title}</Button>}
          />
        </List.Item>
      )}
    />
    {indexIndexStore.response + ''}

  </div>)
}