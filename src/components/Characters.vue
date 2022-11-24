<script setup lang="ts">
import Character from "./Character.vue";
import { Person } from "../App.vue";

const { characters } = defineProps<{ characters: Person[] }>();
</script>

<template>
  <section class="grid characters-grid">
    <Character
      v-for="character in characters"
      :key="character.name"
      :name="character.name"
    />
  </section>
</template>

<style scoped>
.characters-grid {
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 1200px) {
  .characters-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .characters-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .characters-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
