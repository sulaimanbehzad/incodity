<template>
  <header class="header" :class="{ scrolled: isPageScrolled }">
    <div class="header__main">
      <nuxt-link class="header__logo-container" to="/">
        <img
          class="header__logo"
          src="~\assets\img\logo.png"
          alt="Incodity logo"
        />
      </nuxt-link>
      <div class="header__links">
        <nuxt-link
          v-for="(item, index) in navigationLinks"
          :key="index"
          class="header__link"
          :to="item.to"
        >
          {{ item.label }}
        </nuxt-link>
      </div>
      <div>
        <v-btn class="header__btn" variant="plain" to="/#contact-us"
          >Contact us</v-btn
        >
        <base-icon
          class="header__menu-icon"
          icon-name="menu"
          @click="drawer = !drawer"
        />
      </div>
    </div>
  </header>
  <v-layout class="header__menu"
    ><v-navigation-drawer v-model="drawer" :scrim="false" sticky>
      <v-list density="compact" nav>
        <v-list-item title="Home" @click="menuItemClicked('/')"> </v-list-item>
        <v-list-item
          v-for="(item, index) in navigationLinks"
          :key="index"
          :title="item.label"
          :value="item.to"
          @click="menuItemClicked(item.to)"
        >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script setup>
  const { onScroll, cleanup } = usePageScroll();

  const drawer = ref(null);

  const navigationLinks = [
    {
      label: "What We Offer",
      to: "/#intro",
    },
    {
      label: "Services",
      to: "/#services",
    },
    {
      label: "About us",
      to: "/about-us",
    },
    {
      label: "Career",
      to: "/career",
    },
  ];

  const isPageScrolled = ref(true);
  const setIsPageScrolled = () => {
    if (window.scrollY > 0 && !isPageScrolled.value) {
      return (isPageScrolled.value = true);
    }

    if (window.scrollY < 1 && isPageScrolled.value) {
      isPageScrolled.value = false;
    }
  };
  onMounted(() => {
    setIsPageScrolled();
    onScroll(setIsPageScrolled);
  });

  onDeactivated(cleanup);

  const router = useRouter();
  const menuItemClicked = (to) => {
    router.push(`${to}`);
    drawer.value = false;
  };
</script>

<style lang="scss" scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 6.6rem;
    border-bottom: 1px solid transparent;
    z-index: 100;
    border-bottom: 1px solid rgba(67, 67, 67, 0.15);

    &.scrolled {
      background: hsla(0, 0%, 100%, 0.9);
    }
    &__main {
      width: 90%;
      height: 100%;
      margin-inline: auto;
      @include flex($align: center);
    }

    &__logo-container {
      @include flex($align: center);
      margin-right: 3rem;
      gap: 0.5rem;
      .logo-text {
        @include typography(bold-18);
        @include mq(small) {
          display: none;
        }
      }
    }

    &__logo {
      height: clamp(10rem, 12vw, 12rem);
      width: auto;
      object-fit: contain;
      display: block;
    }

    &__links {
      @include flex($align: center);
      gap: space(10);
      flex: 1;
    }

    &__link {
      @include typography(semi-bold-14);
      padding: space(5) 0;
      border-bottom: 2px solid transparent;
      cursor: pointer;
      @include mq(large) {
        display: none;
      }
      &:hover {
        border-color: var(--color-text-main);
      }
    }

    &__btn {
      @include mq(large) {
        display: none;
      }
    }

    &__menu-icon {
      width: 4rem;
      height: 4rem;
      cursor: pointer;
      display: none;
      @include mq(large) {
        display: block;
      }
    }

    &__menu {
      display: none;
      @include mq(large) {
        display: block;
      }
    }
  }
</style>
