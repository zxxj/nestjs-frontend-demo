import { createApp } from 'vue'
import App from './App.vue'
import { setupStores } from './stores'
import { setupRouter } from './router'


const bottstrap = () => {

	const app = createApp(App)

	// router
	setupRouter(app)

	// store
	setupStores(app)

	app.mount("#app")
}

bottstrap()
