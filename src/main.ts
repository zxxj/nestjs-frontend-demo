import { createApp } from 'vue'
import App from './App.vue'
import { setupStores } from './stores'
import { setupRouter } from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';


const bottstrap = () => {

	const app = createApp(App)

	// router
	setupRouter(app)

	// store
	setupStores(app)

	// antd
	app.use(Antd)

	app.mount("#app")
}

bottstrap()
