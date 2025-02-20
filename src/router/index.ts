// 创建一个路由器并暴露出去
import {createRouter, createWebHistory} from 'vue-router'
import routes from './routes.ts'

export default createRouter({
    // 路由器工作模式
    history: createWebHistory(),
    routes
})