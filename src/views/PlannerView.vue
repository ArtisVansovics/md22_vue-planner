<template>
  <div class="wrapper">
    <TaskPlanner />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskPlanner from "@/components/TaskPlanner/TaskPlanner.vue";

export default defineComponent({
  name: "PlannerView",
  components: { TaskPlanner },
});
</script>
