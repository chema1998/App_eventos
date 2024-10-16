<template>
    <div class="register-container">
      <h2>Registro</h2>
      <form @submit.prevent="registerUser" class="register-form">
        <div class="form-group">
          <label for="name">Nombre:</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="form-group">
          <label>
            <input type="checkbox" v-model="termsAccepted" required />
            Acepto los <a href="/terms" target="_blank">términos y condiciones</a>
          </label>
        </div>
        <button type="submit" class="submit-button">Registrarse</button>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        termsAccepted: false,
        errorMessage: ''
      };
    },
    methods: {
      async registerUser() {
        try {
          const response = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: this.name,
              email: this.email,
              password: this.password,
              termsAccepted: this.termsAccepted
            })
          });
          const data = await response.json();
          if (response.ok) {
            this.$router.push('/login'); // Redirigir al login después del registro
          } else {
            this.errorMessage = data.message || 'Error en el registro';
          }
        } catch (error) {
          this.errorMessage = 'Error de conexión';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .register-container {
    background-color: #34495e; /* Fondo oscuro */
    color: white; /* Texto blanco */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    max-width: 400px; /* Ancho máximo */
    margin: auto; /* Centrado */
  }
  
  .register-form {
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
  