<template>
  <div class="services">
    <h1 class="services__title">Services</h1>
    <div class="services__box" v-for="service in servicesAll" :key="service">
      <p>{{ service.title }}</p>
      <p>{{ `$${service.cost.toFixed(2)}` }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

type Service = {
  title: string;
  cost: number;
  selected: boolean;
};

export default defineComponent({
  name: "ServicesSelection",
  data: () => ({
    servicesAll: [
      {
        title: "Web Development",
        cost: 300.0,
        selected: false,
      },
      {
        title: "Design",
        cost: 400.0,
        selected: false,
      },
      {
        title: "Integration",
        cost: 250.0,
        selected: false,
      },
      {
        title: "Training",
        cost: 220.0,
        selected: false,
      },
    ],
  }),
});
</script>

<style scoped lang="scss">
@import "ServiceSelection.module";
</style>
