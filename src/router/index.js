import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    path: '/join',
                    component: resolve => require(['../components/page/DeviceTable.vue'], resolve)
                }
            ]
        }
    ]
})
