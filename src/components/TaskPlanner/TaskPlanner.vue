<template>
  <div class="planner">
    <label class="label">
      <input class="input" type="text" v-model="inputValue" />
      <button class="button" @click="addTask()">Add</button>
    </label>
    <div class="task" v-for="task in tasks" :key="task">
      <button>v</button>
      {{ task.title }}
      {{ task.id }}
      <button class="button button--delete" @click="deleteTask(task.id)">
        X
      </button>
    </div>
  </div>
</template>

<script lang="ts">
type Task = {
  id: number;
  title: string;
  done: boolean;
};

import { defineComponent } from "vue";

export default defineComponent({
  name: "TaskPlanner",
  data: () => ({
    inputValue: "",
    tasks: [] as Task[],
    id: 0,
  }),
  methods: {
    // test() {
    //   console.log(this.tasks);
    // },
    addTask() {
      this.tasks.push({
        id: (this.id += 1),
        title: this.inputValue,
        done: false,
      });
      this.inputValue = "";
    },
    deleteTask(id: number) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    // toggleComplete(title: string) {
    //   this.tasks = this.tasks.map((task) => {
    //     if ()
    //   });
    // },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "TaskPlanner.module.scss";
</style>
