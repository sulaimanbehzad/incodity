<template>
  <div class="hero">
    <div class="hero__main">
      <div class="hero__content">
        <h1 class="hero__heading typed-out">Your All-in-One</h1>

        <div class="hero__heading-animated">
          <h1 class="hero__heading typed-out">Tech Partner</h1>
          <div class="line">
            <div></div>
            <line-path class="line-path" />
          </div>
        </div>

        <p class="hero__desc">
          We help small businesses grow with custom software, AI-integrated
          applications, and websites, combined with branding and SEO strategies
          that boost visibility and generate leads.
        </p>
      </div>

      <v-btn color="primary" size="large" rounded>Take the Next Step</v-btn>
    </div>

    <heroPathIllustration />
    <hero2Illustration data-aos="fade-right" class="illustration-left" />
    <hero3Illustration data-aos="fade-left" class="illustration-right" />
  </div>
</template>

<script>
  import HomeHeroIllustration from "@/assets/illustration/home-hero.illustration.vue";
  import heroPathIllustration from "@/assets/illustration/hero-1.illustration.vue";
  import hero2Illustration from "@/assets/illustration/hero-2.illustration.vue";
  import hero3Illustration from "@/assets/illustration/hero-3.illustration.vue";
  import linePath from "@/assets/svg/line-path.vue";

  export default {
    components: {
      HomeHeroIllustration,
      heroPathIllustration,
      hero2Illustration,
      hero3Illustration,
      linePath,
    },
  };
</script>

<style lang="scss" scoped>
  .hero {
    padding: space(20) space(25);
    height: 100vh;

    @include mq(large) {
      padding: space(20) 0;
    }

    &__main {
      @include flex($dir: column, $align: center, $justify: center);
      position: relative;
      z-index: 5;
      height: 100%;
      margin-bottom: 2rem;
    }

    &__content {
      margin-bottom: 3rem;
      max-width: 70rem;
      @include flex($dir: column, $align: center, $justify: center);
    }

    /* Main hero headings */
    &__heading {
      @include typography(bold-48);
      text-align: center;
      font-size: 3rem !important;
      margin-bottom: 2rem;
      color: var(--color-text-main);
      z-index: 5;

      /* IMPORTANT: allow wrapping */
      word-break: break-word;
      max-width: 100%;
      white-space: normal;

      @include mq(large) {
        @include typography(bold-36);
      }
    }

    /* Animated heading section */
    &__heading-animated {
      position: relative;
      margin-bottom: 2rem;
      z-index: 5;

      .typed-out {
        overflow: hidden;
        border-right: 0.3rem solid var(--color-text-main);
        white-space: nowrap; /* typing effect on desktop */
        padding-right: space(2);
        animation: typing 1.5s steps(50, end) forwards, border-blink 1s infinite;
        height: 6rem;
        margin-bottom: 0;
        max-width: 100%;

        @include mq(large) {
          height: 4rem;
        }
      }

      .line {
        position: relative;

        > div {
          position: absolute;
          background: white;
          inset: 0;
          width: 100%;
          z-index: 1;
          animation: lineDraw 0.4s 2s forwards;
        }
      }

      .line-path {
        width: 100%;
        color: #3c493f;
      }
    }

    /* Typography animations */
    @keyframes lineDraw {
      from {
        width: 100%;
      }
      to {
        width: 0%;
      }
    }

    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }

    @keyframes border-blink {
      0%,
      100% {
        border-color: var(--color-text-main);
      }
      50% {
        border-color: transparent;
      }
    }

    /* Description */
    &__desc {
      @include typography(semi-bold-18);
      text-align: center;
      margin-top: 2rem;
      max-width: 60rem;

      @include mq(large) {
        @include typography(semi-bold-16);
      }
      @include mq(small) {
        @include typography(semi-bold-12);
      }
    }

    /* Illustrations */
    &__illustration {
      max-width: 50rem;
      height: 30rem;
    }

    &__btn {
      margin-bottom: 2rem;
    }
  }

  /* Left illustration */
  .illustration-left {
    position: absolute;
    width: 40rem;
    left: 0;
    bottom: 10%;

    @include mq(x-large) {
      width: 30rem;
    }
    @include mq(large) {
      width: 20rem;
    }
    @include mq(medium) {
      display: none;
    }
  }

  /* Right illustration */
  .illustration-right {
    position: absolute;
    width: 35rem;
    height: 35rem;
    right: 0;
    bottom: 0;

    @include mq(large) {
      width: 20rem;
    }
    @include mq(medium) {
      display: none;
    }
  }

  /* Line decoration */
  .illustration-line {
    position: absolute;
    top: 6.6rem;
    width: 100%;
    left: 0;
    opacity: 0.23;
    color: #e3b505;
  }

  /* ======================= */
  /*     MOBILE FIXES        */
  /* ======================= */
  @include mq(small) {
    /* Disable typing effect on mobile */
    .hero__heading-animated .typed-out {
      white-space: normal !important;
      border-right: none !important;
      animation: none !important;
      height: auto !important;
      font-size: 1.8rem !important;
      text-align: center;
    }

    /* Scale non-animated heading */
    .hero__heading {
      font-size: 2rem !important;
    }
  }
</style>

