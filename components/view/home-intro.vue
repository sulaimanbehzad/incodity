<template>
  <div class="intro" id="intro">
    <h1 class="intro__heading">What We Offer </h1>
    <div class="intro__section main-section" data-aos="fade-left">
      <user-office-illustration class="intro__illustration-top" />

      <h2 class="intro__title">Key Services</h2>
      <p class="intro__description">
        We craft software solutions that drive success for your business.
        Whether you need comprehensive development, bespoke solution design, or
        robust testing, our experienced team is here to help.
      </p>
    </div>
    <div class="intro__section-container">
      <div class="intro__section" data-aos="fade-right">
        <h2 class="intro__title">Client Success Snippets </h2>
        <p class="intro__description"
          >Our success is measured by our clients' achievements. Discover how
          our tailored solutions have helped businesses reach new heights.
        </p>
        <div class="section-illustration">
          <client-success-illustration />
        </div>
      </div>
      <div class="intro__section" data-aos="fade-left">
        <h2 class="intro__title">Empower Your Business with Technology </h2>
        <p class="intro__description"
          >Ready to take your business to the next level? Get in touch with us
          today. Let's collaborate to create technological solutions that drive
          growth, efficiency, and success.
        </p>
        <div class="section-illustration">
          <call-to-action-illustration />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import callToActionIllustration from "@/assets/illustration/call-to-action.illustration.vue";
  import clientSuccessIllustration from "@/assets/illustration/client-success.illustration.vue";
  import userOfficeIllustration from "@/assets/illustration/user-office.illustration.vue";
  export default {
    components: {
      callToActionIllustration,
      clientSuccessIllustration,
      userOfficeIllustration,
    },
  };
</script>

<style lang="scss" scoped>
  .intro {
    margin-block: 5rem 10rem;

    &__section-container {
      @include flex($wrap: wrap, $align: stretch);
      gap: space(10);

      @include mq(medium) {
        flex-direction: column
      }
    }
    &__heading {
      @include typography(bold-36);
      text-align: center;
      margin-bottom: space(20);
      color: var(--color-text-main);
    }

    &__section {
      background-color: var(--color-background-secondary);
      padding: space(20) 0 space(5) space(20);
      border-radius: $border-radius-4x;
      position: relative;
      flex: 1;
      border: 0.1rem solid var(--color-background-divider);
      @include flex($dir: column);
      &.main-section {
        width: 100%;
        margin-bottom: space(10);
        padding-bottom: space(10);
        .intro__description {
          max-width: 70%;
        }
      }

      .section-illustration {
        width: 60%;
        height: 20rem;

        position: relative;
        margin-left: auto;
        margin-top: space(10);

        > svg {
          width: 100%;
          height: 100%;
        }
      }
    }

    &__title {
      @include typography(bold-20);
      margin-bottom: space(5);
    }
    &__description {
      @include typography(regular-16);
      max-width: 90%;
    }

    &__illustration-top {
      position: absolute;
      width: 20rem;
      top: -110px;
      left: -50px;
    }

    @include mq(medium) {
      &__heading {
        margin-bottom: space(60);
      }
    }
  }
</style>

