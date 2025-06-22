<template>
  <v-card elevation="3" class="ma-2" max-width="280" rounded="xl">
    <v-img :src="course.image" height="150" class="mt-0" cover />

    <v-card-title class="text-subtitle-1 font-weight-bold">
      {{ course.course }}
    </v-card-title>

    <v-card-subtitle class="text-truncate">
      {{ course.description }}
    </v-card-subtitle>
    <v-card-subtitle class="text-truncate">
      {{ course.category.category }}
    </v-card-subtitle>
    <v-divider class="mt-2"></v-divider>
    <v-card-actions class="justify-space-between px-4">
      <v-chip :color="course.active ? 'green' : 'red'" label small>
        {{ course.active ? "Activo" : "Inactivo" }}
      </v-chip>

      <div class="d-flex align-center">
        <v-btn
          icon="mdi-pencil"
          variant="text"
          size="small"
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
