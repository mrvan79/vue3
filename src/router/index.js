import { createRouter, createWebHistory } from 'vue-router';
import Registration from '../components/Registration.vue';
import ErrorPage from '../components/errorPage.vue';
import WaittingPage from '../components/WaittingPage.vue';



const routes = [
    { path: '/', component: Registration },
    { path: '/ErrorPage', component: ErrorPage },
    { path: '/Watting', component: WaittingPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});



export default router;
