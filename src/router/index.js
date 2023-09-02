import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '../views/Login.vue';
import NotFound from '../views/404.vue'
import DashboardLayout from '../layouts/DashboardLayout.vue';
import Home from '../views/pages/Home.vue';
import Admin from '../views/pages/Admin.vue';

const routes = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/',
        component: DashboardLayout,
        children: [
            {
                path: '',
                name: 'Home',
                component: Home,
                meta: {
                    requiresAuth: true,
                    // requiredPermission: 'admin',
                }
            },
            {
                path: '/admin',
                name: 'Admin',
                component: Admin,
                meta: {
                    requiresAuth: true,
                    requiredPermission: 'admin',
                }
            },
        ],
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const isAuthenticated = () => {
    return localStorage.getItem('isAuthenticated') === 'true';
}

const hasPermission = (permission) => {
    const userPermissions = localStorage.getItem('userPermissions');
    return userPermissions && userPermissions.includes(permission);
}

router.beforeEach((to, from, next) => {
    const requiresAuth = to.meta.requiresAuth;
    const requiredPermission = to.meta.requiredPermission;

    if (requiresAuth && !isAuthenticated()) {
        next('/login');
    } else if (requiredPermission && !hasPermission(requiredPermission)) {
        next('/error');
    } else {
        next();
    }
})

export default router;