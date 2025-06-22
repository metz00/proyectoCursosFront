<script setup>
import { ref, computed, watch } from "vue";
import NavBar from "@/modules/users/components/NavBar.vue";
import Home from "@/modules/users/components/Home.vue";
import Courses from "@/modules/users/components/Courses.vue";
import useCourses from "@/modules/admin/courses/composables/useGetCourses";
import useCategories from "@/modules/admin/categories/composables/useGetCategories";
import TopTeachers from "@/modules/users/components/TopTeachers.vue";
import Plains from "@/modules/users/components/Plains.vue";
import Footer from "@/modules/users/components/Footer.vue";

const page = ref(1);
const limit = ref(8);

const { courses, pagination, getIsLoading, refetch } = useCourses(page, limit);
const { categories } = useCategories(ref(1), ref(100));

const selectedCategory = ref("all");
const searchQuery = ref("");

const filteredCourses = computed(() => {
  if (!courses.value) return [];

  return courses.value.filter((course) => {
    const categoryMatch =
      selectedCategory.value === "all" ||
      (course.category && course.category.id === selectedCategory.value);

    const searchMatch =
      course.course.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      course.description
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase());

    return categoryMatch && searchMatch;
  });
});

watch(selectedCategory, () => {
  refetch();
});
</script>

<template>
  <NavBar />
  <Home />

  <v-container class="mt-8">
    <p class="text-h4 font-weight-bold text-center mb-10">
      Cursos disponibles 👀
    </p>
    <v-row class="mb-6 align-center">
      <v-col cols="12" md="6">
        <v-text-field
          v-model="searchQuery"
          label="Buscar cursos..."
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          clearable
          hide-details
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
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
        ></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <p class="text-body-1 text-grey-darken-1 mb-2">
          Mostrando {{ filteredCourses.length }} de
          {{ courses?.length || 0 }} cursos
          <span v-if="selectedCategory !== 'all'">en esta categoría</span>
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="(course, index) in filteredCourses"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <Courses :course="course" />
      </v-col>

      <v-col
        v-if="filteredCourses.length === 0"
        cols="12"
        class="text-center py-12"
      >
        <v-icon size="64" color="grey-lighten-1">mdi-magnify-close</v-icon>
        <p class="text-h6 mt-4">No se encontraron cursos</p>
        <p class="text-body-1 text-grey mt-2">
          Intenta con otro término de búsqueda o selecciona una categoría
          diferente
        </p>
      </v-col>
    </v-row>

    <TopTeachers />
    <Plains />
  </v-container>
  <Footer />
</template>

<style scoped>
.category-chip {
  transition: all 0.3s ease;
}
.category-chip.active {
  background-color: #3498db;
  color: white;
  transform: scale(1.05);
}
</style>
