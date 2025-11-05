<template>
  <div class="career">
    <div class="career__content">
      <h1 class="career__heading" data-aos="zoom-in"
        >Join a professional team,</h1
      >
      <h1 class="career__heading" data-aos="zoom-in"
        >Unleash your creativity.</h1
      >
      <p class="career__description">
        Become a part of a thriving community of innovators and problem-solvers
        at Incodity. Whether you're starting your career or looking for new
        opportunities, we have a space for you. Explore our current openings and
        join our digital-forward, inclusive and modern tech environment.
      </p>
      <v-btn class="career__btn" color="primary">Learn more</v-btn>
    </div>
    <div class="career__avatars">
      <div class="avatar-container">
        <avatar-1-illustration class="avatar-illustration" />
      </div>
      <div class="avatar-container">
        <avatar-2-illustration class="avatar-illustration" />
      </div>
      <div class="avatar-container">
        <avatar-3-illustration class="avatar-illustration" />
      </div>
      <div class="avatar-container">
        <avatar-4-illustration class="avatar-illustration" />
      </div>
    </div>
  </div>
</template>

<script>
  import avatar1Illustration from "@/assets/illustration/avatar-1.illustration.vue";
  import avatar2Illustration from "@/assets/illustration/avatar-2.illustration.vue";
  import avatar3Illustration from "@/assets/illustration/avatar-3.illustration.vue";
  import avatar4Illustration from "@/assets/illustration/avatar-4.illustration.vue";
  export default {
    components: {
      avatar1Illustration,
      avatar2Illustration,
      avatar3Illustration,
      avatar4Illustration,
    },
  };
</script>

<style lang="scss" scoped>
  .career {
    max-width: 70rem;
    margin: 5rem auto;
    padding: 0 2.4rem;
    z-index: 5;

    &__content {
      @include flex($dir: column, $align: center);
    }

    &__heading {
      @include typography(bold-36);
      text-align: center;
      margin-bottom: 1rem;
      color: var(--color-text-main);

      @include mq(small) {
        @include typography(bold-24);
      }
    }
    &__description {
      @include typography(regular-16);
      text-align: center;
      margin-top: 3rem;
      z-index: 3;
      position: relative;
      @include mq(small) {
        @include typography(regular-12);
      }
    }
    &__btn {
      margin: 2rem auto;
      z-index: 3;
      position: relative;
    }

    &__avatars {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      z-index: 3;
      position: relative;
      .avatar-container {
        height: 15rem;
      }
      .avatar-illustration {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
