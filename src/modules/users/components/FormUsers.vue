<script setup>
import { ref, watch } from "vue";
import { useVuelidate } from "@vuelidate/core";
import useValidators from "@/shared/composables/useValidators";

const { notEmpty$, password$, email$ } = useValidators();

const data = ref({
  email: "",
  password: "",
  role: "",
});

const rules = {
  email: { notEmpty: notEmpty$(), email: email$() },
  password: { notEmpty: notEmpty$(), password: password$() },
  role: { notEmpty: notEmpty$() },
};

let v$ = useVuelidate(rules, data);

const openModal = ref(false);

const props = defineProps({
  open: Boolean,
});

const emits = defineEmits({
  saved: [],
  close: [],
});

const closeModal = () => {
  v$.value.$reset();
  data.value = {
    email: "",
    password: "",
    role: "",
  };
  emits("close");
};

watch(props, () => {
  openModal.value = props.open;
});

const saved = () => {
  v$.value.$validate();
  if (v$.value.$error) return;

  emits("saved", data.value);
  closeModal();
};

const roleOptions = [
  { name: "Administrador", value: "admin" },
  { name: "Usuario", value: "user" },
];
</script>

<template>
  <v-dialog persistent v-model="openModal" width="650px">
    <v-card class="rounded-shaped mx-auto" elevation="10">
      <v-toolbar color="#0F2D3C" dark class="rounded-t-0">
        <v-toolbar-title class="text-h6 font-weight-bold">
          <v-icon icon="mdi-account-plus" class="mr-2"></v-icon>
          Agregar Usuario
        </v-toolbar-title>
        <v-btn
          @click="closeModal"
          icon="mdi-close"
          variant="text"
          density="comfortable"
        ></v-btn>
      </v-toolbar>

      <v-card-text class="pa-6">
        <v-card-subtitle class="text-subtitle-1 px-0 mb-4 text-grey-darken-2">
          Complete los campos para agregar un nuevo usuario
        </v-card-subtitle>

        <v-text-field
          v-model="data.email"
          :error="v$.email?.$error"
          :error-messages="v$.email?.$error ? v$.email.$errors[0].$message : ''"
          label="Correo electrónico"
          variant="outlined"
          density="comfortable"
          rounded="lg"
          class="mb-4"
          prepend-inner-icon="mdi-email"
          clearable
        />

        <v-text-field
          v-model="data.password"
          :error="v$.password?.$error"
          :error-messages="v$.password?.$error ? v$.password.$errors[0].$message : ''"
          label="Contraseña"
          type="password"
          variant="outlined"
          density="comfortable"
          rounded="lg"
          class="mb-4"
          prepend-inner-icon="mdi-lock"
          clearable
        />

        <v-select
          v-model="data.role"
          :items="roleOptions"
          item-title="name"
          item-value="value"
          :error="v$.role?.$error"
          :error-messages="v$.role?.$error ? v$.role.$errors[0].$message : ''"
          label="Rol"
          variant="outlined"
          density="comfortable"
          rounded="lg"
          prepend-inner-icon="mdi-account-key"
          class="mb-6"
        />

        <v-card-actions class="justify-end pa-0">
          <v-btn
            variant="text"
            rounded="lg"
            @click="closeModal"
            class="mr-3 text-grey-darken-1"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="#3CDCF0"
            variant="flat"
            @click="saved"
            rounded="lg"
            prepend-icon="mdi-content-save"
            :elevation="2"
          >
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.v-btn:not(.v-btn--disabled):hover {
  transform: translateY(-1px);
  transition: transform 0.2s ease;
}
.v-dialog .v-card {
  transition: all 0.3s ease;
}
</style>
