import {createMemoryHistory, createRouter} from 'vue-router'
import login from '../views/login.vue'
// import layout from '../layout/index.vue'


const routes = [
    // {
    //     path: '/layout',
    //     component: layout,
    //     // children: [
    //     //     {
    //     //         path: '/home',
    //     //         component: () => import('../views/Home.vue'),
    //     //     },
    //     // ]
    // },
    {
        path: '/login',
        component: login
    },
    {
        path: "/home",
        name: "home",
        component: () => import('../views/Home.vue'),
    }
]

export default createRouter({
    history: createMemoryHistory(),
    routes,
})