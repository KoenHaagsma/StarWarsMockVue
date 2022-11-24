<script setup lang="ts">
import FilterVue from "./Filter.vue";
import TypographyVue from "./Typography.vue";
</script>

<template>
  <section class="filters">
    <TypographyVue variant="small" text="What are you looking for" />
    <section>
      <FilterVue
        title="Film"
        :options="[
          { name: 'A New Hope', id: '1' },
          { name: 'The Empire Strikes Back', id: '2' },
          { name: 'Return of the Jedi', id: '3' },
        ]"
      />
      <FilterVue
        title="Planet"
        :options="[
          { name: 'Tatooine', id: '1' },
          { name: 'Alderaan', id: '2' },
          { name: 'Yavin IV', id: '3' },
        ]"
      />
      <FilterVue
        title="Species"
        :options="[
          { name: 'Human', id: '1' },
          { name: 'Droid', id: '2' },
          { name: 'Wookie', id: '3' },
        ]"
      />

      <FilterVue
        title="Sort"
        :options="[
          { name: 'Film', id: '1' },
          { name: 'Planet', id: '2' },
          { name: 'Species', id: '3' },
        ]"
      />
    </section>
  </section>
</template>

<style scoped lang="scss">
.filters {
  margin-bottom: var(--spacing);

  & section {
    display: flex;
    justify-content: space-between;
  }
}
</style>
