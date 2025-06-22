<script setup>
import { ref, computed } from "vue";
import CourseCard from "@/modules/admin/courses/components/CoursesCards.vue";
import CourseFormModal from "@/modules/admin/courses/components/FormCourses.vue";
import EditCourseModal from "@/modules/admin/courses/components/FormEditCourses.vue";
import LoadingGraduation from "@/shared/components/Loading.vue";
import useCategories from "@/modules/admin/categories/composables/useGetCategories";

import useCourses from "@/modules/admin/courses/composables/useGetCourses";
import useCreateCourses from "@/modules/admin/courses/composables/useCreateCourses";
import useUpdateCourses from "@/modules/admin/courses/composables/useUpdateCourses";
import useDeleteCourses from "@/modules/admin/courses/composables/useDeleteCourses";

const page = ref(1);
const limit = ref(8);
const modalAddOpen = ref(false);
const modalEditOpen = ref(false);
const selectedCourse = ref(null);

const selectedCategory = ref("all");
const selectedStatus = ref("all");
const searchQuery = ref("");

const { courses, pagination, getIsLoading, refetch } = useCourses(page, limit);
const { categories } = useCategories(ref(1), ref(100));
const { createCourse } = useCreateCourses();
const { updateCourse } = useUpdateCourses();
const { deleteCourse } = useDeleteCourses();

const filteredCourses = computed(() => {
  if (!courses.value) return [];

  return courses.value.filter((course) => {
    const categoryMatch =
      selectedCategory.value === "all" ||
      (course.category && course.category.id === selectedCategory.value);

    const statusMatch =
      selectedStatus.value === "all" ||
      (selectedStatus.value === "active" && course.active) ||
      (selectedStatus.value === "inactive" && !course.active);

    const searchMatch =
      course.course.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      course.description
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase());

    return categoryMatch && statusMatch && searchMatch;
  });
});

const openEditModal = (course) => {
  selectedCourse.value = course;
  modalEditOpen.value = true;
};

const handleCreateSuccess = async (payload) => {
  modalAddOpen.value = false;
  createCourse(payload);
};

const handleUpdateSuccess = async (payload) => {
  modalEditOpen.value = false;
  updateCourse(payload);

};
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex justify-space-between align-center mb-4">
        <div>
          <h2 class="text-h5 font-weight-bold text-indigo-darken-3">
            Listado de Cursos
          </h2>
          <p class="text-caption text-grey">
            Mostrando {{ filteredCourses.length }} de
            {{ courses?.length || 0 }} cursos
          </p>
        </div>
        <v-btn
          color="primary"
          @click="modalAddOpen = true"
          prepend-icon="mdi-plus"
          rounded="xl"
        >
          Agregar
        </v-btn>
      </v-col>
    </v-row>

    <v-card class="px-5 py-5 mb-5" rounded="xl" height="80px">
    <v-row class="mb-4">
      <v-col cols="12" md="4">
        <v-text-field
          v-model="searchQuery"
          label="Buscar cursos..."
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          clearable
          hide-details
          density="compact"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="4">
        <v-select
          v-model="selectedCategory"
          :items="[
            { title: 'Todas las categorías', value: 'all' },
            ...(categories || []).map((c) => ({
              title: c.category,
              value: c.id,
            })),
          ]"
          label="Filtrar por categoría"
          variant="outlined"
          hide-details
          color="#ffff"
          density="compact"
        ></v-select>
      </v-col>

      <v-col cols="12" md="4">
        <v-select
          v-model="selectedStatus"
          :items="[
            { title: 'Todos los estados', value: 'all' },
            { title: 'Activos', value: 'active' },
            { title: 'Inactivos', value: 'inactive' },
          ]"
          label="Filtrar por estado"
          variant="outlined"
          hide-details
          density="compact"
        ></v-select>
      </v-col>
    </v-row>
    </v-card>

    <v-row>
      <v-col
        v-for="(course, index) in filteredCourses"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <CourseCard
          :course="course"
          @edit="openEditModal(course)"
          @delete="deleteCourse(course.id)"
        />
      </v-col>

      <v-col
        v-if="filteredCourses.length === 0"
        cols="12"
        class="text-center py-12"
      >
        <v-icon size="64" color="grey-lighten-1">mdi-magnify-close</v-icon>
        <p class="text-h6 mt-4">No se encontraron cursos</p>
        <p class="text-body-1 text-grey mt-2">
          Intenta con otros filtros o términos de búsqueda
        </p>
      </v-col>
    </v-row>

    <LoadingGraduation v-if="getIsLoading" />

    <CourseFormModal
      :open="modalAddOpen"
      @saved="handleCreateSuccess"
      @close="modalAddOpen = false"
    />

    <EditCourseModal
      :open="modalEditOpen"
      :courseData="selectedCourse"
      @update="handleUpdateSuccess"
      @close="modalEditOpen = false"
    />
  </v-container>
</template>

<style scoped></style>
