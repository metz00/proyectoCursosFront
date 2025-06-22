<template>
  <v-card elevation="3" class="ma-2" max-width="280" rounded="xl">
    <v-img :src="course.image" height="150" class="mt-0" cover />

    <v-card-title class="text-subtitle-1 font-weight-bold">
      {{ course.course }}
    </v-card-title>

    <v-card-subtitle class="text-truncate">
      {{ course.description }}
    </v-card-subtitle>
    
    <v-card-text>
      <v-chip 
        color="blue-lighten-4" 
        class="mb-2"
        size="small"
        :title="course.category.category"
      >
        <v-icon start small>mdi-tag</v-icon>
        {{ course.category.category }}
      </v-chip>
    </v-card-text>
    
    <v-divider class="mt-2"></v-divider>
    
    <v-card-actions class="justify-space-between px-4">
      <v-chip 
        :color="course.active ? 'green' : 'red'" 
        label small
        :title="course.active ? 'Curso activo' : 'Curso inactivo'"
      >
        <v-icon start small>{{ course.active ? 'mdi-check' : 'mdi-close' }}</v-icon>
        {{ course.active ? "Activo" : "Inactivo" }}
      </v-chip>

      <div class="d-flex align-center">
        <v-btn
          icon="mdi-pencil"
          variant="text"
          size="small"
          color="blue"
          @click="$emit('edit', course)"
          :title="`Editar ${course.course}`"
        />
        <v-btn
          icon="mdi-delete"
          variant="text"
          size="small"
          color="red"
          @click="$emit('delete', course.id)"
          :title="`Eliminar ${course.course}`"
        />
      </div>
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
  course: {
    type: Object,
    required: true,
  },
});

defineEmits(["edit", "delete"]);
</script>

<style scoped>
.v-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.v-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.v-card-title {
  min-height: 64px;
  display: flex;
  align-items: center;
}

.v-card-subtitle {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>