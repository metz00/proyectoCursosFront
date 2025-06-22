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

<template>
  <v-container fluid class="cards-container">
    <v-row dense class="cards-row">
      <v-col
        v-for="(card, i) in cards"
        :key="i"
        cols="12"
        sm="6"
        md="6"
        lg="3"
        xl="3"
        class="card-col"
      >
        <v-card class="stats-card" elevation="2" rounded="xl">
          <v-card-text class="card-content">
            <div class="card-layout">
              <div class="text-content">
                <p class="card-title">{{ card.title }}</p>
                <p class="card-value">{{ card.value }}</p>
                <div class="change-indicator">
                  <v-icon size="14" :color="card.changeColor" class="change-icon">
                    {{ card.changeIcon }}
                  </v-icon>
                  <span :class="`text-${card.changeColor} change-text`">{{ card.change }}</span>
                </div>
              </div>
              <div class="icon-container">
                <v-avatar size="48" :style="{ backgroundColor: card.iconBg }" class="card-avatar">
                  <v-icon :color="card.iconColor" size="24">
                    {{ card.icon }}
                  </v-icon>
                </v-avatar>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.cards-container {
  padding: 16px 24px;
}

.cards-row {
  margin: 0 -8px;
}

.card-col {
  padding: 8px;
}

.stats-card {
  height: 100%;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border: 1px solid rgba(0,0,0,0.05);
}

.stats-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
}

.card-content {
  padding: 20px;
  height: 100%;
}

.card-layout {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
}

.text-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 80px;
}

.card-title {
  font-size: 14px;
  font-weight: 500;
  color: #64748b;
  margin: 0 0 8px 0;
  line-height: 1.3;
}

.card-value {
  font-size: 28px;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 12px 0;
  line-height: 1.2;
}

.change-indicator {
  display: flex;
  align-items: center;
  gap: 4px;
}

.change-icon {
  flex-shrink: 0;
}

.change-text {
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
}

.icon-container {
  flex-shrink: 0;
  margin-left: 16px;
}

.card-avatar {
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}


@media (max-width: 1200px) {
  .card-value {
    font-size: 24px;
  }
  
  .card-avatar {
    width: 44px !important;
    height: 44px !important;
  }
  
  .card-avatar .v-icon {
    font-size: 22px !important;
  }
}

@media (max-width: 960px) {
  .cards-container {
    padding: 12px 16px;
  }
  
  .card-content {
    padding: 16px;
  }
  
  .card-value {
    font-size: 22px;
  }
  
  .card-title {
    font-size: 13px;
  }
  
  .change-text {
    font-size: 11px;
  }
}

@media (max-width: 600px) {
  .cards-container {
    padding: 8px 12px;
  }
  
  .cards-row {
    margin: 0 -4px;
  }
  
  .card-col {
    padding: 4px;
  }
  
  .card-content {
    padding: 14px;
  }
  
  .card-layout {
    min-height: 70px;
  }
  
  .text-content {
    min-height: 70px;
  }
  
  .card-title {
    font-size: 12px;
    margin-bottom: 6px;
  }
  
  .card-value {
    font-size: 20px;
    margin-bottom: 8px;
  }
  
  .card-avatar {
    width: 40px !important;
    height: 40px !important;
  }
  
  .card-avatar .v-icon {
    font-size: 20px !important;
  }
  
  .icon-container {
    margin-left: 12px;
  }
  
  .change-text {
    font-size: 10px;
  }
  
  .change-icon {
    font-size: 12px !important;
  }
}

@media (max-width: 400px) {
  .card-content {
    padding: 12px;
  }
  
  .card-value {
    font-size: 18px;
  }
  
  .card-title {
    font-size: 11px;
  }
  
  .change-text {
    font-size: 9px;
  }
}</style>