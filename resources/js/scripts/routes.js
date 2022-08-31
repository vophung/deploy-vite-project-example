import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Vue-Router-Transitions/Home.vue'
import Guide from '../components/Vue-Router-Transitions/Guide.vue'

const routes = [{
    path: '/vue-router-transitions-vue',
    component: Home,
    meta: {
        enterClass: "animate_animated animate__fadeInLeft",
        leaveClass: "animate_animated animate__fadeOutLeft",
    }
}, {
    path: '/vue-router-transitions-vue/guide',
    component: Guide,
    meta: {
        enterClass: "animate_animated animate__fadeInLeft",
        leaveClass: "animate_animated animate__fadeOutLeft",
    }
}];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router