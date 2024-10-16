<template>
  <div class="login-container">
    <h2>Iniciar Sesión</h2>
    <LoginForm @login="loginUser" :errorMessage="errorMessage" />
  </div>
</template>

<script>
import LoginForm from './LoginForm.vue';

export default {
  components: {
    LoginForm
  },
  data() {
    return {
      errorMessage: ''
    };
  },
  methods: {
    async loginUser(credentials) {
      try {
        await this.$store.dispatch('login', credentials);
        this.$router.push('/'); // Redirigir al inicio u otra ruta
      } catch (error) {
        this.errorMessage = error.message || 'Error al iniciar sesión';
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  background-color: #34495e; /* Fondo oscuro */
  color: white; /* Texto blanco */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  max-width: 400px; /* Ancho máximo */
  margin: auto; /* Centrado */
}
</style>


