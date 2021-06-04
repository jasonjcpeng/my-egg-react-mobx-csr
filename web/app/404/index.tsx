import React, { useEffect } from "react";
import * as styles from "./style.scss";
import { useObserver } from "mobx-react-lite";
import { useStores } from "@store/index";

export default (props: any) => {
  useEffect(() => {}, []);

  return useObserver(() => <div className={styles.style}>404</div>);
};
