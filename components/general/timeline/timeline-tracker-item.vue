<template>
  <div class="tracker-item">
    <div class="tracker-item__tracker tracker">
      <div class="tracker__thumbnail">
        <base-icon :icon-name="iconName" />
      </div>
      <div v-if="trackerLine" class="tracker__line"></div>
    </div>
    <div class="tracker-item__content">
      <slot name="after" />
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    trackerLine: {
      type: Boolean,
      default: true,
    },
    iconName: {
      type: String,
      default: "check",
    },
  });
</script>

<style lang="scss" scoped>
  .tracker-item {
    @include flex;

    &__tracker {
      align-self: stretch;
      flex-shrink: 0;
    }

    &__content {
      margin-bottom: var(--timeline-item-margin, 4.8rem);
      margin-left: 3.2rem;
    }
  }

  .tracker {
    $strokeWidth: 0.3rem;

    &__thumbnail {
      --base-icon-size: 3.2rem;
      color: var(--color-palette-primary);
      border: $strokeWidth solid var(--color-palette-primary);
      line-height: 0;
      border-radius: $border-radius-6x;
      padding: 0.8rem;
      position: relative;
      background-color: var(--color-background-main);

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: var(--color-palette-primary);
        border-radius: $border-radius-4x;
        top: -15%;
        left: -10%;
        transform: rotate(-20deg);
        z-index: -1;
      }
    }

    &__line {
      width: $strokeWidth;
      margin: 0 auto;
      height: 100%;
      min-height: 50px;
      background-color: var(--color-palette-primary);
    }
  }
</style>

