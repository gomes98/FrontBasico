import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home'),
    // metadata para informar que a rota precisa de autenticação
    // meta: { requiresAuth: true }
  },
  {
    path: '/pagina2',
    name: 'Pagina2',
    component: () => import(/* webpackChunkName: "Pagina2" */ '../views/Pagina2'),
    // metadata para informar que a rota precisa de autenticação
    // meta: { requiresAuth: true }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// todas as trocas de rota passam por aqui, to = rota atual, from = rota anterior, next = função para continuar a navegação
router.beforeEach((to, from, next) => {
  console.log('to', to);
  console.log('from', from);
  next()
})

export default router
