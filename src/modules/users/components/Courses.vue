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
        class="mb-3"
        size="small"
      >
        <v-icon start small>mdi-tag</v-icon>
        {{ course.category.category }}
      </v-chip>
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  course: {
    type: Object,
    required: true,
  },
});
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
</style>