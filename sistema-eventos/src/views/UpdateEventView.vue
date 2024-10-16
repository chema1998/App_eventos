<template>
    <div class="update-event-view">
      <UpdateEventForm :eventId="eventId" />
    </div>
  </template>
  
  <script>
  import UpdateEventForm from '@/components/UpdateEventForm.vue'; // Asegúrate de que la ruta sea correcta
  
  export default {
    components: {
      UpdateEventForm
    },
    computed: {
      eventId() {
        return this.$route.params.id; // Obtener el ID del evento desde los parámetros de la ruta
      }
    }
  };
  </script>
  
  <style scoped>
  .update-event-view {
    display: flex;
    justify-content: center; /* Centrar el contenido horizontalmente */
    align-items: center; /* Centrar el contenido verticalmente */
    height: 100vh; /* Altura completa de la ventana */
    background-color: #ecf0f1; /* Color de fondo de la vista */
  }
  </style>
  