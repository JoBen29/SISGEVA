<template>
  <div class="overlay">
    <div class="login-form">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="username">Usuario</label>
          <input 
            type="text" 
            id="username" 
            v-model="form.username" 
            required 
            placeholder="Ingrese usuario o correo"
          />
        </div>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input 
            type="password" 
            id="password" 
            v-model="form.password" 
            required 
            placeholder="Ingrese contraseña"
          />
        </div>
        <div class="form-group form-check">
          <input 
            type="checkbox" 
            id="rememberMe" 
            v-model="form.rememberMe"
            class="form-check-input"
          />
          <label for="rememberMe" class="form-check-label">Recordar credenciales</label>
        </div>
        <button type="submit" :disabled="isSubmitting">Ingresar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
        rememberMe: false,
      },
      isSubmitting: false,
    };
  },
  methods: {
    async handleSubmit() {
      if (this.isSubmitting) return;

      this.isSubmitting = true;

      // Simulate form submission delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Process login here (e.g., API call)
      console.log('Login attempt:', this.form);

      // Reset form
      this.isSubmitting = false;
    },
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensures the form is on top of other content */
}

.login-form {
  max-width: 400px;
  width: 100%;
  padding: 2rem;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.9); /* Slightly transparent white */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

h2 {
  text-align: center;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-check {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.form-check-input {
  margin-right: 0.5rem;
}

.form-check-label {
  margin-bottom: 0; /* Removes default margin */
}

button {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: #007BFF;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}

button:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}
</style>
