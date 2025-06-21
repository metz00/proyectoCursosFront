<script setup>
import { ref, watch } from 'vue';

import CategoriesTable from '../components/CategoriesTable.vue';
import FormCategories from '../components/FormCategories.vue';
import FormEditCategories from '../components/FormEditCategories.vue';
import Pagination from '@/shared/components/Pagination.vue';
import Loading from '@/shared/components/Loading.vue';

import useCategories from '../composables/useGetCategories';
import useCreateCategories from '../composables/useCreateCategories';
import useUpdateCategories from '../composables/useUpdateCategories';
import useDeleteCategories from '../composables/useDeleteCategories';

const page = ref(1)
const limit = ref(5)
const modalAddOpen = ref(false)
const modalEditOpen = ref(false)
const selectedCategory = ref(null)

const {categories, pagination, getIsLoading, refetch} = useCategories(page, limit)
const {deleteCategory} = useDeleteCategories();
const { updateCategory} = useUpdateCategories();
const {createCategory} = useCreateCategories();

</script>

<template>

    <h2 class="title-categories">Categorias del curso</h2>
    <Loading  v-if="getIsLoading"/>

    <div class="category-container">
        <CategoriesTable 
        :items="categories"
       
        />

    </div>


</template>

<style scoped>
.category-container {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
}
.title-categories {
    
}
</style>