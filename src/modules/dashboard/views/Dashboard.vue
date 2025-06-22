<script setup>
import CardsInfo from "@/modules/dashboard/components/CardsInfo.vue";
import StudentCard from "@/modules/dashboard/components/StudentCard.vue";
import CoursesChart from "@/modules/dashboard/components/CoursesChart.vue";
</script>

<template>
  <v-container fluid class="dashboard-container">

    <div class="dashboard-header">
      <h2 class="dashboard-title text-indigo-darken-3">Dashboard</h2>
    </div>
    
    <div class="cards-section  mt-n5">
      <CardsInfo />
    </div>
    
    <div class="charts-section mt-n15">
      <v-row dense class="charts-row">
        <v-col 
          cols="12" 
          md="6" 
          lg="6" 
          xl="6"
          class="chart-col"
        >
          <StudentCard />
        </v-col>
        <v-col 
          cols="12" 
          md="6" 
          lg="6" 
          xl="6"
          class="chart-col"
        >
          <CoursesChart />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style scoped>
.dashboard-container {
  padding: 0;
  max-width: 100%;
}

.dashboard-header {
  padding: 24px 24px 16px 24px; 
  margin-bottom: 0;
}

.dashboard-title {
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.cards-section {
  padding-bottom: 24px;
  margin-bottom: 24px;
}

.charts-section {
  padding: 0 24px 24px 24px;
}

.charts-row {
  margin: 0 -8px;
}

.chart-col {
  padding: 8px;
}

@media (max-width: 1200px) {
  .dashboard-title {
    font-size: 28px;
  }
}

@media (max-width: 960px) {
  .dashboard-header {
    padding: 20px 16px 12px 16px;
  }
  
  .dashboard-title {
    font-size: 26px;
  }
  
  .cards-section {
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
  
  .charts-section {
    padding: 0 16px 20px 16px;
  }
}

@media (max-width: 600px) {
  .dashboard-header {
    padding: 16px 12px 8px 12px;
  }
  
  .dashboard-title {
    font-size: 24px;
  }
  
  .cards-section {
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
  
  .charts-section {
    padding: 0 12px 16px 12px;
  }
  
  .charts-row {
    margin: 0 -4px;
  }
  
  .chart-col {
    padding: 4px;
    margin-bottom: 8px;
  }
}

@media (max-width: 400px) {
  .dashboard-header {
    padding: 12px 8px 6px 8px;
  }
  
  .dashboard-title {
    font-size: 22px;
  }
  
  .charts-section {
    padding: 0 8px 12px 8px;
  }
}
</style>