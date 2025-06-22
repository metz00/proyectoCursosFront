<script setup>
import { ref } from "vue"
import CourseCard from "@/modules/courses/components/CoursesCards.vue"
import CourseFormModal from "@/modules/courses/components/FormCourses.vue"
import EditCourseModal from "@/modules/courses/components/FormEditCourses.vue"
import LoadingGraduation from "@/shared/components/Loading.vue"

import useCourses from "@/modules/courses/composables/useGetCourses"
import useCreateCourses from "@/modules/courses/composables/useCreateCourses"
import useUpdateCourses from "@/modules/courses/composables/useUpdateCourses"
import useDeleteCourses from "@/modules/courses/composables/useDeleteCourses"

const page = ref(1)
const limit = ref(8)
const modalAddOpen = ref(false)
const modalEditOpen = ref(false)
const selectedCourse = ref(null)

const { courses, pagination, getIsLoading, refetch } = useCourses(page, limit)
const { createCourse } = useCreateCourses()
const { updateCourse } = useUpdateCourses()
const { deleteCourse } = useDeleteCourses()

const openEditModal = (course) => {
  selectedCourse.value = course
  modalEditOpen.value = true
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex justify-space-between align-center mb-4">
        <h2 class="text-h5 font-weight-bold text-indigo-darken-3">Listado de Cursos</h2>
        <v-btn color="primary" @click="modalAddOpen = true" prepend-icon="mdi-plus" rounded="xl">
          Agregar
        </v-btn>
      </v-col>

      <v-col
        v-for="(course, index) in courses"
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
    </v-row>

    <LoadingGraduation v-if="getIsLoading" />

    <CourseFormModal
      :open="modalAddOpen"
      @saved="createCourse"
      @close="modalAddOpen = false"
    />

    <EditCourseModal
      :open="modalEditOpen"
      :courseData="selectedCourse"
      @update="updateCourse"
      @close="modalEditOpen = false"
    />
  </v-container>
</template>



<style scoped>
</style>
