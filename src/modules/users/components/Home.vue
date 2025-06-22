<template>
  <div class="home-container">
    <section class="hero-section">
      <v-row class="fill-height" align="center" justify="center">
        <v-col cols="12" md="6" class="text-center text-md-start">
          <div>
            <h1 class="text-white text-center">
              Bienvenido a <span class="highlight">DevCursos</span>
            </h1>
            <p class="subtitle">
              Tu plataforma de aprendizaje para desarrollo tecnológico
            </p>
            <div class="cta-buttons">
              <router-link to="/cursos" class="btn primary">
                Explorar Cursos
              </router-link>
              <router-link to="/actualizar-plan" class="btn secondary">
                Conoce nuestros planes
              </router-link>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="6" class="d-flex justify-center align-center">
          <v-img
            class="img-home"
            src="https://res.cloudinary.com/dkkcoy1wz/image/upload/v1750619880/Image_fx_z9arme.png"
            max-width="800"
            contain
          />
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<style scoped>
.home-container {
  width: 100%;
  margin: 0 auto;
}

.hero-section {
  text-align: center;
  padding: 4rem 2rem;
  background-color: #0F283C;
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.highlight {
  color: #3CDCF0;
}

.subtitle {
  font-size: 1.25rem;
  color: #ffff;
  margin: 1rem 0 2rem;
  text-align: center;
  
}

.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.btn {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn.primary {
  background-color: #3CDCF0;
  color: #0F283C;
}

.btn.primary:hover {
  background-color: #0F283C;
  color: white;
}

.btn.secondary {
  background-color: #ecf0f1;
  color: #2c3e50;
  border: 1px solid #bdc3c7;
}

.btn.secondary:hover {
  background-color: #0F283C;
  color: white;
}

</style>
