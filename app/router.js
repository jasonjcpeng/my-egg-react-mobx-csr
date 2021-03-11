module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.index.index);
  router.get('/healthy', controller.index.healthy); // 负载均衡存活心跳检测
  router.get('/api/*', controller.api.index);
  router.post('/api/*', controller.api.index);
};