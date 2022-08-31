import '../bootstrap';
import { createApp } from 'vue'
import AppVueRouterTransitions from '../components/Vue-Router-Transitions/App-Vue-Router-Transitions.vue'
import router from './routes'

const app = createApp(AppVueRouterTransitions)
app.use(router)
app.mount('#app')