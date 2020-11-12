import React, { useEffect } from 'react';
import * as styles from './style.scss';
import { useObserver } from 'mobx-react-lite';
import { useStores } from '@store';
import {
  Link,
} from "react-router-dom";

export default (props) => {
  const { indexStore } = useStores().rootStore;

  useEffect(() => {
    window.setTimeout(() => {
      indexStore.getResponse();
    }, 2000)
  }, [])

  return useObserver(() => <div onClick={() => {
  }} className={styles.style}>{indexStore.total}
    <p><Link to="/about">To About</Link></p>
    <p>{indexStore.response}</p>
    <div className={styles.icon} onClick={() => { indexStore.setCount((indexStore.count + 1) * 2) }}></div>
  </div>)
}