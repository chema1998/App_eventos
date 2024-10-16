<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <h1>EventosApp</h1>
    </div>
    <ul class="navbar-links">
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/register">Registro</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/createEvent">Crear un evento</router-link></li>
    </ul>
    <button class="logout-button" @click="logout">Cerrar Sesión</button>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2c3e50; /* Color de fondo oscuro */
  color: white;
}

.navbar-brand h1 {
  margin: 0;
  font-size: 1.5rem;
}

.navbar-links {
  list-style-type: none;
  display: flex;
  gap: 1.5rem;
}

.navbar-links li {
  transition: color 0.3s;
}

.navbar-links li a {
  color: white;
  text-decoration: none;
}

.navbar-links li:hover a {
  color: #3498db; /* Color azul claro al pasar el mouse */
}

.logout-button {
  padding: 0.5rem 1rem;
  border: none;
  background-color: #e74c3c; /* Color rojo oscuro */
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.logout-button:hover {
  background-color: #c0392b; /* Color rojo más oscuro al pasar el mouse */
}
</style>
