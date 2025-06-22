<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const emit = defineEmits(["edit", "delete"]);

const search = ref("");

const headers = ref([
  { title: "Correo electrónico", key: "email", align: "center" },
  { title: "Rol", key: "role", align: "center" },
  { title: "Acciones", key: "actions", align: "center", sortable: false },
]);

watch(props, () => {
  console.log(props.items);
});
</script>

<template>
  <v-card flat width="1000px" class="mt-5" rounded="xl">
    <v-card-title class="d-flex align-center pe-2">
      <v-icon icon="mdi-account-multiple-outline" />
      &nbsp; Listado de usuarios

      <v-spacer></v-spacer>

      <v-text-field
        v-model="search"
        density="compact"
        label="Buscar"
        prepend-inner-icon="mdi-magnify"
        variant="solo-filled"
        flat
        hide-details
        single-line
        rounded="xl"
      />
      
    </v-card-title>

    <v-divider />

    <v-data-table
      v-model:search="search"
      :headers="headers"
      :items="items"
      :filter-keys="['email', 'role']"
      hide-default-footer
    >


      <template v-slot:item.actions="{ item }">
        <div class="d-flex justify-center">
          <v-btn
            icon="mdi-pencil"
            size="small"
            color="primary"
            variant="text"
            @click="$emit('edit', item)"
            title="Editar usuario"
          />
          <v-btn
            icon="mdi-delete"
            size="small"
            color="error"
            variant="text"
            @click="$emit('delete', item.id)"
            title="Eliminar usuario"
          />
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<style scoped>
.background-table {
  background-color: #c8d2d7;
}
</style>
