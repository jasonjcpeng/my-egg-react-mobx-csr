import React, { useEffect } from "react";
import { useStores } from '@store/index';
import { useObserver } from 'mobx-react-lite';
import routesMap from './router.map';
import history from 'history/browser';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default (props: any) => {
  const { routerStore } = useStores().rootStore;
  useEffect(() => {
    const unlisten = history.listen(({ location }) => {
      routerStore.history = location.hash;
    });
    return () => {
      unlisten();
    }
  }, [])

  return useObserver(() => <Router >
    <Switch>
      {
        routesMap.map((route: any) => {
          return (
            <Route
              exact={route.path === '/' ? true : undefined}
              key={route.path}
              path={route.path}
              render={(props: any) => (
                <route.component {...props} routes={route.routes} />
              )}
            />
          );
        })
      }
    </Switch>
  </Router>)
}