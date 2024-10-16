<template>
    <div class="event-detail-card">
      <h1>{{ event.name }}</h1>
      <img :src="event.imageUrl" alt="Evento" v-if="event.imageUrl" class="event-image" />
      <p><strong>Descripción:</strong> {{ event.description }}</p>
      <p><strong>Ubicación:</strong> {{ event.location }}</p>
      <p><strong>Precio:</strong> ${{ event.price }}</p>
      <button class="register-button" @click="register">Registrarse</button>
      <p v-if="message" class="message">{{ message }}</p>
      <router-link :to="{ name: 'update-event', params: { id: event.id } }">
        <button class="update-button">Actualizar Evento</button>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      event: Object,
      message: String,
      register: Function,
    },
  };
  </script>
  
  <style scoped>
  .event-detail-card {
    background-color: #34495e; /* Fondo oscuro de la tarjeta */
    color: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    margin-bottom: 20px; /* Espaciado inferior */
  }
  
  .event-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px; /* Esquinas redondeadas para la imagen */
  }
  
  .register-button, .update-button {
    background-color: #e67e22; /* Color naranja */
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-right: 10px; /* Espaciado entre botones */
  }
  
  .register-button:hover, .update-button:hover {
    background-color: #d35400; /* Color más oscuro al pasar el ratón */
  }
  
  .message {
    color: #e74c3c; /* Color rojo para mensajes de error */
    text-align: center; /* Centrar el mensaje */
    margin-top: 10px; /* Espaciado superior */
  }
  </style>
  
  