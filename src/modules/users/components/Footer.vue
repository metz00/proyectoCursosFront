<template>
  <footer class="app-footer">
    <div class="footer-content">
      <div class="footer-brand">
        <div class="logo-container">
          <img src="@/assets/birrete.svg" alt="DEV CURSOS Logo" class="logo">
          <span class="brand-name">DEV CURSOS</span>
        </div>
        <p class="footer-description">
          Plataforma de aprendizaje en línea para desarrolladores
        </p>
      </div>
      
      <div class="footer-links">
        <h3 class="links-title">Enlaces Rápidos</h3>
        <ul>
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/cursos">Cursos</router-link></li>
          <li><router-link to="/instructores">Instructores</router-link></li>
          <li><router-link to="/planes">Planes</router-link></li>
        </ul>
      </div>
      
      <div class="footer-social">
        <h3 class="social-title">Síguenos</h3>
        <div class="social-icons">
          <a href="#" class="social-icon" aria-label="Facebook">
            <v-icon>mdi-facebook</v-icon>
          </a>
          <a href="#" class="social-icon" aria-label="Twitter">
            <v-icon>mdi-twitter</v-icon>
          </a>
          <a href="#" class="social-icon" aria-label="Instagram">
            <v-icon>mdi-instagram</v-icon>
          </a>
          <a href="#" class="social-icon" aria-label="LinkedIn">
            <v-icon>mdi-linkedin</v-icon>
          </a>
          <a href="#" class="social-icon" aria-label="YouTube">
            <v-icon>mdi-youtube</v-icon>
          </a>
        </div>
        <div class="contact-info">
          <p><v-icon small>mdi-email</v-icon> contacto@devcursos.com</p>
          <p><v-icon small>mdi-phone</v-icon> +1 234 567 890</p>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} DEV CURSOS. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.app-footer {
  background-color: #0F283C;
  color: white;
  padding: 3rem 0 0;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.footer-brand {
  margin-bottom: 2rem;
}

.logo-container {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.logo {
  height: 40px;
  width: auto;
  margin-right: 1rem;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: bold;
  color: #3498db;
}

.footer-description {
  color: #bdc3c7;
  line-height: 1.6;
}

.links-title, .social-title {
  color: #3498db;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.links-title::after, .social-title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50px;
  height: 2px;
  background-color: #3498db;
}

.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.8rem;
}

.footer-links a {
  color: #ecf0f1;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #3498db;
}

.social-icons {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.social-icon {
  color: white;
  background-color: #34495e;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.social-icon:hover {
  background-color: #3498db;
  transform: translateY(-3px);
}

.contact-info {
  color: #bdc3c7;
}

.contact-info p {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
}

.footer-bottom {
  background-color: #1a252f;
  padding: 1rem;
  text-align: center;
  margin-top: 2rem;
}

.footer-bottom p {
  margin: 0;
  color: #7f8c8d;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style>