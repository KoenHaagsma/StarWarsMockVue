<script setup lang="ts">
import { ref } from "vue";
import Typography from "./Typography.vue";

const { name } = defineProps<{ name: string }>();

const initials = ref(name.split(" ").reduce((acc, curr) => acc + curr[0], ""));
</script>

<template>
  <article class="character">
    <Typography variant="big" :text="initials" />
    <p class="character__name">{{ name }}</p>
  </article>
</template>
