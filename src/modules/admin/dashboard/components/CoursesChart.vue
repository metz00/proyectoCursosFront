

<script setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { Bar } from 'vue-chartjs';
import { ref } from 'vue';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const chartData = ref({
  labels: [
    'Enero', 'Febrero', 'Marzo', 'Abril',
    'Mayo', 'Junio', 'Julio', 'Agosto',
    'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ],
  datasets: [
    {
      label: 'Vistas de Cursos',
      backgroundColor: '#3CDCF0',
      data: [120, 90, 150, 180, 200, 250, 300, 220, 190, 230, 270, 310],
    },
  ],
});

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
    },
  },
};
</script>
<template>
  <v-card class="pa-4" elevation="2" rounded="xl">
    <v-card-title>Vistas de cursos por mes</v-card-title>
    <v-card-text>
      <Bar :data="chartData" :options="chartOptions" />
    </v-card-text>
  </v-card>
</template>