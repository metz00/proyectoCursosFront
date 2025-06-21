<script setup>
import CardsInfo from "@/modules/dashboard/components/CardsInfo.vue";
import StudentCard from "@/modules/dashboard/components/StudentCard.vue";
import CoursesChart from "@/modules/dashboard/components/CoursesChart.vue";
</script>

<template>
  <h2 class="ml-8 mt-8">Dashboard</h2>
  <CardsInfo />
  <v-row>
    <v-col cols="6"> <StudentCard /> </v-col>
    <v-col cols="6"> <CoursesChart /></v-col>
  </v-row>
</template>
