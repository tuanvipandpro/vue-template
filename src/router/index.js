import { createRouter, createWebHistory, useRouter, useRoute } from "vue-router";
import Login from "../views/Login.vue";
import NotFound from "../views/404.vue";
import DashboardLayout from "../layouts/DashboardLayout.vue";
import Home from "../views/pages/Home.vue";
import Admin from "../views/pages/Admin.vue";

const menuRoutes = [
    {
      path: "/",
      name: "Home",
      component: Home,
      index: '1',
      type: 'side',
      meta: {
        requiresAuth: true,
        // requiredPermission: 'admin',
      },
    },
    {
      path: "/admin",
      name: "Admin",
      component: Admin,
      index: '2',
      type: 'side',
      meta: {
        requiresAuth: true,
        requiredPermission: "admin",
      },
    },
];

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/",
    component: DashboardLayout,
    children: menuRoutes,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const isAuthenticated = () => {
  return localStorage.getItem("isAuthenticated") === "true";
};

const hasPermission = (permission) => {
  const userPermissions = localStorage.getItem("userPermissions");
  return userPermissions && userPermissions.includes(permission);
};

router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth;
  const requiredPermission = to.meta.requiredPermission;

  if (requiresAuth && !isAuthenticated()) {
    next("/login");
  } else if (requiredPermission && !hasPermission(requiredPermission)) {
    next("/error");
  } else {
    next();
  }
});

export function useTransit() {
  const router = useRouter();
  const route = useRoute();

  function transitTo(path, params) {
    router.push(path, params);
  }

  function logout() {
    localStorage.clear();
    transitTo('/login');
  }

  function getIndexMenuItem(type) {
    if (type !== 'side' && type !== 'top') {
        return null
    }
    return {
        index: menuRoutes.filter(e => e.type === type).find(e => route.path === e.path).index,
        type: type
    }
  }

  return {
    getIndexMenuItem,
    transitTo,
    logout,
  };
}

export default router;
