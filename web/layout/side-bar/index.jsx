import React, { useEffect } from "react";
import { useObserver } from 'mobx-react-lite';
import { useStores } from '@store';
import { Menu } from 'antd';
import {
  CompassOutlined,
  ShakeOutlined,
  AimOutlined,
} from '@ant-design/icons';

export default (props) => {
  const { routerStore, userStore } = useStores().rootStore;
  const filterKey = { // 过滤器，实现有些路由地址不符合菜单key但也显示激活状态
    '/': '/index/index',
  }
  return useObserver(() => <Menu
    key={routerStore.path}
    mode="inline"
    theme="dark"
    defaultOpenKeys={[(routerStore.path.match(/(^\/).*(?=\/)/) ? routerStore.path.match(/(^\/).*(?=\/)/)[0].replace(/(^\/)/, '') : '')]}
    defaultSelectedKeys={[filterKey[routerStore.path] || routerStore.path]}
    onClick={(e) => {
      switch (e.key) {
        default:
          routerStore.jump({ path: e.key });
          break;
      }
    }}>
    <Menu.SubMenu key="index" icon={<AimOutlined />} title="首页">
      <Menu.Item icon={<CompassOutlined />} key="/index/index">首页</Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu key="about" icon={<ShakeOutlined />} title="关于">
      <Menu.Item icon={<CompassOutlined />} key="/about/index">about</Menu.Item>
    </Menu.SubMenu>
  </Menu>)
}
