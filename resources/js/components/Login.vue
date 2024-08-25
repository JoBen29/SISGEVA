<template>
    <div class="login-form">
      <h2>Login</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="username">Username</label>
          <input 
            type="text" 
            id="username" 
            v-model="form.username" 
            required 
            placeholder="Enter your username"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input 
            type="password" 
            id="password" 
            v-model="form.password" 
            required 
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" :disabled="isSubmitting">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          username: '',
          password: '',
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
  .login-form {
    max-width: 300px;
    margin: auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
  
  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
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
  