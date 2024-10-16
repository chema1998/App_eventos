<template>
    <div class="create-event-view">
      <h2>Crear Evento</h2>
      <CreateEventForm @submit="createEvent" />
      <p v-if="message" class="message">{{ message }}</p>
    </div>
  </template>
  
  <script>
  import api from '../services/api';
  import CreateEventForm from '../components/CreateEventForm.vue';
  
  export default {
    components: {
      CreateEventForm,
    },
    data() {
      return {
        message: '',
      };
    },
    methods: {
      async createEvent(newEvent) {
        try {
          const response = await api.post('/crear', newEvent);
          this.message = response.data.message;
          // Redirigir a la lista de eventos o cualquier otra página
          // this.$router.push('/eventos');
        } catch (error) {
          console.error('Error creating event:', error);
          this.message = 'Error al crear el evento. Asegúrate de que todos los campos están completos.';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .create-event-view {
    background-color: #2c3e50; /* Fondo oscuro para la vista */
    color: white; /* Texto en color blanco */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  }
  
  .message {
    color: #e74c3c; /* Color rojo para mensajes de error */
    text-align: center; /* Centrar el mensaje */
    margin-top: 10px; /* Espaciado superior */
  }
  </style>
  
  