<template>
    <div>
      <header>
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#">MRS</a>
          <div class="search-bar">
            <input type="text" placeholder="¿Que estas buscando?" />
          </div>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Inicio</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/products" class="nav-link">Catalogo</router-link>
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
      <main>
        <router-view></router-view>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: "NavBar"
  };
  </script>
  
  <style scoped>
  /* Estilo base para el encabezado */
  header {
    background-color: #c51114; /* Fondo rojo */
    color: white;
    padding: 10px;
  }
  
  /* Estilo para el contenedor de la barra de navegación */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  
  /* Estilo para la marca de la barra de navegación (logotipo o nombre) */
  .navbar-brand {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    margin-right: 1rem;
  }
  
  /* Estilo para la barra de búsqueda */
  .search-bar {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .search-bar input {
    width: 500px; /* Ajuste el ancho según sea necesario */
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc; /* Color de borde */
    background-color: white; /* Eliminar el color de fondo */
    color: #000; /* Color del texto para la entrada */
  }
  
  /* Estilo para elementos de navegación */
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
  
  /* Estilo responsivo */
  @media (max-width: 768px) {
    .search-bar {
      display: none; /* Ocultar la barra de búsqueda en pantallas pequeñas */
    }
  }
  </style>
  