<template>
  <div class="main">
    <career class="career-main" />
    <careerIllustration class="career-illustration" />
    <!-- <contact-us  /> -->
  </div>
</template>

<script>
  import careerIllustration from "assets/illustration/career.illustration.vue";
  export default {
    components: {
      careerIllustration,
    },
  };
</script>

<style lang="scss" scoped>
  .main {
    margin: 3.2rem auto;
    padding: 10rem;
    // position: relative;

    
    @include mq(medium) {
      // min-width: 15rem;
      padding: 10rem 3rem;
    }
  }
  .career-main {
    z-index: 3;

  }
  .career-illustration {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    top: 30%;
    color: #c2efb3;
    opacity: 0.8;
  }
</style>
