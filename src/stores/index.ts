import { createPinia} from "pinia"
import { App } from "vue"

const store = createPinia()

const setupStores  = (app: App<Element>) => {
	app.use(store)
}

export { store, setupStores }