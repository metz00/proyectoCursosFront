<template>
  <div class="login-card">
    <h1 class="login-title">Inicia Sesión</h1>

    <form @submit.prevent="handleLogin" class="login-form">
      <div v-if="error" class="error-message">Credenciales invalidas</div>

      <div class="form-group">
        <input
          type="email"
          id="email"
          v-model="user.email"
          required
          placeholder="Ingresa tu email"
        />
      </div>

      <div class="form-group">
        <input
          type="password"
          id="password"
          v-model="user.password"
          required
          placeholder="Ingresa tu contraseña"
        />
      </div>

      <button type="submit" class="login-btn" :disabled="isLoading">
        {{ isLoading ? "Logging in..." : "Login" }}
      </button>
    </form>
  </div>
</template>

<script>
import { useAppStore } from "@/store/app";

import { mixin } from "@/Server/index";

export default {
  mixins: [mixin],
  data() {
    return {
      user: {},
      isLoading: false,
      error: null,
    };
  },

  created() {
    this.appStore = useAppStore();
  },

  methods: {

    async handleLogin() {
      this.isLoading = true;
      this.error = null;

      try {
        const response = await this.peticionApi({
          method: "POST",
          api: "auths/local/sign-in",
          data: {
            email: this.user.email,
            password: this.user.password,
          },
        });

        this.$router.push("/");

        console.log("Login successful");
      } catch (error) {
        console.error("Error de login:", error);
        this.error =
          "Error al iniciar sesión: " +
          (error.response?.data?.message || "Error del servidor");
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.login-card {
  display: flex;
  flex-direction: column;
  z-index: 3;
  background: white;
  border-radius: 8px;
  padding: 40px;
  width: 100%;
  max-width: 320px;
  max-height: auto;
  transform: translateY(0);
  transition: all 0.3s ease;
}

.login-card:hover {
  transform: translateY(-5px);
}

.login-title {
  text-align: center;
  margin-top: -25px;
  margin-bottom: 4px;
  font-size: 24px;
  color: #333;
}

.google-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 8px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  color: #444;
  cursor: pointer;
  transition: background-color 0.3s;
}

.google-btn:hover {
  background-color: #f8f8f8;
}

.google-logo {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.divider {
  display: flex;
  align-items: center;
  color: #888;
}

.divider::before,
.divider::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid #ddd;
}

.divider span {
  padding: 0 10px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.error-message {
  color: #d32f2f;
  font-size: 14px;
  text-align: center;
  margin-bottom: 10px;
}

.login-btn {
  width: 100%;
  padding: 8px;
  background-color: #557728;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 8px;
  margin-bottom: -20px;
}

.login-btn:hover {
  background-color: #2d3d18;
}

.login-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .login-card {
    padding: 30px;
    max-width: 60%;
    box-sizing: border-box;
  }

  .login-title {
    font-size: 22px;
    margin-top: -18px;
  }

  .form-group input {
    padding: 10px;
  }
}

@media (max-width: 480px) {
  .login-card {
    padding: 30px;
    max-width: 70%;
    box-sizing: border-box;
    padding: 25px;
  }

  .login-btn,
  .google-btn {
    padding: 10px;
  }
}
</style>
