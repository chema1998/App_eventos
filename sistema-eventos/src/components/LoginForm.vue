<template>
    <div class="login-container">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="loginUser" class="login-form">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit" class="submit-button">Iniciar Sesión</button>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        errorMessage: ''
      };
    },
    methods: {
      async loginUser() {
        try {
          await this.$store.dispatch('login', {
            email: this.email,
            password: this.password
          });
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
  
  .login-form {
    display: flex;
    flex-direction: column; /* Columna para los campos */
  }
  
  .form-group {
    margin-bottom: 15px; /* Espacio entre grupos */
  }
  
  label {
    margin-bottom: 5px; /* Espacio debajo de la etiqueta */
  }
  
  input {
    padding: 10px; /* Espaciado interno */
    border: none; /* Sin borde */
    border-radius: 4px; /* Bordes redondeados */
    background-color: #2c3e50; /* Color de fondo oscuro para campos */
    color: white; /* Texto blanco en campos */
    transition: background-color 0.3s; /* Transición para hover */
  }
  
  input:focus {
    background-color: #3a536a; /* Color más claro en foco */
    outline: none; /* Sin borde de enfoque */
  }
  
  .submit-button {
    background-color: #1abc9c; /* Color del botón */
    color: white; /* Texto blanco en botón */
    border: none; /* Sin borde */
    padding: 10px 15px; /* Espaciado del botón */
    border-radius: 5px; /* Bordes redondeados */
    cursor: pointer; /* Cambiar el cursor */
    transition: background-color 0.3s; /* Transición para hover */
  }
  
  .submit-button:hover {
    background-color: #16a085; /* Color más oscuro en hover */
  }
  
  .error-message {
    color: #e74c3c; /* Color rojo para mensajes de error */
    margin-top: 10px; /* Espacio arriba del mensaje de error */
  }
  </style>
  