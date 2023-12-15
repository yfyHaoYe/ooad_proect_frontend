import VueRouter from 'vue-router'
import Navigation from "@/views/Navigation.vue";

const routes = [
    {path: '/Navigation', component: Navigation},
    {path: '/', redirect: '/Navigation'}
]

export default new VueRouter({
    mode: 'history',
    routes
})
