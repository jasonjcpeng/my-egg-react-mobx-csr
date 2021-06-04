import Lazy from "@components/lazy-load-components/index";
import home from "@app/index/index";

export default [
  {
    title: "首页",
    path: "/index/index",
    component: home,
  },
  {
    title: "关于",
    path: "/about/index",
    component: Lazy(() => import("@app/about/index")),
  },
  {
    // index
    title: "首页",
    path: "/",
    component: home,
  },
  {
    // 注意！ 404页面必须放在末尾
    title: "404",
    path: "*",
    component: Lazy(() => import("@app/404")),
  },
];
