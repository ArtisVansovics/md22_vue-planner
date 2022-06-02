<template>
  <div class="services">
    <h1 class="title">Services</h1>
    <div
      :class="['box', { selected: service.selected }]"
      @click="handleClick(service.title)"
      v-for="service in services"
      :key="service"
    >
      <p>{{ service.title }}</p>
      <p>{{ `$${service.cost.toFixed(2)}` }}</p>
    </div>
    <hr class="line" />
    <!--    <div class="row">-->
    <!--      <p>Total:</p>-->
    <!--      <p>{{`$${}`}}</p>-->
    <!--    </div>-->
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
});
</script>

<style scoped lang="scss">
@import "ServiceSelection.module";
</style>
