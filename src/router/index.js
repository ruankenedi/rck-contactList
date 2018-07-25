import Vue from 'vue';
import VueRouter from 'vue-router';

function load(component) {
	return () => System.import(`../views/${component}`);
}

Vue.use(VueRouter);

export default Router;

function Router() {
	const router = new VueRouter({
		routes: [{
			name: 'home',
			path: '/',
			component: load('Index'),
			// redirect: ,
			meta: { requiresAuth: true },
			children: [
				{
					name: 'login',
					path: '/login',
					component: load('Login'),
					meta: { requiresAuth: true }
				},
				{
					name: 'index',
					path: '/index',
					component: load('Index'),
					meta: { requiresAuth: true }
				}
			]

		}]
	});

	return router;
}
