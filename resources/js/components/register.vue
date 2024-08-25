<template>
    <div class="container">
      <h2>User Registration</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" v-model="form.name" class="form-control" id="name" required />
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" v-model="form.email" class="form-control" id="email" required />
        </div>
        
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" v-model="form.password" class="form-control" id="password" required />
        </div>
        
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" v-model="form.confirmPassword" class="form-control" id="confirmPassword" required />
        </div>
  
        <button type="submit" class="btn btn-primary">Register</button>
      </form>
  
      <div v-if="errors.length">
        <ul class="text-danger">
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        },
        errors: []
      };
    },
    methods: {
      submitForm() {
        this.errors = [];
  
        // Basic validation
        if (!this.form.name) {
          this.errors.push("Name is required.");
        }
        if (!this.validateEmail(this.form.email)) {
          this.errors.push("Valid email is required.");
        }
        if (!this.form.password) {
          this.errors.push("Password is required.");
        }
        if (this.form.password !== this.form.confirmPassword) {
          this.errors.push("Passwords do not match.");
        }
  
        // If no errors, proceed with form submission
        if (this.errors.length === 0) {
          // Handle the form submission, e.g., send data to server
          console.log('Form submitted:', this.form);
        }
      },
      validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 500px;
    margin: 50px auto;
  }
  .text-danger {
    margin-top: 20px;
    list-style-type: none;
    padding-left: 0;
  }
  </style>
  