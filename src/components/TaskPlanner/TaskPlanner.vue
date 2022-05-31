<template>
  <div class="planner">
    <input class="input" type="text" v-model="inputValue" />
    <button class="button" @click="addTask()">Add</button>
    <div class="task" v-for="task in tasks" :key="task">
      {{ task }}
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TaskPlanner",
  data: () => ({
    inputValue: "",
    tasks: [],
  }),
  methods: {
    addTask() {
      this.tasks.push(this.inputValue);
      this.inputValue = "";
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "TaskPlanner.module.scss";
</style>
