import React from 'react';
import * as styles from './style.scss';
import { useObserver } from 'mobx-react-lite';
import { useStores } from '@store';

export default (props) => {
  const { indexStore } = useStores().rootStore;
  return useObserver(() => <div className={styles.style}>{indexStore.total}
    <div className={styles.icon} onClick={() => { indexStore.setCount(indexStore.count + 1) }}></div>
  </div>)
}