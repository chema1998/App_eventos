<template>
    <div class="register-view">
      <RegisterForm />
    </div>
  </template>
  
  <script>
  import RegisterForm from '@/components/RegisterForm.vue'; // Asegúrate de que la ruta sea correcta
  
  export default {
    components: {
      RegisterForm
    }
  };
  </script>
  
  <style scoped>
  .register-view {
    display: flex;
    justify-content: center; /* Centrar el contenido horizontalmente */
    align-items: center; /* Centrar el contenido verticalmente */
    height: 100vh; /* Altura completa de la ventana */
    background-color: #ecf0f1; /* Color de fondo de la vista */
  }
  </style>
  