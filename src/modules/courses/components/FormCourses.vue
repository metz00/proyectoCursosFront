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
});

const emits = defineEmits(["saved", "close"]);

const openModal = ref(false);
const previewImage = ref(null);

const data = ref({
  course: "",
  description: "",
  categoryId: "",
  active: true,
  image: null,
});

watch(props, () => {
  openModal.value = props.open;
});

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
    course: "",
    description: "",
    categoryId: "",
    active: true,
    image: null,
  };
  previewImage.value = null;
  emits("close");
};

const save = () => {
  v$.value.$validate();
  if (v$.value.$error) return;
  emits("saved", data.value);
  closeModal();
};
</script>

<template>
  <v-dialog persistent v-model="openModal" width="650px">
    <v-card class="rounded-shaped mx-auto" elevation="10">
      <v-toolbar color="#005073" dark>
        <v-toolbar-title class="text-h6 font-weight-bold">
          <v-icon icon="mdi-book-plus" class="mr-2" />
          Agregar Curso
        </v-toolbar-title>
        <v-btn icon="mdi-close" variant="text" @click="closeModal" />
      </v-toolbar>

      <v-card-text class="pa-6">
        <v-card-subtitle class="text-subtitle-1 text-grey-darken-2 mb-1 mt-n5 mb-4">
          Complete los campos para registrar un nuevo curso
        </v-card-subtitle>

        <v-img
          v-if="previewImage"
          :src="previewImage"
          max-height="120"
          contain
          class="mb-5 rounded-xl"
        />

        <v-file-input
          :error="v$.image?.$error"
          :error-messages="v$.image?.$error ? v$.image.$errors[0].$message : ''"
          label="Imagen del curso"
          prepend-icon="mdi-camera"
          accept="image/*"
          variant="outlined"
          @change="handleFileUpload"
          clearable
          density="compact"
        />

        <v-select
          label="Categoría"
          v-model="data.categoryId"
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
          density="compact"
        />

        <v-textarea
          label="Descripción del curso"
          v-model="data.description"
          auto-grow
          variant="outlined"
          clearable
          rows="2"
          prepend-inner-icon="mdi-text"
          density="compact"
        />

        <v-select
          label="Estado"
          v-model="data.active"
          :items="options"
          item-title="name"
          item-value="value"
          variant="outlined"
          density="compact"
          prepend-inner-icon="mdi-check-circle-outline"
        />

        <v-card-actions class="justify-end mt-n2 mb-n2">
          <v-btn variant="text" @click="closeModal">Cancelar</v-btn>
          <v-btn color="#3CDCF0" @click="save" prepend-icon="mdi-content-save">
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
