export const routes = [
    {
        path: '/home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/role',
        component: () => import('@/views/role/index.vue')
    },
];