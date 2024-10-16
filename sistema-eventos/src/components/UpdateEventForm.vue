<template>
    <div class="update-event-container">
      <h2>Actualizar Evento</h2>
      <form @submit.prevent="updateEvent" class="update-event-form">
        <div class="form-group">
          <label for="name">Nombre:</label>
          <input type="text" id="name" v-model="event.name" required />
        </div>
        <div class="form-group">
          <label for="description">Descripción:</label>
          <textarea id="description" v-model="event.description" required></textarea>
        </div>
        <div class="form-group">
          <label for="date">Fecha:</label>
          <input type="date" id="date" v-model="event.date" required />
        </div>
        <div class="form-group">
          <label for="location">Ubicación:</label>
          <input type="text" id="location" v-model="event.location" required />
        </div>
        <div class="form-group">
          <label for="price">Precio:</label>
          <input type="number" id="price" v-model="event.price" />
        </div>
        <button type="submit" class="submit-button">Actualizar Evento</button>
      </form>
      <p v-if="message" class="message">{{ message }}</p>
    </div>
  </template>
  
  <script>
  import api from '../services/api';
  
  export default {
    props: {
      eventId: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        event: {
          name: '',
          description: '',
          date: '',
          location: '',
          price: null,
        },
        message: '',
      };
    },
    async mounted() {
      try {
        const response = await api.get(`/consultar/${this.eventId}`);
        this.event = response.data;
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    },
    methods: {
      async updateEvent() {
        try {
          const response = await api.put(`/actualizar/${this.event.id}`, {
            name: this.event.name,
            description: this.event.description,
            date: this.event.date,
            location: this.event.location,
            price: this.event.price,
          });
          this.message = response.data.message;
        } catch (error) {
          console.error('Error updating event:', error);
          this.message = 'Error al actualizar el evento.';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .update-event-container {
    background-color: #34495e; /* Fondo oscuro */
    color: white; /* Texto blanco */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    max-width: 500px; /* Ancho máximo */
    margin: auto; /* Centrado */
  }
  
  .update-event-form {
    display: flex;
    flex-direction: column; /* Columna para los campos */
  }
  
  .form-group {
    margin-bottom: 15px; /* Espacio entre grupos */
  }
  
  label {
    margin-bottom: 5px; /* Espacio debajo de la etiqueta */
  }
  
  input,
  textarea {
    padding: 10px; /* Espaciado interno */
    border: none; /* Sin borde */
    border-radius: 4px; /* Bordes redondeados */
    background-color: #2c3e50; /* Color de fondo oscuro para campos */
    color: white; /* Texto blanco en campos */
    transition: background-color 0.3s; /* Transición para hover */
  }
  
  input:focus,
  textarea:focus {
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
  
  .message {
    margin-top: 10px; /* Espacio arriba del mensaje */
    color: #e74c3c; /* Color rojo para mensajes */
  }
  </style>
  