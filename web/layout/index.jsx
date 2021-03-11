import React, { useEffect } from "react";
import { useObserver } from 'mobx-react-lite';
import { useStores } from '@store';
import SideBar from './side-bar';
import { Layout, message } from 'antd';
import Router from '../router';
import 'antd/dist/antd.css';
const { Content, Footer, Sider } = Layout;

export default () => {
  const { layoutStore, routerStore } = useStores().rootStore;
  useEffect(() => {

  })

  useEffect(() => {
    if (!layoutStore.message) {
      return () => { }
    }
    const config = {
      content: layoutStore.message.content || layoutStore.message.status,
      duration: 1,
      key: layoutStore.message.content || 'key',
      onClose: () => {
        layoutStore.setMessage(undefined)
      }
    }
    switch (layoutStore.message.status) {
      case 'error':
        message.error(config);
        break;
      default:
        message.success(config)
        break;
    }
  }, [layoutStore.message])

  return useObserver(() => (
    <Layout >
      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
          trigger={null}
          collapsible
          collapsed={layoutStore.collapsed}
        >
          <SideBar />
        </Sider>
        <Layout style={{ marginLeft: layoutStore.collapsed ? 80 : 200 }}>
          <Layout.Header style={{ padding: 0, background: '#fff' }}>
          </Layout.Header>
          <Content key={routerStore.appId} style={{ padding: '10px 0 0 0', height: '100%', overflow: 'auto', margin: '', overflow: 'initial' }}>
            <Router />
          </Content>
        </Layout>
      </Layout>

    </Layout>
  ))
}
