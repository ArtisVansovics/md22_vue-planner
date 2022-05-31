<template>
  <div class="planner">
    <label class="label">
      <input class="input" type="text" v-model="inputValue" />
      <button class="button" @click="addTask()">Add</button>
    </label>
    <div class="task" v-for="task in visibleTasks" :key="task">
      <button class="button button--toggle" @click="toggleComplete(task.id)">
        v
      </button>
      <p class="title" :class="{ active: task.done }">{{ task.title }}</p>
      <button class="button button--delete" @click="deleteTask(task.id)">
        X
      </button>
    </div>
    <button class="button" @click="setFilter('all')">All</button>
    <button class="button" @click="setFilter('inProgress')">In progress</button>
    <button class="button" @click="setFilter('completed')">Completed</button>
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
    filter: "all",
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
    toggleComplete(id: number) {
      this.tasks = this.tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            done: !task.done,
          };
        }
        return task;
      });
    },
    setFilter(value: string) {
      this.filter = value;
    },
  },
  computed: {
    visibleTasks() {
      let filteredTasks;

      if (this.filter === "all") {
        filteredTasks = this.tasks;
      } else if (this.filter === "inProgress") {
        filteredTasks = this.tasks.filter((task) => !task.done);
      } else if (this.filter === "completed") {
        filteredTasks = this.tasks.filter((task) => task.done);
      }

      return filteredTasks;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "TaskPlanner.module.scss";
</style>
