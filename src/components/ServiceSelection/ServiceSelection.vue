<template>
  <div class="services">
    <h1 class="task__title">Services</h1>
    <div
      v-for="service in services"
      :class="['box', { selected: service.selected }]"
      @click="handleClick(service.title)"
      :key="service.title"
    >
      <p>{{ service.title }}</p>
      <p>{{ `$${service.cost.toFixed(2)}` }}</p>
    </div>
    <hr class="line" />
    <div class="row">
      <p>Total:</p>
      <p>{{ `$${totalCost.toFixed(2)}` }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ServicesSelection",
  data: () => ({
    services: [
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
  methods: {
    handleClick(title: string) {
      this.services = this.services.map((service) => {
        if (service.title === title) {
          return {
            ...service,
            selected: !service.selected,
          };
        }
        return service;
      });
    },
  },
  computed: {
    totalCost() {
      let costArr = this.services.map((service) => {
        if (service.selected) {
          return service.cost;
        }
        return 0;
      });
      return costArr.reduce((a, b) => a + b);
    },
  },
});
</script>

<style scoped lang="scss">
@import "ServiceSelection.module";
</style>
