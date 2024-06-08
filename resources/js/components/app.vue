<template>
    <div>
        <header>
            <nav>
                <ul>
                    <li>
                    <router-link to="/inicio">Inicio</router-link>
                    </li>
                    <li>
                    <router-link to="/register">Formulario de Registro</router-link>
                    </li>
                    <li>
                    <router-link to="/login">Inicio de Sesión</router-link>
                    </li>
                    <li>
                    <router-link to="/productos">Productos</router-link>
                    </li>
            </ul>
            </nav>
        </header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    export default {
        data: () => ({}),
    };
</script>