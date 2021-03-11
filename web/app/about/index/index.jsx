import React from 'react';
import * as styles from './style.scss';
import { useObserver } from 'mobx-react-lite';
import { useStores } from '@store';
import { PageHeader } from 'antd';
import { List, Button, Statistic } from 'antd'

export default (props) => {
  const { aboutIndexStore, routerStore } = useStores().rootStore;

  return useObserver(() => <div className={styles.style}>
    <PageHeader
      className={styles.page_header}
      onBack={() => window.history.back()}
      title="About"
      subTitle="This is a subtitle"
    />
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
      <Statistic title="url里的params" value={routerStore.query['params'] + ''} />
    </div>
  </div>)
}