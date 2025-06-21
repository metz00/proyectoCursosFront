<template>
  <div class="loader-wrapper">
    <div class="spinner-container">
      <div class="arcs">
        <span class="arc red"></span>
        <span class="arc white"></span>
        <span class="arc blue"></span>
      </div>
      <img
        class="graduation-hat"
        src="https://cdn-icons-png.flaticon.com/128/3172/3172195.png"
        alt="Cargando..."
      />
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.loader-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}

.spinner-container {
  position: relative;
  width: 80px;
  height: 80px;
}

.graduation-hat {
  position: absolute;
  width: 60%;
  height: 60%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: spin 1s linear infinite;
  z-index: 10;
}

.arcs {
  position: absolute;
  width: 100%;
  height: 100%;
  animation: rotateArc 1s linear infinite;
}

.arc {
  position: absolute;
  border-radius: 50%;
  border: 5px solid transparent;
  width: 100%;
  height: 100%;
}

.arc.red {
  border-right-color: #EFE52D;
  transform: rotate(0deg);
}

.arc.white {
  border-right-color: #ffffff;
  transform: rotate(15deg);
}

.arc.blue {
  border-right-color: #3CDCF0;
  transform: rotate(30deg);
}

@keyframes spin {
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes rotateArc {
  to {
    transform: rotate(360deg);
  }
}
</style>
