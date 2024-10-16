<template>
    <form @submit.prevent="submitForm" class="create-event-form">
      <div class="form-group">
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="localEvent.name" required />
      </div>
      <div class="form-group">
        <label for="description">Descripción:</label>
        <textarea id="description" v-model="localEvent.description" required></textarea>
      </div>
      <div class="form-group">
        <label for="date">Fecha:</label>
        <input type="date" id="date" v-model="localEvent.date" required />
      </div>
      <div class="form-group">
        <label for="location">Ubicación:</label>
        <input type="text" id="location" v-model="localEvent.location" required />
      </div>
      <div class="form-group">
        <label for="price">Precio:</label>
        <input type="number" id="price" v-model="localEvent.price" step="0.01" required />
      </div>
      <button type="submit" class="submit-button">Crear Evento</button>
    </form>
  </template>
  
  <script>
  export default {
    props: {
      event: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        localEvent: { ...this.event }, // Copia del objeto para evitar mutaciones directas
      };
    },
    methods: {
      submitForm() {
        this.$emit('submit', this.localEvent);
      },
    },
    watch: {
      event: {
        handler(newValue) {
          this.localEvent = { ...newValue }; // Actualiza localEvent si la prop cambia
        },
        deep: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .create-event-form {
    background-color: #34495e; /* Fondo oscuro */
    color: white; /* Texto blanco */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  }
  
  .form-group {
    margin-bottom: 15px; /* Espacio entre grupos */
  }
  
  label {
    display: block; /* Mostrar etiquetas como bloque */
    margin-bottom: 5px; /* Espacio debajo de la etiqueta */
  }
  
  input, textarea {
    width: 100%; /* Ocupa todo el ancho */
    padding: 10px; /* Espaciado interno */
    border: none; /* Sin borde */
    border-radius: 4px; /* Bordes redondeados */
    background-color: #2c3e50; /* Color de fondo oscuro para campos */
    color: white; /* Texto blanco en campos */
    transition: background-color 0.3s; /* Transición para hover */
  }
  
  input:focus, textarea:focus {
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
  </style>
  
  