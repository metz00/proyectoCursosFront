<template>
  <div class="login-card">
    <h1 class="login-title">Crear Cuenta</h1>

    <form @submit.prevent="handleLogin" class="login-form">
      <div v-if="error" class="error-message">
        {{ error }}
      </div>

      <div class="form-group">
        <input
          type="text"
          id="name"
          v-model="user.name"
          required
          placeholder="Ingresa tu nombre completo"
        />
      </div>

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
        {{ isLoading ? "Creando cuenta..." : "Crear Cuenta" }}
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
      user: {
        name: '',
        email: '',
        password: ''
      },
      isLoading: false,
      error: null,
    };
  },

  created() {
    this.appStore = useAppStore();
  },

  methods: {
    async handleLogin() {
      console.log("Registro HOLLAAA"); 
      this.isLoading = true;
      this.error = null;

      try {
        await this.peticionApi({
          method: "POST",
          api: "auths/local/sign-up",
          data: {
            name: this.user.name,
            email: this.user.email,
            password: this.user.password,
          },
        });
        
        console.log("YA JALOOOO");
        this.$router.push("/auth/sign-in");
      } catch (error) {
        console.error("Error de registro:", error);
        this.error = "Error al crear la cuenta: " + 
          (error.response?.data?.message || "Error del servidor");
      } finally {
        this.isLoading = false;
      }
    },
  },
  
  mounted() {
  },
};
</script>

<style scoped>
.login-card {
  width: 100%;
  max-width: 400px;
  background: white;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}

.login-card:hover {
  transform: translateY(-5px);
}

.login-title {
  text-align: center;
  margin-top: -25px;
  margin-bottom: 24px;
  font-size: 28px;
  color: #333;
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
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #005073;
}

.error-message {
  color: #d32f2f;
  font-size: 14px;
  text-align: center;
  margin-bottom: 10px;
  padding: 8px;
  background-color: #ffeaea;
  border-radius: 4px;
}

.login-btn {
  width: 100%;
  padding: 12px;
  background-color: #005073;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 8px;
}

.login-btn:hover:not(:disabled) {
  background-color: #0F2D3C;
}

.login-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}


@media (max-width: 768px) {
  .login-card {
    padding: 25px 20px;
    max-width: 90%;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .login-title {
    font-size: 24px;
    margin-top: -15px;
    margin-bottom: 20px;
  }

  .form-group input {
    padding: 14px 12px;
    font-size: 16px;
  }

  .login-btn {
    padding: 14px;
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .login-card {
    padding: 20px 16px;
    max-width: 95%;
    border-radius: 6px;
  }

  .login-title {
    font-size: 22px;
    margin-top: -10px;
    margin-bottom: 18px;
  }

  .form-group input {
    padding: 16px 12px;
    font-size: 16px;
    border-radius: 6px;
  }

  .login-btn {
    padding: 16px;
    font-size: 16px;
    border-radius: 6px;
  }

  .login-form {
    gap: 14px;
  }
}

@media (max-width: 360px) {
  .login-card {
    padding: 18px 14px;
    max-width: 98%;
  }

  .login-title {
    font-size: 20px;
    margin-bottom: 16px;
  }
}
</style>