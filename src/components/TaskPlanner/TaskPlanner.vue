<template>
  <div class="planner">
    <form class="form" v-on:submit.prevent="addTask()">
      <input class="input" type="text" v-model="inputValue" />
      <button class="button" v-bind:disabled="inputValue === ''">Add</button>
    </form>
    <div class="task" v-for="task in visibleTasks" :key="task">
      <button class="button button--toggle" @click="toggleComplete(task.id)">
        v
      </button>
      <p :class="[{ doneTask: task.done }, 'title']">{{ task.title }}</p>
      <button class="button button--delete" @click="deleteTask(task.id)">
        X
      </button>
    </div>
    <button
      :class="[filter === 'all' ? 'selectedFilter' : '', 'button']"
      @click="setFilter('all')"
    >
      All
    </button>
    <button
      :class="[filter === 'inProgress' ? 'selectedFilter' : '', 'button']"
      @click="setFilter('inProgress')"
    >
      In progress
    </button>
    <button
      :class="[filter === 'completed' ? 'selectedFilter' : '', 'button']"
      @click="setFilter('completed')"
    >
      Completed
    </button>
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
  // use computed to set properties, that respond to changes in their dependencies
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
