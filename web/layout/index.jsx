import React, { useEffect } from "react";
import { useObserver } from 'mobx-react-lite';
import { useStores } from '@store';
import SideBar from './side-bar';
import Header from './header';
import { Layout } from 'antd';
import Router from '../router';
import 'antd/dist/antd.css';
const { Content, Footer, Sider } = Layout;

import Style from './style.scss'

export default () => {
  const { layoutStore } = useStores().rootStore;
  console.log('-----------layoutStore------------>', layoutStore.isLoading);
  return useObserver(() => (
    <Layout>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
        width={260}
        trigger={null}
        collapsible
        collapsed={layoutStore.collapsed}
      >
        <div className={Style.logo} />
        <SideBar />
      </Sider>
      <Layout style={{ marginLeft: layoutStore.collapsed ? 80 : 260 }}>
        <Header />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Router />
        </Content>
        <Footer style={{ textAlign: 'center' }}>xxx ©2020 Created by xxx Middle {layoutStore.isLoading ? '123' : 'aaa'}</Footer>
      </Layout>
    </Layout>
  ))
}
