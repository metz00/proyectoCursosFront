<script setup>
import { ref, watch } from "vue";
import { useVuelidate } from "@vuelidate/core";
import useValidators from "@/shared/composables/useValidators";
import option from "@/shared/Helpers/options.json";
import useCategories from "@/modules/categories/composables/useGetCategories";
const page = ref(1);
const limit = ref(5);
const { categories } = useCategories(page, limit);

const { notEmpty$, maxImageSize$ } = useValidators();
const options = option.options;

const props = defineProps({
  open: Boolean,
  courseData: Object,
});

const emits = defineEmits(["update", "close"]);

const openModal = ref(false);
const previewImage = ref(null);

const data = ref({
  id: null,
  course: "",
  description: "",
  categoryId: "",
  active: true,
  image: null,
  imageId: "",
});

watch(
  () => props.open,
  () => {
    openModal.value = props.open;
    if (props.courseData) {
      data.value = { ...props.courseData, image: null };
      previewImage.value = props.courseData.imageId;
    }
  },
  { immediate: true }
);

const rules = {
  course: { notEmpty: notEmpty$() },
  active: { notEmpty: notEmpty$() },
  image: { maxImageSize: maxImageSize$() },
};

const v$ = useVuelidate(rules, data);

const handleFileUpload = (event) => {
  const file = event.target.files?.[0] || event;
  if (file) {
    data.value.image = file;
    const reader = new FileReader();
    reader.onload = (e) => (previewImage.value = e.target.result);
    reader.onerror = () => (previewImage.value = null);
    reader.readAsDataURL(file);
  }
};

const closeModal = () => {
  v$.value.$reset();
  data.value = {
    id: null,
    course: "",
    description: "",
    categoryId: "",
    active: true,
    image: null,
    imageId: "",
  };
  previewImage.value = null;
  emits("close");
};

const update = () => {
  v$.value.$validate();
  if (v$.value.$error) return;
  emits("update", data.value);
  closeModal();
};
</script>

<template>
  <v-dialog persistent v-model="openModal" width="650px">
    <v-card class="rounded-shaped mx-auto" elevation="10">
      <v-toolbar color="#005073" dark>
        <v-toolbar-title class="text-h6 font-weight-bold">
          <v-icon icon="mdi-book-edit" class="mr-2" />
          Editar Curso
        </v-toolbar-title>
        <v-btn icon="mdi-close" variant="text" @click="closeModal" />
      </v-toolbar>

      <v-card-text class="pa-6">
        <v-card-subtitle class="text-subtitle-1 text-grey-darken-2 mb-4">
          Modifique los campos para actualizar el curso
        </v-card-subtitle>

        <v-img
          v-if="previewImage"
          :src="previewImage"
          max-height="120"
          contain
          class="mb-4 rounded-xl"
        />

        <v-file-input
          :error="v$.image?.$error"
          :error-messages="v$.image?.$error ? v$.image.$errors[0].$message : ''"
          label="Cambiar imagen del curso"
          prepend-icon="mdi-camera"
          accept="image/*"
          variant="outlined"
          @change="handleFileUpload"
          clearable
        />
        <v-select
          label="Categoría"
          v-model="data.categoryId"
          :error="v$.categoryId?.$error"
          :error-messages="v$.categoryId?.$errors[0]?.$message"
          :items="categories"
          item-value="id"
          item-title="category"
          prepend-inner-icon="mdi-book"
          variant="outlined"
          clearable
          density="compact"
        />

        <v-text-field
          label="Nombre del curso"
          v-model="data.course"
          :error="v$.course?.$error"
          :error-messages="v$.course?.$errors[0]?.$message"
          prepend-inner-icon="mdi-book"
          variant="outlined"
          clearable
        />

        <v-textarea
          label="Descripción del curso"
          v-model="data.description"
          auto-grow
          variant="outlined"
          clearable
          rows="2"
          prepend-inner-icon="mdi-text"
        />

        <v-select
          label="Estado"
          v-model="data.active"
          :items="options"
          item-title="name"
          item-value="value"
          variant="outlined"
          prepend-inner-icon="mdi-check-circle-outline"
        />

        <v-card-actions class="justify-end mt-4">
          <v-btn variant="text" @click="closeModal">Cancelar</v-btn>
          <v-btn
            color="#3CDCF0"
            @click="update"
            prepend-icon="mdi-content-save"
          >
            Actualizar
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
