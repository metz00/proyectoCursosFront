<script setup>
import { ref, watch } from "vue";

import CategoriesTable from "../components/CategoriesTable.vue";
import FormCategories from "../components/FormCategories.vue";
import FormEditCategories from "../components/FormEditCategories.vue";
import Loading from "@/shared/components/Loading.vue";

import useCategories from "../composables/useGetCategories";
import useCreateCategories from "../composables/useCreateCategories";
import useUpdateCategories from "../composables/useUpdateCategories";
import useDeleteCategories from "../composables/useDeleteCategories";

const page = ref(1);
const limit = ref(5);
const modalAddOpen = ref(false);
const modalEditOpen = ref(false);
const categoryEdit = ref({});
const handleAddOpenModal = () => {
  modalAddOpen.value = !modalAddOpen.value;
};
const { categories, pagination, getIsLoading, refetch } = useCategories(
  page,
  limit
);


const { deleteCategory } = useDeleteCategories();
const { updateCategory } = useUpdateCategories();
const { createCategory } = useCreateCategories();
const onSaveCategory = (payload) => {
  createCategory(payload);
};
const onDeleteCategory = (id) => {
  deleteCategory(id);
};

const handleEditModal = () => {
  modalEditOpen.value = !modalEditOpen.value;
};

const setCategory = (value) => {
  categoryEdit.value = { ...value };
  handleEditModal();
};

const handleUpdateCategory = (payload) => {
  updateCategory(payload);
};

</script>

<template>
  <v-container>
    <v-row>
      <Loading v-if="getIsLoading" />
      <v-col>
        <h2 class="title-categories text-indigo-darken-3">
          Categorias del curso
        </h2>
      </v-col>
      <v-col class="btn-agregar">
        <v-btn
          color="primary"
          @click="handleAddOpenModal"
          prepend-icon="mdi-plus"
          rounded="xl"
        >
          Agregar
        </v-btn>
      </v-col>
    </v-row>

    <div class="category-container">
      <CategoriesTable
        :items="categories"
        @delete="onDeleteCategory"
        @edit="setCategory"
      />
    </div>
 
    
    <FormCategories
      :open="modalAddOpen"
      @saved="onSaveCategory"
      @close="handleAddOpenModal"
    />

    <FormEditCategories
      :open="modalEditOpen"
      :category="categoryEdit"
      @update="handleUpdateCategory"
      @close="handleEditModal"
    />
  </v-container>
</template>

<style scoped>
.category-container {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  margin-top: 15px;
}

.btn-agregar {
  display: flex;
  justify-content: end;
}

</style>
