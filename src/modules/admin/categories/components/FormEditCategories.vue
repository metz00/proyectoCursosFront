<script setup>
import { watch, ref } from "vue";
import option from "@/shared/Helpers/options.json";

import { useVuelidate } from "@vuelidate/core";
import useValidators from "@/shared/composables/useValidators"

const { notEmpty$ } = useValidators()

const data = ref({
  category: "",
  active: "",
});

const rules = {
  category: { notEmpty: notEmpty$() },
  active: { notEmpty: notEmpty$() }
}

let v$ = useVuelidate(rules, data)
const options = option.options;
const openModal = ref(false);
const props = defineProps({
  open: Boolean,
  category: Object,
});

const emits = defineEmits({
  update: [],
  close: [],
});

const closeModal = () => {
  v$.value.$reset()
  data.value = {
    category: "",
    active: "",
  };
  emits("close");
};

watch(props, () => {
  openModal.value = props.open;
  data.value = { ...props.category };
});

const updated = () => {
  v$.value.$validate()
  if (v$.value.$error) return

  emits("update", data.value);
  closeModal();
};
</script>
<template>
  <v-dialog persistent v-model="openModal" width="650px">
    <v-card class="rounded-shaped mx-auto" elevation="10">
      <v-toolbar color="#005073" dark class="rounded-t-0">
        <v-toolbar-title class="text-h6 font-weight-bold">
          <v-icon icon="mdi-shape-rectangle-plus" class="mr-2"></v-icon>
          Editar Categorías
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click="closeModal" icon="mdi-close" variant="text" density="comfortable"></v-btn>
      </v-toolbar>

      <v-card-text class="pa-6">
        <v-card-subtitle class="text-subtitle-1 px-0 mb-4 text-grey-darken-2">
          Complete los campos para configurar la categoría del curso
        </v-card-subtitle>

        <v-text-field :error="v$.category?.$error"
          :error-messages="v$.category?.$error ? v$.category.$errors[0].$message : ''"  v-model="data.category" variant="outlined" label="Nombre de la categoría" density="comfortable"
          rounded="lg" class="mb-4" prepend-inner-icon="mdi-form-textbox" clearable></v-text-field>

        <v-select :error="v$.active?.$error"
          :error-messages="v$.active?.$error ? v$.active.$errors[0].$message : ''" v-model="data.active" item-title="name" item-value="value" :items="options" label="Estado"
          variant="outlined" density="comfortable" rounded="lg" prepend-inner-icon="mdi-check-circle-outline"
          class="mb-6"></v-select>

        <v-card-actions class="justify-end pa-0">
          <v-btn variant="text" rounded="lg" @click="closeModal" class="mr-3 text-grey-darken-1">
            Cancelar
          </v-btn>
          <v-btn color="#3CDCF0" variant="flat" @click="updated" rounded="lg"
            prepend-icon="mdi-content-save" :elevation="2">
            Actualizar
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.gap-4 {
  gap: 16px;
}

.v-btn:not(.v-btn--disabled):hover {
  transform: translateY(-1px);
  transition: transform 0.2s ease;
}

.v-dialog .v-card {
  transition: all 0.3s ease;
}
</style>
