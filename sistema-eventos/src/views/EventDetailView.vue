<template>
    <div class="event-detail-view">
      <AppNavbar />
      <div class="container">
        <EventDetailCard
          :event="event"
          :message="message"
          :register="register"
        />
      </div>
    </div>
  </template>
  
  <script>
  import api from '../services/api';
  import EventDetailCard from '../components/EventDetailCard.vue';
  import AppNavbar from '../components/AppNavbar.vue';
  
  export default {
    components: {
      EventDetailCard,
      AppNavbar,
    },
    data() {
      return {
        event: {},
        message: '',
      };
    },
    async mounted() {
      const eventId = this.$route.params.id;
      try {
        const response = await api.get(`/consultar/${eventId}`);
        this.event = response.data;
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    },
    methods: {
      async register() {
        const user = this.$store.getters.getUser;
        if (!user) {
          this.message = 'Debes iniciar sesión para registrarte en el evento.';
          return;
        }
  
        const userId = user.id;
  
        try {
          const response = await api.post(`/${this.event.id}/registrar`, { userId });
          this.message = response.data.message;
        } catch (error) {
          console.error('Error registering for event:', error);
          this.message = 'Error al registrarse en el evento.';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .event-detail-view {
    background-color: #2c3e50; /* Fondo oscuro */
    color: white;
    min-height: 100vh; /* Ocupar toda la altura de la pantalla */
    padding: 20px;
  }
  
  .container {
    max-width: 800px; /* Limitar el ancho */
    margin: 0 auto; /* Centrar en la pantalla */
    background-color: #34495e; /* Fondo de la tarjeta */
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  }
  
  h1 {
    text-align: center; /* Centrar el título */
    margin-bottom: 20px;
  }
  
  .message {
    color: #e74c3c; /* Color rojo para los mensajes de error */
    text-align: center; /* Centrar el mensaje */
  }
  </style>
  
  