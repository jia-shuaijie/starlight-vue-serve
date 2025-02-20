import {routes} from './viewRoutes.ts'

export default [
    {
        path: '/login',
        component: () => import('@/views/Login.vue'),
    }, {
        path: '/',
        children: routes
    },
]