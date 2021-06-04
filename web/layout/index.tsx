import React, { useEffect } from "react";
import { useObserver } from "mobx-react-lite";
import { useStores } from "@store/index";
import SideBar from "./side-bar";
import { Layout, message } from "antd";
import Router from "../router";
import "antd/dist/antd.css";
import * as layoutStore from "declarations/web/store/layout.store.d";
const { Content, Footer, Sider } = Layout;

export default () => {
  const { layoutStore, routerStore } = useStores().rootStore;
  useEffect(() => {});

  useEffect(() => {
    let layoutStoreMessage: layoutStore.message = layoutStore.message;
    if (layoutStoreMessage.status === "") {
      return () => {};
    }
    const config = {
      content: layoutStoreMessage.content || layoutStoreMessage.status,
      duration: 1,
      key: layoutStoreMessage.content || "key",
      onClose: () => {
        layoutStore.message = { content: "", status: "" };
      },
    };
    switch (layoutStoreMessage.status) {
      case "error":
        message.error(config);
        break;
      default:
        message.success(config);
        break;
    }
  }, [layoutStore.message]);

  return useObserver(() => (
    <Layout>
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
          trigger={null}
          collapsible
          collapsed={layoutStore.collapsed}
        >
          <SideBar />
        </Sider>
        <Layout style={{ marginLeft: layoutStore.collapsed ? 80 : 200 }}>
          <Layout.Header
            style={{ padding: 0, background: "#fff" }}
          ></Layout.Header>
          <Content
            key={routerStore.query["appId"]}
            style={{
              padding: "10px 0 0 0",
              height: "100%",
              overflow: "auto",
              margin: "",
              overflowY: "initial",
            }}
          >
            <Router />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  ));
};
