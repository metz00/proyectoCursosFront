<template>
  <v-card class="pa-4 rounded-xl ml-8" width="45%">
    <v-card-title class="text-h6 font-weight-bold pb-0">
      Nuevos Estudiantes
    </v-card-title>

    <v-divider class="my-3" />

    <v-list density="compact">
      <v-list-item
        v-for="(student, index) in estudiantes"
        :key="index"
        class="px-0"
      >
        <template #prepend>
          <v-avatar size="48" class="me-3">
            <v-img :src="student.avatar" />
          </v-avatar>
        </template>

        <div>
          <div class="font-weight-medium">{{ student.name }}</div>
          <div class="text-grey">{{ student.subtitle }}</div>
        </div>

        <template #append>
          <v-chip
            v-if="student.status"
            size="small"
            color="indigo-lighten-5"
            text-color="indigo"
          >
            {{ student.status }}
          </v-chip>
        </template>
      </v-list-item>

      <v-divider
        v-for="(student, i) in estudiantes.slice(0, -1)"
        :key="'divider-' + i"
      />
    </v-list>
  </v-card>
</template>

<script setup>
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
</script>

<style scoped>
.v-list-item {
  align-items: center;
}
</style>
