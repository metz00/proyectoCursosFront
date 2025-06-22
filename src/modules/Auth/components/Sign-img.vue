<template>
  <div class="welcome-container">
    <div class="welcome-content">
      <img class="icon" src="../../../assets/birrete.svg" alt="Graduation Cap" />
      <h1 class="title">Bienvenido a Dev Cursos</h1>
      <p class="subtitle">Accede o registra tu cuenta para continuar tu aprendizaje</p>
    </div>
  </div>
</template>

<style scoped>
.welcome-container {
  background-color: #0F2D3C; 
  min-height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}

.welcome-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 60px;
  margin-bottom: 1rem;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1rem;
  margin-bottom: 2rem;
}

.welcome-image {
  max-width: 550px;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .welcome-container {
    min-height: 200px;
    height: 200px;
    padding: 1rem;
    width: 100%;
  }
  
  .welcome-content {
    height: 100%;
    justify-content: center;
  }
  
  .icon {
    width: 40px;
    margin-bottom: 0.5rem;
  }
  
  .title {
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
  }
  
  .subtitle {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
}

@media (max-width: 480px) {
  .welcome-container {
    min-height: 180px;
    height: 180px;
    padding: 0.75rem;
  }
  
  .icon {
    width: 35px;
    margin-bottom: 0.4rem;
  }
  
  .title {
    font-size: 1.3rem;
    margin-bottom: 0.2rem;
  }
  
  .subtitle {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
}
</style>