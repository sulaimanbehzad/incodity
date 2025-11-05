<template>
  <button
    :disabled="isDisabled || isLoading"
    :type="type"
    @click="preventClickAction"
    :class="['button', ...buttonClassModifiers]"
  >
    <div class="button__loading loading" v-if="isLoading">
      <span class="loading__wave" v-for="number in 5" :key="number" />
    </div>

    <div class="button__content" v-else>
      <!-- <icon-loader
        :name="prependInnerIcon"
        v-if="prependInnerIcon"
        width="24"
        height="24"
        class="button__icon"
      /> -->
      <p class="button__text">
        <slot>
          {{ text }}
        </slot>
      </p>
      <!-- <icon-loader
        :name="appendInnerIcon"
        v-if="appendInnerIcon"
        width="24"
        height="24"
        class="button__icon"
      /> -->
    </div>
  </button>
</template>

<script>
  import { computed } from "vue";

  export default {
    props: {
      variant: {
        type: String,
        required: false,
        default: "filled",
        validator(value) {
          return ["filled", "outline", "text"].includes(value);
        },
      },
      isLoading: {
        type: Boolean,
        required: false,
        default: false,
      },
      isDisabled: {
        type: Boolean,
        required: false,
        default: false,
      },
      prependInnerIcon: {
        type: String,
        required: false,
      },
      appendInnerIcon: {
        type: String,
        required: false,
      },
      text: {
        type: String,
        required: false,
        default: "",
      },
      type: {
        type: String,
        required: false,
        default: "button",
      },
    },

    setup(props) {
      const buttonClassConditionMapper = computed(() => [
        { condition: props.isDisabled, modifier: "--disabled" },
        { condition: props.variant, modifier: `--${props.variant}` },
      ]);
      const buttonClassModifiers = useClassModifier(
        "button",
        buttonClassConditionMapper,
      );

      const preventClickAction = (event) => {
        if (props.isDisabled || props.isLoading) event.preventDefault();
      };
      return { buttonClassModifiers, preventClickAction, props };
    },
  };
</script>

<style lang="scss" scoped>
  $root: "button";

  .#{$root} {
    @include flex(row, nowrap, center, center);
    @include typography(regular-14);

    --btn-bg-color: #2657a4;
    --btn-bg-active-color: var(--color-palette-primary-700);
    --btn-text-active-color: #fff;
    --btn-text-color: #fff;
    --btn-padding: 1.2rem;
    --btn-height: 3rem;
    --btn-content-gap: 1.2rem;

    padding: var(--btn-padding);
    height: var(--btn-height);
    min-width: 6.4rem;

    cursor: pointer;
    transition: color 0.3s ease-out, background-color 0.3s ease-out;
    color: var(--btn-text-color);
    border-radius: var(--base-btn-radius, 0.5rem);

    position: relative;

    &--filled {
      background-color: var(--btn-bg-color);
      color: var(--btn-text-color);

      &:active,
      &:hover {
        &:not(.#{$root}--disabled) {
          background-color: var(--btn-bg-active-color);
          color: var(--btn-text-active-color);
        }
      }
    }

    &--outline {
      background-color: transparent;
      border: var(--btn-bg-color) 2px solid;

      &:active,
      &:hover {
        &:not(.#{$root}--disabled) {
          border-color: var(--btn-text-active-color);
        }
      }
    }

    &--text {
      background-color: transparent;

      &:active,
      &:hover {
        position: relative;

        &:after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: inherit;
          display: block;
          background-color: var(--btn-text-color);
          opacity: 0.1;
        }
      }
    }

    &--disabled:not(.#{$root}--text) {
      cursor: default;
      opacity: 0.2;
    }

    &__content {
      @include flex(row, nowrap, center, center);
      padding: 0;
      gap: var(--btn-content-gap);
    }

    &__text,
    &__icon {
      color: inherit !important;
    }
  }

  .loading {
    @include flex(row, nowrap, center, center);
    height: 2rem;

    &__wave {
      width: 0.3rem;
      height: 2px;
      border-radius: 4.8rem;
      margin-right: space(1);

      background-color: var(--btn-text-color);
      animation: loading 2s linear infinite;

      @for $number from 1 to 5 {
        &:nth-child(#{$number}) {
          animation-delay: calc($number / 10 * 1s);
        }
      }
    }
  }

  @keyframes loading {
    0% {
      height: 2px;
    }

    25% {
      height: 0.4rem;
    }

    50% {
      height: 1.6rem;
    }

    100% {
      height: 0;
    }
  }
</style>

