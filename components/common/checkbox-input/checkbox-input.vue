<template>
  <div
    class="checkbox"
    :class="{ checkbox_selected: modelValue }"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <div class="checkbox__indicator">
      <base-icon icon-name="check" />
    </div>
  </div>
</template>

<script setup>
  defineProps({
    modelValue: {
      type: Boolean,
      default: false,
    },
  });

  defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
  .checkbox {
    $size: var(--checkbox-btn-size, 2.4rem);
    $color: var(--checkbox-btn-color, #eaeaea);
    $selected-color: var(--checkbox-btn-selected-color, #5a3598);
    $transition-duration: 0.2s;

    width: $size;
    height: $size;
    border-radius: var(--checkbox-btn-radius, 0.5rem);
    border: 0.2rem solid var(--color-background-divider);
    cursor: pointer;
    transition: border-color $transition-duration ease-out;
    overflow: hidden;

    &__indicator {
      @include flex($justify: center, $align: center);
      width: 100%;
      height: 100%;
      background-color: $color;
      line-height: 0;
      transition: transform $transition-duration ease-out;
      transform: scale(0);
    }

    &_selected {
      border-color: $selected-color;
    }

    &_selected &__indicator {
      color: var(--color-text-on-primary);
      background-color: $selected-color;
      transform: scale(1);
    }
  }
</style>

