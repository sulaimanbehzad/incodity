<template>
  <footer class="footer">
    <main class="footer__main">
      <div class="footer__section">
        <img class="footer__logo" src="@/assets/img/logo-light.png" />
        <p class="footer__company">© Incodity 2023 </p>
        <p class="social__desc"
          >You can find us at Virginia, USA. Whether you're in the neighborhood
          or want to arrange a meeting, we'd love to see you.</p
        >
      </div>
      <div class="footer__section">
        <h4 class="footer__title">Section</h4>
        <ul class="footer__list">
          <li>Home</li>
          <li>Services</li>
          <li>About us</li>
          <li>Career</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div class="footer__section social">
        <div class="footer__desc">
          <h4 class="footer__title">Email</h4>
          <p
            >We're just an email away. Send your inquiries, feedback, or project
            details to info@devfusionlab.com and we'll respond promptly.</p
          >
        </div>
        <div class="footer__desc">
          <h4 class="footer__title">Phone Number</h4>
          <p
            >Prefer a phone conversation? Give us a call at 202-875-3650. We're
            here to answer your questions and discuss your projects.</p
          >
        </div>

        <div class="footer__desc">
          <h4 class="footer__title">Social Media</h4>
          <p class="social__desc"
            >Stay connected with us on social media. Follow our accounts for the
            latest updates, industry news, and insights from our team. We love
            engaging with our community, sharing ideas, and hearing from you.</p
          >
          <footer-illustration class="social__illustration" />
        </div>
      </div>
    </main>
  </footer>
</template>

<script>
  import footerIllustration from "@/assets/illustration/footer.illustration.vue";
  export default {
    components: {
      footerIllustration,
    },
  };
</script>

<style lang="scss" scoped>
  .footer {
    padding: space(20) 0;
    background: var(--color-palette-primary);
    color: var(--color-text-gray-default);
    overflow: hidden;
    z-index: 5;
    position: relative;
    &__main {
      width: 80%;
      margin: auto;

      @include flex();
      gap: 3rem;

      @include mq(large) {
        width: 90%;
      }
      @include mq(medium) {
        width: 95%;
      }
      @include mq(small) {
        gap: 1rem;
        flex-wrap: wrap;
      }
    }

    &__section {
      // flex: 1;
      min-width: 20rem;
      @include mq(small) {
        min-width: 15rem;
      }
    }

    .social {
      min-width: 40%;
      @include mq(small) {
        min-width: 60%;
      }
    }

    &__logo {
      height: 7rem;
      margin-bottom: 3rem;
    }

    &__company {
      @include typography(bold-14);
      margin-bottom: 2rem;
    }
    &__title {
      @include typography(bold-16);
      color: var(--color-text-on-primary);
    }

    &__list {
      margin-top: 1rem;
      > li {
        @include typography(regular-14);
        cursor: pointer;
        margin-bottom: 0.8rem;
        &:hover {
          color: var(--color-text-on-primary);
        }
      }
    }

    &__desc {
      margin-bottom: 1.5rem;
      position: relative;
    }
    .social__illustration {
      width: 15rem;
      height: 13rem;
      position: absolute;
      top: -4rem;
      right: -8rem;
      @include mq(large) {
        right: 0;
        width: 10rem;
        top: 0;
      }
      @include mq(medium) {
        display: none;
      }
    }

    .social__desc {
      width: 75%;
    }
  }
</style>
