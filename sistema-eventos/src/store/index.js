import { createStore } from 'vuex'; // Importa Vuex correctamente
import axios from 'axios'; // Importa axios

export default createStore({
  state: {
    token: localStorage.getItem('token') || null, // Recupera el token desde localStorage si existe
    user: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUser(state, user) {
      state.user = user;
    },
    logout(state) {
      state.token = null;
      state.user = null;
    }
  },
  actions: {
    async register( userData) {
      try {
        const response = await axios.post('http://localhost:5000/api/auth/register', userData);
        return response.data;
      } catch (error) {
        throw new Error('Error en el registro');
      }
    },
    async login({ commit }, credentials) {
      try {
        const response = await axios.post('http://localhost:5000/api/auth/login', credentials);
        commit('setToken', response.data.token);
        commit('setUser', { id: response.data.user.id, role: response.data.role });
        localStorage.setItem('token', response.data.token); // Guardar token en localStorage
        return response.data;
      } catch (error) {
        throw new Error('Error en el login');
      }
    },
    async fetchUser({ commit, state }) {
      if (!state.token) return;
      try {
        const response = await axios.get('http://localhost:5000/api/auth/user', {
          headers: { Authorization: `Bearer ${state.token}` }
        });
        commit('setUser', response.data);
      } catch (error) {
        commit('logout');
      }
    },
    logout({ commit }) {
      commit('logout');
      localStorage.removeItem('token'); // Eliminar el token de localStorage al cerrar sesión
    }
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
    getUser(state) {
      return state.user;
    }
  }
});

