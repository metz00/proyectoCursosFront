<template>
  <div class="top-instructores-container">
    <h2 class="section-title">Nuestros Instructores Destacados</h2>
    <div class="instructores-grid">
      <div v-for="(instructor, index) in instructores" :key="index" class="instructor-card">
        <div class="ranking-badge">#{{ index + 1 }}</div>
        <div class="avatar-box">
          <img 
            v-if="instructor.avatar && !instructor.avatar.startsWith('[')" 
            :src="instructor.avatar" 
            :alt="`Avatar de ${instructor.nombre}`"
            class="avatar-image"
          >
          <span v-else class="avatar-code">{{ instructor.avatar || '[000]' }}</span>
        </div>
        <div class="instructor-details">
          <h3 class="instructor-name">{{ instructor.nombre }}</h3>
          <p class="instructor-bio">{{ instructor.bio }}</p>
          <div class="stats-container">
            <div class="stat-item">
              <v-icon small>mdi-book</v-icon>
              <span class="stat-value">{{ instructor.cursos }} cursos</span>
            </div>
            <div class="stat-item">
              <v-icon small>mdi-star</v-icon>
              <span class="stat-value">{{ instructor.rating }}/5.0</span>
            </div>
            <div class="stat-item">
              <v-icon small>mdi-account-group</v-icon>
              <span class="stat-value">{{ instructor.estudiantes }} estudiantes</span>
            </div>
          </div>
          <div class="specialty-tag">{{ instructor.especialidad }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const instructores = [
  {
    nombre: "Dra. Elena Morales",
    bio: "Experta en Inteligencia Artificial con 10 años de experiencia en Google",
    cursos: 18,
    rating: 4.9,
    estudiantes: 5243,
    especialidad: "Machine Learning",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    nombre: "Prof. Carlos Fernández",
    bio: "Desarrollador Full Stack y creador de frameworks JavaScript",
    cursos: 15,
    rating: 4.8,
    estudiantes: 4876,
    especialidad: "JavaScript Avanzado",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE4h0dQpT7W65j3G0aaTpVYe7dIiRlMqcdNg&s" 
  },
  {
    nombre: "Ing. Sofía Ramírez",
    bio: "Especialista en DevOps y arquitectura de sistemas en la nube",
    cursos: 12,
    rating: 4.7,
    estudiantes: 3621,
    especialidad: "Cloud Computing",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg" 
  }
];
</script>

<style scoped>
.top-instructores-container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1rem;
}

.section-title {
  text-align: center;
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.instructores-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.instructor-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  display: flex;
  position: relative;
  transition: all 0.3s ease;
}

.instructor-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.ranking-badge {
  position: absolute;
  top: -15px;
  left: -15px;
  background: linear-gradient(135deg, #3498db, #2c3e50);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

.avatar-box {
  min-width: 100px;
  height: 100px;
  background-color: #f1f5f9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  overflow: hidden;
  border: 2px solid #e2e8f0;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-code {
  font-family: 'Courier New', monospace;
  font-size: 1.8rem;
  color: #64748b;
}

.instructor-details {
  flex: 1;
}

.instructor-name {
  color: #1e293b;
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
}

.instructor-bio {
  color: #64748b;
  font-size: 0.9rem;
  margin: 0 0 1rem 0;
  line-height: 1.4;
}

.stats-container {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  background: #f8fafc;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
}

.specialty-tag {
  display: inline-block;
  background: #e0f2fe;
  color: #0369a1;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .instructor-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .avatar-box {
    margin-right: 0;
    margin-bottom: 1rem;
  }
  
  .stats-container {
    justify-content: center;
  }
}
</style>