<template>
  <the-header />
  <div class="layout">
    <main class="layout__main">
      <slot />
    </main>
  </div>
  <the-footer />
</template>

<script setup></script>

<style lang="scss" scoped>
  .layout {
    // width: 80%;
    max-width: 960px;
    margin: 0 auto;
  }
</style>
