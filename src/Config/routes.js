import Home from '../Components/Home.vue';
import Register from '../Components/Register.vue';
import Login from '../Components/Login.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
];

export default routes;