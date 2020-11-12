import Lazy from '@components/lazy-load-components';


export default [
  {
    title: 'about',
    path: "/about",
    component: Lazy(() => import('@app/about')),
  },
  {
    title: 'bus',
    path: "/info/bus",
    component: Lazy(() => import('@app/about')),
  },
  {
    title: 'cart',
    path: "/info/cart",
    component: Lazy(() => import('@app/index')),
  }, {
    title: '首页',
    path: "/",
    component: Lazy(() => import('@app/index')),
  }, { // 注意！ 404页面必须放在末尾
    title: '404',
    path: "*",
    component: Lazy(() => import('@app/404')),
  },
];