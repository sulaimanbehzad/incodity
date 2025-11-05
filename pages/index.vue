<template>
  <main class="main">
    <home-hero />
    <home-intro />
    <services class="main__services" />
    <contact-us id="contact-us" />
  </main>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .main {
    margin: space(16) auto space(60);
    padding: 0 4.8rem;

    @include mq(small) {
      padding: 0 3.2rem;
    }

    &__services {
      margin-bottom: space(50);
    }

    &__about-us {
      margin-bottom: space(40);
    }
  }
</style>
