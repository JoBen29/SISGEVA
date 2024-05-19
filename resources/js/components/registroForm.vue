<template>
    <form @submit.prevent="submitForm">
        <div class="form-group">
            <label for="name">Nombres</label>
            <input type="text" id="name" v-model="names" placeholder="Nombres" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="lastname">Apellidos</label>
            <input type="text" id="lastname" v-model="lastnames" placeholder="Apellidos" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="email">Correo Electronico</label>
            <input type="email" id="email" v-model="email" placeholder="Correo Electronico" class="form-control" required>

        </div>
        <div class="form-group">
            <label for="password">Contraseña</label>
            <input type="password" id="password" v-model="password" placeholder="Contraseña" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary">Registrarse</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
            names: '',
            lastnames: '',
            email: '',
            password: ''
        };
    },
    methods: {
        submitForm() {
            // Aquí podrías enviar los datos del formulario al servidor para autenticar al usuario
            console.log('Nombre de Usuario:', this.username, ', contraseña:', this.password);
        }
    }
}
</script>

<style scoped>
    .form-group {
        margin-bottom: 1rem;
    }
</style>s