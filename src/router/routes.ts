import {routes} from './viewRoutes.ts'

export default [
    {
        path: '/login',
        component: () => import('@/views/Login.vue'),
    }, {
        path: '/',
        component: () => import('@/layout/index.vue'),
        children: routes
    },
]