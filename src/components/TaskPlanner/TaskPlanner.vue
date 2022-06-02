<template>
  <div class="planner">
    <form class="form" v-on:submit.prevent="addTask()">
      <input
        class="input"
        type="text"
        placeholder="Your task"
        v-model="inputValue"
      />
      <button class="button" v-bind:disabled="inputValue === ''">Add</button>
    </form>
    <div class="task" v-for="task in visibleTasks" :key="task">
      <label class="label">
        <input
          :class="['checkbox', { doneCheck: task.done }]"
          type="checkbox"
          @click="toggleComplete(task.id)"
        />
        <span :class="['title', { doneTask: task.done }]">{{
          task.title
        }}</span>
      </label>
      <button class="button button--delete" @click="deleteTask(task.id)">
        X
      </button>
    </div>
    <div class="row-buttons">
      <button
        v-for="buttonFilter in buttonFilters"
        :class="[
          'button',
          filter === buttonFilter.value ? 'selectedFilter' : '',
        ]"
        @click="setFilter(buttonFilter.value)"
        :key="buttonFilter.value"
      >
        {{ buttonFilter.name }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

type Task = {
  id: number;
  title: string;
  done: boolean;
};

export default defineComponent({
  name: "TaskPlanner",
  data: () => ({
    inputValue: "",
    tasks: [] as Task[],
    filter: "all",
    id: 0,
    buttonFilters: [
      {
        value: "all",
        name: "All",
      },
      {
        value: "inProgress",
        name: "In Progress",
      },
      {
        value: "completed",
        name: "Completed",
      },
    ],
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
@import "TaskPlanner.module";
</style>
