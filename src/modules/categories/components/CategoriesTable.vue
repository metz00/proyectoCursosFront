<script setup>
import { ref, watch } from "vue";
import useUpdateCategories from "../composables/useUpdateCategories";

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
  { title: "Categoría", key: "category", align: "center" },
  { title: "Estado", key: "active" },
  { title: "Acciones", key: "actions", align: "center", sortable: false },
]);

const { updateCategory, isUpdating} = useUpdateCategories();

const toggleStatus = async (item) => {
    await updateCategory({
        id: item.id,
        category: item.category,
        active: item.active
    })
}

watch(props, ()=> {
    console.log(props.items)
})
</script>

<template>
 
  <v-card flat width="1000px" class="mt-5">
    <v-card-title class="d-flex align-center pe-2">
      <v-icon icon="mdi-format-list-bulleted-type"></v-icon> &nbsp; Listado de
      categorías

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
      ></v-text-field>
    </v-card-title>

    <v-divider></v-divider>

    <v-data-table
      v-model:search="search"
      :headers="headers"
      :items="items"
      :filter-keys="['category']"
      hide-default-footer
     
    >
      <template v-slot:item.active="{ item }">
        <v-chip
          :color="item.active ? 'green' : 'red'"
          :text="item.active ? 'Activo' : 'Inactivo'"
          class="text-uppercase"
          size="small"
          label
          clickable
          @click="toggleStatus(item)"
          :loading="isUpdating"
        ></v-chip>
      </template>

      <template v-slot:item.actions="{ item }">
        <div class="d-flex justify-center">
          <v-btn
            icon="mdi-pencil"
            size="small"
            color="primary"
            variant="text"
            @click="$emit('edit', item)"
            title="Editar categoria"
          ></v-btn>
          <v-btn
            icon="mdi-delete"
            size="small"
            color="error"
            variant="text"
            @click="$emit('delete', item.id)"
            title="Eliminar categoria"
          ></v-btn>
        </div>
      </template>
    </v-data-table>
  </v-card>

</template>

<style scoped>

.background-table{
    background-color: #C8D2D7;    
}    
</style>