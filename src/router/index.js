import { from } from "core-js/fn/array";
import {createRouter, createWebHistory} from 'vue-router'
import Index from '@/views/Index.vue';
import Edit from '@/views/Edit.vue';
import Create from '@/views/Create.vue'

const routers = [
    {
        path : '/',
        name : 'post.index',
        component : Index
    },
    {
        path : '/create',
        name : 'post.create',
        component : Create
    },
    {
        path : '/edit/:id',
        name : 'post.edit',
        component : Edit
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router