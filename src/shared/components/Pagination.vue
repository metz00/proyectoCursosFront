<script setup>
import { ref } from "vue";
const props = defineProps({
  currentPage: Number,
  totalPages: Number,
  length: Number,
  totalItems: Number,
  title: String,
});
const emits = defineEmits({
  pageChange: [Number],
});
const currentPageModel = ref(props.currentPage);    
watch(
  () => props.currentPage,
  (newVal) => {
    currentPageModel.value = newVal;
  }
);
const handlePageChange = (page) => {
  emits("pageChange", page);
};
</script>

<template>
  <v-pagination
    v-model="currentPageModel"
    :length="totalPages"
    :total-visible="5"
    rounded="circle"
    @update:model-value="handlePageChange"
  ></v-pagination>
  <div class="pagination-info">
    Mostrando {{ length }} de {{ totalItems }} {{ title }}
  </div>
</template>

<style scoped>
.pagination-info {
  margin-top: 10px;
  color: #666;
  font-size: 0.9em;
}
</style>
