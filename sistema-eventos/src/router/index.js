import { createRouter, createWebHistory } from 'vue-router';
//import UserLogin from '@/components/UserLogin.vue';
//import UserRegister from '@/components/UserRegister.vue';
//import UpdateEvent from '@/components/UpdateEvent.vue';
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
  {path: '/event/update/:id', name: 'update-event',component: UpdateEventView, meta: { requiresAuth: true }},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Guard para proteger rutas
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Si la ruta requiere autenticación y el usuario no está autenticado
    if (!isAuthenticated()) {
      next('/login'); // Redirigir al login
    } else {
      next(); // Continuar a la ruta protegida
    }
  } else {
    next(); // Continuar a las rutas que no están protegidas
  }
});

export default router;

