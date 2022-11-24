<script setup lang="ts">
import Typography from "./Typography.vue";

const { title, options } = defineProps<{
  title?: string;
  options: { name: string; id: string }[];
}>();
</script>

<template>
  <section class="filter">
    <Typography :if="title !== ''" :text="title ?? ''" weight="bold" />
    <select>
      <option v-for="option in options" :key="option.id" :value="option.id">
        {{ option.name }}
      </option>
    </select>
  </section>
</template>

<style scoped lang="scss">
.filter {
  display: flex;
  margin-top: var(--spacing);

  & .typography {
    margin-right: var(--spacing);
  }
}
</style>
