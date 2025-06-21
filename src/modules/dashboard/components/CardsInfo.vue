<template>
  <v-container fluid class="pa-8">
    <v-row dense>
      <v-col
        v-for="(card, i) in cards"
        :key="i"
        cols="12"
        sm="6"
        md="3"
      >
        <v-card class="pa-4" elevation="1" rounded="xl">
          <div class="d-flex justify-space-between align-center">
            <div>
              <p class="text-subtitle-2 text-grey-darken-1">{{ card.title }}</p>
              <p class="text-h6 font-weight-bold">{{ card.value }}</p>
              <div class="mt-1 d-flex align-center">
                <v-icon size="16" :color="card.changeColor">
                  {{ card.changeIcon }}
                </v-icon>
                <span :class="`${card.changeColor} text-caption ml-1`">{{ card.change }}</span>
              </div>
            </div>
            <v-avatar size="40" :style="{ backgroundColor: card.iconBg }">
              <v-icon :color="card.iconColor" size="24">
                {{ card.icon }}
              </v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const cards = [
  {
    title: 'Total Cursos',
    value: '12',
    change: '2 nuevos este mes',
    changeColor: 'green',
    changeIcon: 'mdi-arrow-up-bold',
    icon: 'mdi-book-open-page-variant',
    iconColor: 'indigo',
    iconBg: '#e0e7ff',
  },
  {
    title: 'Estudiantes',
    value: '254',
    change: '25 nuevos esta semana',
    changeColor: 'green',
    changeIcon: 'mdi-arrow-up-bold',
    icon: 'mdi-account-group',
    iconColor: 'green',
    iconBg: '#d1fae5',
  },
  {
    title: 'Ingresos',
    value: '$12,350',
    change: '2% respecto al mes pasado',
    changeColor: 'red',
    changeIcon: 'mdi-arrow-down-bold',
    icon: 'mdi-currency-usd',
    iconColor: 'blue',
    iconBg: '#e0f2fe',
  },
  {
    title: 'Tasa de Finalización',
    value: '78%',
    change: '5% más que el promedio',
    changeColor: 'green',
    changeIcon: 'mdi-arrow-up-bold',
    icon: 'mdi-trophy',
    iconColor: 'purple',
    iconBg: '#f3e8ff',
  },
];
</script>
