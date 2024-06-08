<template>
    <div>
        <img src="" alt="">
    </div>
    <div class="d-flex align-content-center justify-content-center">
        <form @submit.prevent="register">
            <div class="form-group container w-100 d-flex p-0">
                <div class="w-48 pe-2">
                    <label for="name">Nombres</label>
                    <input type="text" id="name" v-model="names" placeholder="Nombres" class="form-control" required>
                </div>
                <div class="w-48 ps-2">
                    <label for="lastname">Apellidos</label>
                    <input type="text" id="lastname" v-model="lastnames" placeholder="Apellidos" class="form-control" required>
                </div>
            </div>
            <div class="form-group">
                <label for="email">Correo Electronico</label>
                <input type="email" id="email" v-model="email" placeholder="Correo Electronico" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="password">Contraseña</label>
                <input type="password" id="password" v-model="password" placeholder="Contraseña" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="password">Confirmar Contraseña</label>
                <input type="password" id="password" v-model="passwordConfirm" placeholder="Contraseña" class="form-control" required>
            </div>
            <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-primary">Registrarse</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        data() {
            return {
            names: '',
            lastnames: '',
            email: '',
            password: '',
            passwordConfirm: ''
        };
    },
    methods: {
    async register() {
        console.log(`Nombres: ${this.names}, Apellidos: ${this.lastnames}, Email: ${this.email}, Password: ${this.password}, Password Confirm: ${this.passwordConfirm}`)
    }}}
</script>

<style scoped>
    .form-group {
        margin-bottom: 1rem;
    }

    button{
        width: 40%;
    }

    @media (max-width: 460px) {
        .container{
            display: block !important;
        }

        button{
            width: 90%;
        }

        form{
            width: 90% !important;
        }

        .w-48{
            padding: 0 !important;
        }
    }
</style>