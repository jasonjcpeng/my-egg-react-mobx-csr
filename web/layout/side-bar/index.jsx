import React, { useEffect } from "react";
import { useObserver } from 'mobx-react-lite';
import { useStores } from '@store';
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

export default (props) => {
  const { routerStore, layoutStore } = useStores().rootStore;
  return useObserver(() => <Menu
    mode="inline"
    theme="dark"
    defaultOpenKeys={[(routerStore.path.match(/(^\/.*(?=\/))|(^\/.*)/) ? routerStore.path.match(/(^\/.*(?=\/))|(^\/.*)/)[0] : '')]}
    defaultSelectedKeys={[routerStore.path]}
    onClick={(e) => {
      window.location.href = `#${e.key}`
    }}
  >
    <Menu.Item key="/" icon={<PieChartOutlined />} >{routerStore.path}</Menu.Item>
    <SubMenu key="/info" icon={<AppstoreOutlined />} title={'级联菜单'} >
      <Menu.Item key="/info/cart" icon={<PieChartOutlined />}>二菜单</Menu.Item>
      <Menu.Item key="/info/bus" icon={<PieChartOutlined />}>第二个二菜单</Menu.Item>
    </SubMenu>
    <Menu.Item key="/about" icon={<PieChartOutlined />}>关于</Menu.Item>
    <Menu.Item key="/router/not/match" icon={<PieChartOutlined />}>通往404</Menu.Item>
  </Menu>)
}
