<template>
  <v-app class="app-background">
    <v-app-bar app color="#ffffff" dark class="elevation-8">
      <v-app-bar-nav-icon @click="toggleDrawer" />
      <v-toolbar-title>
        <b>Dev Cursos Admin</b>
      </v-toolbar-title>
      <v-btn class="logout-btn mr-5" variant="outlined" @click="logout" rounded="xl">
        Cerrar sesión
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" class="navigation-drawer elevation-8">
      <v-list color="transparent" density="compact" nav>
        <v-row class="navBar-logo">
          <v-col>
            <v-avatar class="navBar-logo__avatar elevation-8">
              <v-img
                src="https://res.cloudinary.com/dkkcoy1wz/image/upload/v1750470219/cursos/ynbvzibyksfuuazwc0xg.png"
                class="navBar-logo__img"
              />
            </v-avatar>
            <h3 class="mt-5 user-text">
              {{ appStore.userData?.email || "Usuario" }}
            </h3>
          </v-col>
        </v-row>

        <v-list-item
          to="/Dashboard"
          value="Dashboard"
          color="#005073"
          prepend-icon="mdi-home"
          title="Inicio"
          class="list-item__text mt-8"
        />

        <v-list-item
          to="/categorias"
          value="categorias"
          color="#005073"
          prepend-icon="mdi-shape"
          title="Categorías"
          class="list-item__text"
        />

        <v-list-item
          to="/cursos"
          value="cursos"
          color="#005073"
          prepend-icon="mdi-book-open-variant"
          title="Cursos"
          class="list-item__text"
        />

        <v-list-item
          to="/usuarios"
          value="usuarios"
          color="#005073"
          prepend-icon="mdi-account"
          title="Usuarios"
          class="list-item__text"
        />
      </v-list>
    </v-navigation-drawer>

    <v-main class="scroll-container">
      <div class="px-8"> 
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAppStore } from "@/store/app";

const drawer = ref(true);
const appStore = useAppStore();
const router = useRouter();

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

const logout = () => {
  localStorage.removeItem("token");
  router.push("/auth/sign-in");
};

watch(
  () => appStore.$state.vuetify?.breakpoint?.lgAndUp,
  (val) => {
    drawer.value = val;
  }
);

onMounted(() => {
  const userData = JSON.parse(localStorage.getItem("user"));
  if (userData) {
    appStore.userData = { data: userData };
  }
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.app-background {
  background-color: #c8d2d7;
}
.navigation-drawer {
  background-color: #ffffff;
}

.navBar-logo {
  text-align: center;
}

.navBar-logo__avatar {
  height: 85px !important;
  width: 85px !important;
  box-sizing: border-box;
  margin-top: 30px;
}

.list-item__text {
  border-radius: 50px;
  padding: 10px;
  margin: 5px 20px;
  color: black;
}
.user-text {
  color: #005073;
}

.logout-btn {
  color: #005073;
  font-weight: bold;
  padding: 10px;
}
</style>
