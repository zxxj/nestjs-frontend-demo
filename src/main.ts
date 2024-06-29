import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import App from './App.vue';
import { setupStores } from './stores';
import { setupRouter } from './router';

const bottstrap = () => {
  const app = createApp(App);

  // router
  setupRouter(app);

  // pinia
  setupStores(app);

  // antd
  app.use(Antd);

  app.mount('#app');
};

bottstrap();
