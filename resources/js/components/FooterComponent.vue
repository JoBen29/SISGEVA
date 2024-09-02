<template>
    <footer class="site-footer">
      <div class="footer-content">
        <p>&copy; 2024 Representaciones MRS SAC. Todos los derechos reservados.</p>
        <p class="follow-us">Síguenos en nuestras redes sociales</p> <!-- Agregado el texto -->
        <ul class="social-links">
          <li><a href="https://www.facebook.com/profile.php?id=61556687842958&sk=about_contact_and_basic_info"><img src="./img/logofacebook.png" alt="Facebook" /></a></li>
          <li><a href="#"><img src="./img/logo3.png" alt="Twitter" /></a></li>
          <li><a href="#"><img src="./img/logo4.png" alt="Instagram" /></a></li>
        </ul>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent',
  };
  </script>
  
  <style scoped>
  .site-footer {
    background-color: #2c3e50;
    color: #ffffff;
    padding: 1rem 2rem;
    text-align: center;
  }
  
  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .follow-us {
    margin-top: 1rem; /* Espacio entre el texto de copyright y "Síguenos en nuestras redes sociales" */
    font-weight: bold; /* Hace que el texto sea un poco más destacado */
  }
  
  .social-links {
    display: flex;
    gap: 2.5rem; /* Aumentado el espacio entre los íconos */
    margin-top: 1rem;
  }
  
  .social-links img {
    height: 25px;
  }
  </style>
  