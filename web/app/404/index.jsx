import React, { useEffect } from 'react';
import * as styles from './style.scss';
import { useObserver } from 'mobx-react-lite';
import { useStores } from '@store';

export default (props) => {
  const { indexStore } = useStores().rootStore;

  useEffect(() => {
  }, [])

  return useObserver(() => <div className={styles.style}>
    404
  </div>)
}