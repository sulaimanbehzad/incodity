<template>
  <div class="main">
    <heroPathIllustration />

    <about-us />
  </div>
</template>

<script>
  import heroPathIllustration from "@/assets/illustration/hero-1.illustration.vue";

  export default {
    components: {
      heroPathIllustration,
    },
  };
</script>

<style lang="scss" scoped>
  .main {
    margin: 3.2rem auto;
    padding: 10rem;

    @include mq(medium) {
      // min-width: 15rem;
      padding: 10rem 3rem;
    }
  }

  .illustration-line {
    position: absolute;
    top: 6.6rem;
    width: 100%;
    left: 0;
    opacity: 0.5;
    color: #3c493f;
  }
</style>
