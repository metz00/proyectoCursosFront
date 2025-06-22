<template>
  <nav class="user-navbar">
    <div class="user-navbar-container">
      <div class="user-navbar-brand">
        <img src="@/assets/birrete.svg" alt="DevCursos Logo" class="user-navbar-logo" />
        <span class="user-navbar-name">DevCursos</span>
      </div>
      
      <div class="user-navbar-menu" :class="{ 'active': isMenuOpen }">
        <router-link to="/home" class="user-navbar-item">Inicio</router-link>
        <router-link to="/cursos" class="user-navbar-item">Cursos</router-link>
        <router-link to="/instructores" class="user-navbar-item">Instructores</router-link>
        <router-link to="/actualizar-plan" class="user-navbar-item">Actualizar Plan</router-link>
        
        <div class="user-dropdown" ref="dropdownRef">
          <button class="user-dropbtn" @click.stop="toggleDropdown">
            <img src="@/assets/userIcon.png" alt="Usuario" class="user-icon" />
            <span class="user-email" v-if="userData?.email">{{ userData.email }}</span>
            <i class="dropdown-arrow" :class="{ 'rotate': isDropdownOpen }"></i>
          </button>
          <div class="user-dropdown-content" v-show="isDropdownOpen">
            <a href="#" @click.prevent="goToProfile">Mi Perfil</a>
            <a href="#" @click.prevent="logout">Cerrar Sesión</a>
          </div>
        </div>
      </div>
      
      <button class="user-navbar-toggle" @click="toggleMenu">
        <span class="user-navbar-toggle-icon"></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore } from '@/store/app';

const router = useRouter();
const appStore = useAppStore();
const dropdownRef = ref(null);

const isDropdownOpen = ref(false);
const isMenuOpen = ref(false);

const userData = computed(() => appStore.$state.userData);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const goToProfile = () => {
  router.push('/perfil');
  isDropdownOpen.value = false;
  isMenuOpen.value = false;
};

const logout = () => {
  localStorage.removeItem('token');
  router.push('/auth/sign-in');
  appStore.$reset();
};

const closeDropdownOnClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isDropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', closeDropdownOnClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', closeDropdownOnClickOutside);
});
</script>

<style scoped>
.user-navbar {
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1000;
}

.user-navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.user-navbar-brand {
  display: flex;
  align-items: center;
  gap: 10px;
}
.user-email{
  color: #0F283C;
  font-weight: 500;
}
.user-navbar-logo {
  height: 40px;
  width: auto;
}

.user-navbar-name {
  font-size: 1.5rem;
  font-weight: bold;
  color: #0F283C;
}

.user-navbar-menu {
  display: flex;
  gap: 15px;
  align-items: center;
}

.user-navbar-item {
  color: #0F283C;
  font-weight: 500;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.user-navbar-item:hover {
  background-color: #3CDCF0;
}

.user-navbar-item.router-link-exact-active {
  background-color: #3CDCF0;
  font-weight: bold;
}

.user-dropdown {
  position: relative;
  display: inline-block;
  margin-left: 10px;
}

.user-dropbtn {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.user-dropbtn:hover {
  background-color: #2980b9;
}

.user-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
}

.dropdown-arrow {
  margin-left: 5px;
  transition: transform 0.3s;
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid white;
}

.dropdown-arrow.rotate {
  transform: rotate(180deg);
}

.user-dropdown-content {
  position: absolute;
  right: 0;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  border-radius: 4px;
  z-index: 1;
}

.user-dropdown-content a {
  color: #333;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition: background-color 0.3s;
}

.user-dropdown-content a:hover {
  background-color: #f1f1f1;
  color: #2c3e50;
}

@media (max-width: 768px) {
  .user-navbar-menu {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background-color: #3498db;
    flex-direction: column;
    padding: 1rem;
    gap: 10px;
    transform: translateY(-150%);
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
  }
  
  .user-navbar-menu.active {
    transform: translateY(0);
  }
  
  .user-navbar-toggle {
    display: block;
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
  }
  
  .user-navbar-toggle-icon {
    display: block;
    width: 25px;
    height: 3px;
    background-color: white;
    position: relative;
  }
  
  .user-navbar-toggle-icon::before,
  .user-navbar-toggle-icon::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
  }
  
  .user-navbar-toggle-icon::before {
    top: -8px;
  }
  
  .user-navbar-toggle-icon::after {
    top: 8px;
  }
  
  .user-dropdown {
    width: 100%;
    margin-left: 0;
  }
  
  .user-dropdown-content {
    position: static;
    width: 100%;
  }
}
</style>