<script setup lang="ts">
import { ref } from "vue";

const {
  variant = "medium",
  text,
  weight = "normal",
} = defineProps<{
  variant?: "big" | "medium" | "small";
  weight?: "bold" | "normal" | "light";
  text: string;
}>();

console.log(weight);
</script>

<template>
  <div
    class="typography"
    style="
       {
        font-weight: $weight;
      }
    "
    :class="{
      'typography--big': variant === 'big',
      'typography--medium': variant === 'medium',
      'typography--small': variant === 'small',
    }"
  >
    {{ text }}
  </div>
</template>

<style scoped lang="scss">
.typography {
  &--big {
    font-size: 8rem;
    font-weight: bolder;
  }
  &--medium {
    font-size: 1.5rem;
  }
  &--small {
    font-size: 1rem;
    font-weight: 200;
  }
}
</style>
