import { createRouter, createWebHistory } from 'vue-router';
import EventListView from '@/views/EventListView.vue';
import EventDetailView from '@/views/EventDetailView.vue';
import CreateEventView from '@/views/CreateEventView.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import UpdateEventView from '@/views/UpdateEventView.vue';

// Verificar si el usuario está autenticado
function isAuthenticated() {
  return !!localStorage.getItem('token');  // Devuelve true si el token existe
}

const routes = [
  { path: '/event/:id', name: 'event-detail', component: EventDetailView },
  { path: '/', component: EventListView, meta: { requiresAuth: true } },
  { path: '/createEvent', name: 'create-event', component: CreateEventView, meta: { requiresAuth: true } },
  { path: '/register', component: RegisterView },
  { path: '/login', component: LoginView },
  {path: '/event/update/:id', name: 'update-event',component: UpdateEventView, meta: { requiresAuth: true, requiresAdmin: false }},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Guard para proteger rutas
router.beforeEach((to, from, next) => {
  const requiresAdmin = to.meta.requiresAdmin; // Verifica si la ruta requiere admin
  const isAdmin = !!localStorage.getItem('role') && localStorage.getItem('role') === 'admin';

  if (requiresAdmin && !isAdmin) {
    next('/'); // Redirigir a la página principal si no es admin
  } else if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated()) {
    next('/login'); // Redirigir al login si no está autenticado
  } else {
    next(); // Continuar
  }
});


export default router;

