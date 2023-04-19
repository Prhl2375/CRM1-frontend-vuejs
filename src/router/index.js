import {createRouter, createWebHistory} from "vue-router";
import AdminHomeView from "@/views/admin/AdminHomeView.vue";
import AdminProjectView from "@/views/admin/AdminProjectView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import AdminUsersView from "@/views/admin/AdminUsersView.vue";
import HomeView from "@/views/user/HomeView.vue";
import ProjectView from "@/views/user/ProjectView.vue";
import AdminApp from "@/views/AdminApp.vue";
import UserApp from "@/views/UserApp.vue";
import {useUserStore} from "@/store/auth";
import axios from "axios";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/admin',
            name: 'Admin',
            component: AdminApp,
            beforeEnter: (to, from, next) => {
                const user = useUserStore();
                if (user.role !== 'admin') {
                    // If not, redirect to the login page
                    next('/');
                }
                else {
                    next();
                }
            },
            children: [
                {
                    path: '',
                    name: 'AdminHome',
                    component: AdminHomeView
                },
                {
                    path: 'projects',
                    name: 'AdminProjects',
                    component: AdminProjectView
                },
                {
                    path: 'users',
                    name: 'AdminUsers',
                    component: AdminUsersView
                }
            ]
        },
        {
            path: '/',
            name: 'User',
            component: UserApp,
            beforeEnter: (to, from, next) => {
                const user = useUserStore();
                if (user.role == 'admin') {
                    // If not, redirect to the login page
                    next('/admin');
                }
                else {
                    next();
                }
            },
            children: [
                {
                    path: '',
                    name: 'Home',
                    component: HomeView
                },
                {
                    path: 'projects',
                    name: 'Projects',
                    component: ProjectView
                }
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: LoginView
        },
        {
            path: '/register',
            name: 'Register',
            component: RegisterView
        }
    ]
})


router.beforeEach((to) => {
    return axios.get('/api/test-auth').then((response) => {
        const user = useUserStore();
        user.role = response.data;
        if(user.role === 'guest' && to.name !== 'Login' && to.name !== 'Register'){
            return '/login';
        }
    });
})


export default router;
