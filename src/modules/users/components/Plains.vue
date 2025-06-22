<template>
  <section class="planes-section">
    <div class="container">
      <h2 class="section-title">Nuestros Planes de Aprendizaje</h2>
      <p class="section-subtitle">Elige el que mejor se adapte a tus necesidades</p>
      
      <div class="planes-grid">
        <div class="plan-card rounded-xl" v-for="(plan, index) in planes" :key="index">
          <div class="plan-header" :class="`plan-${index + 1}`">
            <h3 class="plan-name">{{ plan.nombre }}</h3>
            <div class="plan-price">
              <span class="currency">$</span>
              <span class="amount">{{ plan.precio }}</span>
              <span class="period">/mes</span>
            </div>
          </div>
          <div class="plan-features">
            <ul>
              <li v-for="(feature, i) in plan.caracteristicas" :key="i">
                <v-icon color="success">mdi-check-circle</v-icon>
                {{ feature }}
              </li>
            </ul>
          </div>
          <v-btn 
            :color="index === 1 ? 'primary' : 'secondary'" 
            block 
            class=" mt-n5"
            rounded="xl"
          
          >
            Seleccionar Plan
          </v-btn>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const planes = [
  {
    nombre: "Básico",
    precio: "9.99",
    caracteristicas: [
      "Acceso a cursos básicos",
      "Contenido en video",
      "Soporte comunitario",
      "Certificado de finalización"
    ]
  },
  {
    nombre: "Premium",
    precio: "19.99",
    caracteristicas: [
      "Todos los cursos básicos y avanzados",
      "Descarga de materiales",
      "Soporte prioritario",
      "Proyectos prácticos",
      "Certificado con validación"
    ]
  },
  {
    nombre: "Empresarial",
    precio: "49.99",
    caracteristicas: [
      "Acceso ilimitado para equipos",
      "Cursos personalizados",
      "Soporte 24/7",
      "Informes de progreso",
      "Sesiones con instructores"
    ]
  }
];
</script>

<style scoped>
.planes-section {

  padding: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-title {
  text-align: center;
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.section-subtitle {
  text-align: center;
  color: #7f8c8d;
  margin-bottom: 3rem;
  font-size: 1.1rem;
}

.planes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.plan-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.plan-card:hover {
  transform: translateY(-10px);
}

.plan-header {
  padding: 2rem;
  color: white;
  text-align: center;
}

.plan-1 {
  background-color:#a8aaab;
}

.plan-2 {
  background-color: #005073;
}

.plan-3 {
  background-color: #3CDCF0;
}

.plan-name {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.plan-price {
  margin: 1rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.currency {
  font-size: 1.2rem;
  margin-top: 0.3rem;
}

.amount {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
  margin: 0 0.2rem;
}

.period {
  font-size: 1rem;
  margin-top: 0.8rem;
}

.plan-features {
  padding: 2rem;
}

.plan-features ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.plan-features li {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}


</style>