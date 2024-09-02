<template>
  <div class="overlay" @click.self="closeForm">
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

      <!-- Password Recovery Link -->
      <div class="additional-links">
        <router-link to="/recover-password" class="password-recovery-link">
          ¿Olvidaste tu contraseña?
        </router-link>
      </div>

      <!-- Registration Link -->
      <div class="additional-links">
        <p>¿No tienes una cuenta? 
          <router-link to="/register" class="register-link">
            Regístrate aquí
          </router-link>
        </p>
      </div>

      <!-- Social Media Login -->
      <div class="social-media-login">
        <p>O inicia sesión con:</p>
        <div class="social-icons">
          <a href="/auth/google" class="google-icon">
            <img src="./img/google-icon.png" alt="Google" />
          </a>
          <a href="/auth/facebook" class="facebook-icon">
            <img src="./img/facebook-icon.png" alt="Facebook" />
          </a>
          <a href="/auth/apple" class="apple-icon">
            <img src="./img/apple-icon.png" alt="Apple" />
          </a>
        </div>
      </div>
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
    closeForm() {
      // Add logic to close the form, e.g., navigating away or hiding the form component
      this.$emit('close');
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
  background-color: rgba(0, 0, 0, 0.7); /* More transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.login-form {
  max-width: 400px;
  width: 100%;
  padding: 2rem;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.85); /* Transparent background for the form */
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
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
  margin-bottom: 0;
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

.additional-links {
  text-align: center;
  margin-top: 1rem;
}

.additional-links a {
  color: #007BFF;
  text-decoration: none;
}

.social-media-login {
  text-align: center;
  margin-top: 1.5rem;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-icons img {
  width: 32px;
  height: 32px;
  cursor: pointer;
}
</style>
