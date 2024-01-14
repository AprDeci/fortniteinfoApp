import {createRouter,createWebHashHistory} from "vue-router";

const routes = [
    {
        path:'/',
        name:'Home',
        component:() => import('../views/index.vue'),
        redirect:'/shop',
        children:[
            {
                path:'/info',
                name:'Info',
                component:() => import('../views/info/index.vue'),
            },
            {
                path:'/shop',
                name:'Shop',
                component:() => import('../views/shop/index.vue'),
            },
            {
                path:'/test',
                name:'Test',
                component:() => import('../views/test/index.vue'),
            }
        ]
    },

]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router