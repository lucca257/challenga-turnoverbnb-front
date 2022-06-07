import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from './middleware/auth';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'balance',
    component: () => import('../views/HomePage.vue'),
    meta: {
      middleware: [auth]
    }
  },
  {
    path: '/admin/deposits',
    name: 'checklist',
    component: () => import('../views/ChecksControlPage'),
    meta: {
      middleware: [auth]
    }
  },
  {
    path: '/incomes',
    name: 'incomes',
    component: () => import('../views/IncomesPage.vue'),
    meta: {
      middleware: [auth]
    }
  },
  {
    path: '/expenses',
    name: 'expenses',
    component: () => import('../views/ExpensesPage.vue'),
    meta: {
      middleware: [auth]
    }
  },
  {
    path: '/checks',
    name: 'checks',
    component: () => import('../views/CheckPage.vue'),
    meta: {
      middleware: [auth]
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginPage')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterPage')
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('../views/LogoutPage')
  }
]

 // Creates a `nextMiddleware()` function which not only // runs the default `next()` callback but also triggers
// the subsequent Middleware function.
function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  // If no subsequent Middleware exists,
  // the default `next()` callback is returned.
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    // Run the default Vue Router `next()` callback first.
    context.next(...parameters);
    // Then run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
        ? to.meta.middleware
        : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to,
    };
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({ ...context, next: nextMiddleware });
  }

  return next();
});

export default router
