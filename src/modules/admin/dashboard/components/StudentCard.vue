<template>
  <v-card 
    class="pa-4 rounded-xl student-card"
    elevation="2"
  >
    <v-card-title 
      class="font-weight-bold pb-0 responsive-title"
      :class="titleClasses"
    >
      Nuevos Estudiantes
    </v-card-title>

    <v-divider class="my-3" />

    <v-list density="compact">
      <template v-for="(student, index) in estudiantes" :key="index">
        <v-list-item class="px-0 responsive-item">
          <template #prepend>
            <v-avatar 
              :size="avatarSize" 
              class="responsive-avatar"
              :class="avatarClasses"
            >
              <v-img :src="student.avatar" />
            </v-avatar>
          </template>

          <div class="student-info">
            <div 
              class="font-weight-medium responsive-name"
              :class="nameClasses"
            >
              {{ student.name }}
            </div>
            <div 
              class="text-grey responsive-subtitle"
              :class="subtitleClasses"
            >
              {{ student.subtitle }}
            </div>
          </div>

          <template #append>
            <v-chip
              v-if="student.status"
              :size="chipSize"
              color="#3CDCF0"
              text-color="indigo"
              class="responsive-chip"
            >
              {{ student.status }}
            </v-chip>
          </template>
        </v-list-item>

        <v-divider v-if="index < estudiantes.length - 1" />
      </template>
    </v-list>
  </v-card>
</template>

<script setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

const { xs, sm, md, lg } = useDisplay()

const estudiantes = [
  {
    name: 'Carlos Mendoza',
    subtitle: '5 cursos inscritos',
    status: 'Nuevo',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    name: 'Laura Gómez',
    subtitle: '3 cursos completados',
    status: 'Activa',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Andrés Ramírez',
    subtitle: '12 horas esta semana',
    status: '',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
]

const titleClasses = computed(() => ({
  'text-h6': lg.value,
  'text-subtitle-1': md.value,
  'text-subtitle-2': sm.value || xs.value,
}))

const nameClasses = computed(() => ({
  'text-body-1': lg.value || md.value,
  'text-body-2': sm.value,
  'text-caption': xs.value,
}))

const subtitleClasses = computed(() => ({
  'text-body-2': lg.value || md.value,
  'text-caption': sm.value || xs.value,
}))

const avatarClasses = computed(() => ({
  'me-3': lg.value || md.value,
  'me-2': sm.value || xs.value,
}))

const avatarSize = computed(() => {
  if (xs.value) return 32
  if (sm.value) return 36
  if (md.value) return 40
  return 44
})

const chipSize = computed(() => {
  if (xs.value) return 'x-small'
  if (sm.value) return 'small'
  return 'small'
})
</script>

<style scoped>
.student-card {
  width: 100%;
  height: fit-content;
  min-height: 200px;
}

.student-info {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  overflow: hidden;
}

.responsive-item {
  align-items: center;
  padding: 12px 0 !important;
}

.responsive-title {
  padding-bottom: 0 !important;
  line-height: 1.2;
}

.responsive-avatar {
  flex-shrink: 0;
}

.responsive-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.3;
  margin-bottom: 2px;
}

.responsive-subtitle {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.2;
}

.responsive-chip {
  flex-shrink: 0;
}

@media (max-width: 599px) {
  .student-card {
    padding: 12px !important;
    border-radius: 12px !important;
  }
  
  .responsive-item {
    padding: 8px 0 !important;
    min-height: 48px;
  }
  
  .responsive-title {
    font-size: 16px !important;
    padding-bottom: 4px !important;
  }
  
  .responsive-name {
    font-size: 13px !important;
    font-weight: 600 !important;
  }
  
  .responsive-subtitle {
    font-size: 11px !important;
  }
  
  .responsive-chip {
    font-size: 9px !important;
    height: 18px !important;
    padding: 0 4px !important;
  }
  
  .my-3 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }
}

@media (min-width: 600px) and (max-width: 959px) {
  .student-card {
    padding: 16px !important;
  }
  
  .responsive-item {
    padding: 10px 0 !important;
    min-height: 52px;
  }
  
  .responsive-title {
    font-size: 18px !important;
  }
  
  .responsive-name {
    font-size: 14px !important;
  }
  
  .responsive-subtitle {
    font-size: 12px !important;
  }
  
  .responsive-chip {
    font-size: 10px !important;
    height: 20px !important;
  }
}

@media (min-width: 960px) and (max-width: 1279px) {
  .student-card {
    padding: 18px !important;
  }
  
  .responsive-item {
    padding: 11px 0 !important;
    min-height: 56px;
  }
  
  .responsive-title {
    font-size: 19px !important;
  }
  
  .responsive-name {
    font-size: 15px !important;
  }
  
  .responsive-subtitle {
    font-size: 13px !important;
  }
}

@media (min-width: 1280px) {
  .student-card {
    padding: 20px !important;
  }
  
  .responsive-item {
    padding: 12px 0 !important;
    min-height: 60px;
  }
  
  .responsive-title {
    font-size: 20px !important;
  }
  
  .responsive-name {
    font-size: 16px !important;
  }
  
  .responsive-subtitle {
    font-size: 14px !important;
  }
}

@media (min-width: 960px) {
  .responsive-item:hover {
    background-color: rgba(0, 0, 0, 0.02);
    border-radius: 8px;
    transition: background-color 0.2s ease;
  }
}

.v-card {
  display: flex;
  flex-direction: column;
}

.v-list {
  background: transparent !important;
}

.responsive-chip {
  letter-spacing: 0.02em;
  border-radius: 12px;
}

.v-divider {
  margin: 8px 0;
}

@media (max-width: 599px) {
  .v-divider {
    margin: 6px 0;
  }
}
</style>