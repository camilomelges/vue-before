import Home from '../Components/Home.vue';
import SunInformations from '../Components/SunInformations.vue';
import SalesForce from '../Components/SalesForce.vue';
import ConnectedVivo from '../Components/ConnectedVivo.vue';
import TurbineSales from '../Components/TurbineSales.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/sun-informations', component: SunInformations },
    { path: '/sales-force', component: SalesForce },
    { path: '/connected-vivo', component: ConnectedVivo },
    { path: '/turbine-sales', component: TurbineSales },
];

export default routes;