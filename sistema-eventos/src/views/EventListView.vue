<template>
    <div class="event-list">
      <AppNavbar />
      <h1 class="event-title">Eventos</h1>
      <div class="event-cards">
        <EventCard 
          v-for="event in events" 
          :key="event.id" 
          :event="event" 
          @event-deleted="fetchEvents"
        />
      </div>
    </div>
  </template>
  
  <script>
  import EventCard from '../components/EventCard.vue';
  import AppNavbar from '../components/AppNavbar.vue';
  import api from '../services/api';
  
  export default {
    components: {
      EventCard,
      AppNavbar,
    },
    data() {
      return {
        events: [],
      };
    },
    async mounted() {
      await this.fetchEvents();
    },
    methods: {
      async fetchEvents() {
        try {
          const response = await api.get('/consultar');
          this.events = response.data;
        } catch (error) {
          console.error('Error fetching events:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .event-list {
    padding: 20px;
    background-color: #2c3e50; /* Fondo de la vista */
    color: white;
    min-height: 100vh; /* Para ocupar toda la altura de la pantalla */
  }
  
  .event-title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 2rem;
  }
  
  .event-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center; /* Centrar las tarjetas */
  }
  </style>
  
  