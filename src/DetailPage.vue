<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import CharactersVue from "./components/Characters.vue";
import FilterVue from "./components/Filter.vue";
import TypographyVue from "./components/Typography.vue";
</script>

<template>
  <main>
    <TypographyVue variant="medium" text="Star wars universe." />
    <section class="detail">
      <section>
        <TypographyVue variant="big" text="Luke Skywalker" />
        <TypographyVue variant="small" text="film 1,2,3" />
      </section>
      <section>
        <TypographyVue variant="medium" text="Hair" />
        <TypographyVue variant="medium" text="Eyes" />
        <TypographyVue variant="medium" text="Mass" />
      </section>
    </section>
    <section class="others">
      <section class="filter">
        <TypographyVue
          variant="medium"
          text="Some other characters living in"
        />
        <FilterVue
          title=""
          :options="[
            { name: 'Tatooine', id: '1' },
            { name: 'Alderaan', id: '2' },
            { name: 'Yavin IV', id: '3' },
          ]"
        />
      </section>
      <CharactersVue />
    </section>
  </main>
</template>

<style scoped lang="scss">
.detail {
  display: flex;
  justify-content: space-around;

  > section {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}

.others {
  color: var(--white);
  background-color: var(--secondary);
  padding: var(--spacing);
  padding-bottom: 300px;
  padding-top: 100px;
  margin-left: -1em;
  margin-right: -1em;

  .typography {
    margin-bottom: var(--spacing);
  }

  .filter {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
