<template>
  <div class="wrapper">
    <ServicesSelection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ServicesSelection from "@/components/ServiceSelection/ServiceSelection.vue";

export default defineComponent({
  name: "ServicesView",
  components: { ServicesSelection },
});
</script>
