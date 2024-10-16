<template>
    <div class="login-view">
      <LoginForm />
    </div>
  </template>
  
  <script>
  import LoginForm from '@/components/LoginForm.vue'; // Asegúrate de que la ruta sea correcta
  
  export default {
    components: {
      LoginForm
    }
  };
  </script>
  
  <style scoped>
  .login-view {
    display: flex;
    justify-content: center; /* Centrar el contenido horizontalmente */
    align-items: center; /* Centrar el contenido verticalmente */
    height: 100vh; /* Altura completa de la ventana */
    background-color: #ecf0f1; /* Color de fondo de la vista */
  }
  </style>
  
  