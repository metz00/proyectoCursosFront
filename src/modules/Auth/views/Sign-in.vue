<template>
  <div class="fill-height">
    <div class="login-wrapper">
      <div class="image-section desktop-image">
        <LoginImage />
      </div>

      <div class="image-mobile mobile-image">
        <LoginImage />
      </div>

      <div class="form-section">
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script setup>
import LoginForm from "../components/Sign-in.vue";
import LoginImage from "../components/Sign-img.vue";
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
}

.login-wrapper {
  display: flex;
  min-height: 100vh;
}

.desktop-image {
  flex: 1;
  background-color: #0F2D3C;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-image {
  display: none;
  width: 100%;
  background-color: #0F2D3C;
}

.form-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
  background-color: #f9f9f9;
}

@media (max-width: 768px) {
  .login-wrapper {
    flex-direction: column;
    min-height: 100vh;
  }

  .desktop-image {
    display: none;
  }
  
  .mobile-image {
    display: block;
    width: 100%;
    order: 1;
  }
  
  .form-section {
    flex: 1;
    order: 2;
    padding: 20px 16px;
    min-height: calc(100vh - 200px);
  }
}

@media (max-width: 480px) {
  .form-section {
    padding: 16px 12px;
    min-height: calc(100vh - 180px);
  }
}
</style>