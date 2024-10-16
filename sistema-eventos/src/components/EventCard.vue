<template>
    <div class="event-card" @click="goToDetail(event.id)">
      <h2>{{ event.name }}</h2>
      <p class="event-description">{{ event.description }}</p>
      <p><strong>Fecha:</strong> {{ event.date }}</p>
      <p><strong>Ubicación:</strong> {{ event.location }}</p>
      <p><strong>Precio:</strong> ${{ event.price }}</p>
      <button class="delete-button" @click.stop="deleteEvent(event.id)">Eliminar Evento</button>
    </div>
  </template>
  
  <script>
  import api from '../services/api';
  
  export default {
    props: {
      event: Object,
    },
    methods: {
      goToDetail(eventId) {
        this.$router.push(`/event/${eventId}`);
      },
      async deleteEvent(eventId) {
        const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este evento?');
        if (!confirmDelete) return;
  
        try {
          await api.delete(`/borrar/${eventId}`);
          this.$emit('event-deleted'); // Emitir evento para notificar a EventListView
          alert('Evento eliminado exitosamente.');
        } catch (error) {
          console.error('Error deleting event:', error);
          alert('Error al eliminar el evento.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .event-card {
    background-color: #34495e; /* Color de fondo oscuro */
    color: white;
    border-radius: 8px;
    padding: 15px;
    width: calc(33% - 20px);
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.3s;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  }
  
  .event-card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.7);
  }
  
  .event-description {
    color: #bdc3c7; /* Color gris claro para la descripción */
  }
  
  .delete-button {
    background-color: #e74c3c; /* Color rojo para el botón de eliminar */
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .delete-button:hover {
    background-color: #c0392b; /* Color rojo más oscuro al pasar el mouse */
  }
  </style>
  
  