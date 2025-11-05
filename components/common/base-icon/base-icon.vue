<template>
  <component class="base-icon" :is="icon" />
</template>

<script setup>
  import { computed } from "@vue/reactivity";
  import { defineAsyncComponent } from "vue";

  const props = defineProps({
    iconName: String,
  });

  const icon = computed(() =>
    defineAsyncComponent(() => import(`./icons/${props.iconName}.icon.vue`)),
  );
</script>

<style lang="scss" scoped>
  .base-icon {
    width: var(--base-icon-size, 2.4rem);
    height: var(--base-icon-size, 2.4rem);
  }
</style>

