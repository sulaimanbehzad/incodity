<template>
  <section class="contact-us">
    <div class="contact-us__main main">
      <base-icon class="main__thumbnail" icon-name="product-contact" />
      <h3 class="main__title"> Contact Us </h3>
      <p class="main__desc">
        Ready to get in touch? Fill out our contact form with your details and
        we'll get back to you as soon as possible.
      </p>
      <form class="main__form">
        <v-text-field
          label="Email"
          variant="solo-filled"
          flat
          hide-details
          rounded="lg"
        />
        <v-textarea
          class="main__description"
          height="90"
          label="Description"
          variant="solo-filled"
          flat
          hide-details
          no-resize
          rounded="lg"
        />
        <v-btn
          color="primary"
          class="main__submit-btn"
          size="large"
          block
          flat
          rounded
        >
          Submit
        </v-btn>
      </form>
    </div>
    <div class="contact-us__cover cover">
      <connected-world-illustration class="cover__thumbnail" />
    </div>
  </section>
</template>

<script setup>
  import ConnectedWorldIllustration from "@/assets/illustration/connected-world.illustration.vue";
</script>

<style lang="scss" scoped>
  .contact-us {
    @include flex($align: stretch);
    border-radius: $border-radius-8x;
    overflow: hidden;
    border: 2px solid var(--color-background-divider);

    &__main {
      width: 60%;
    }

    &__cover {
      width: 40%;
    }
  }

  .main {
    padding: space(16);

    &__thumbnail {
      --base-icon-size: 6.4rem;
      // FIXME: use design system colors
      color: #3f51b5;
      background-color: #e8eaf6;
      padding: 1.2rem;
      border-radius: $border-radius-8x;
      margin-bottom: space(12);
    }

    &__title {
      @include typography(bold-24);
    }

    &__desc {
      @include typography(regular-14);
      margin-top: space(4);
    }

    &__form {
      margin: space(16) 0 space(6);
    }

    &__description {
      margin-top: space(6);
    }

    &__submit-btn {
      margin-top: space(14);
    }
  }

  .cover {
    @include flex($align: center, $justify: center);
    // FIXME: use design system colors
    background-color: #9fa8da;
    padding: space(24) space(18);

    &__thumbnail {
      width: 100%;
    }
  }

  @include mq(medium) {
    .cover {
      display: none !important;
    }

    .main {
      width: 100%;
    }
  }
</style>

