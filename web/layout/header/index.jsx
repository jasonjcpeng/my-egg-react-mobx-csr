import React, { useEffect } from "react";
import { useObserver } from 'mobx-react-lite';
import { useStores } from '@store';

import { Layout } from 'antd';

const { Header } = Layout;

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';


export default () => {
  const { layoutStore } = useStores().rootStore;

  const toggle = () => { layoutStore.setCollapsed(!layoutStore.collapsed) }

  return useObserver(() => <Header style={{ padding: 0, background: '#fff' }}>
    {React.createElement(layoutStore.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
      style: { transition: 'color 0.3s', fontSize: '18px', lineHeight: '64px', padding: '0 24px', cursor: 'pointer' },
      onClick: toggle,
    })}
  </Header>)
}