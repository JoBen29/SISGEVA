<template>
  <div id="app">
    <!-- Header with Navbar -->
    <header>
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="/">
          <img src="./img/logo2.png" alt="Logotipo" class="logo-img" />
        </a>
        <div class="search-bar">
          <input type="text" placeholder="¿Qué estás buscando?" />
        </div>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link">Catálogo</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Iniciar Sesión</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register" class="nav-link">Registrarse</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cart" class="nav-link">Carrito</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <!-- Image Carousel -->
    <ImageCarousel />

    <!-- Main Content -->
    <main>
      <router-view />
    </main>

    <!-- Footer -->
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from './FooterComponent.vue';
import HeaderComponent from './HeaderComponent.vue';
import ImageCarousel from './ImageCarousel.vue';

export default {
  components: {
    FooterComponent,
    HeaderComponent,
    ImageCarousel,
  },
};
</script>

<style scoped>
/* Global styles */
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Header Styles */
header {
  background-color: #e90d11; /* Fondo rojo */
  color: white;
  padding: 0.5px 20px; /* Reducción de padding */
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0; /* Eliminar padding innecesario */
}

.navbar-brand .logo-img {
  height: 120px; /* Reducir altura para un mejor ajuste */
  width: auto;
  max-width: 100%; /* Evita que la imagen sea más ancha que su contenedor */
  object-fit: contain; /* Mantiene la proporción de la imagen */
  margin: 0; /* Reducir márgenes */
}

.search-bar {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.search-bar input {
  width: 500px; /* Ajuste el ancho según sea necesario */
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #000; /* Color de borde */
  background-color: white; /* Color de fondo */
  color: #000; /* Color del texto para la entrada */
}

.navbar-nav {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.navbar-nav .nav-item {
  margin-left: 1rem;
}

.navbar-nav .nav-link {
  color: white;
  text-decoration: none;
}

.navbar-nav .nav-link.router-link-active {
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 768px) {
  .search-bar {
    display: none; /* Ocultar la barra de búsqueda en pantallas pequeñas */
  }
}
</style>
