<template>
  <!-- FIXME: Refactor the whole component -->
  <div class="select">
    <v-select
      class="select__input"
      v-model="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :error-messages="errorMessage"
      :label="label"
      :variant="variant"
      density="compact"
      hide-details
      v-bind="$attrs"
    ></v-select>
  </div>
</template>

<script setup>
  import { useField } from "vee-validate";
  import { ref, computed } from "vue";

  const emits = defineEmits(["update:modelValue"]);

  const props = defineProps({
    modelValue: {
      type: [String, Number],
      required: false,
      default: "",
    },
    rules: {
      type: [String, Object],
      required: false,
    },
    placeholder: {
      type: String,
      default: " ",
    },
    label: {
      type: String,
      required: false,
    },
    variant: {
      type: String,
      required: false,
      default: "outlined",
    },
    name: {
      type: String,
      required: false,
      default: (props) => props.label || "input",
    },
    readonly: {
      type: Boolean,
      required: false,
      default: false,
    },
    clearable: {
      type: Boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  });

  const fieldOptions = { initialValue: props.modelValue };
  const {
    value: inputValue,
    setValue: setInputValue,
    errorMessage,
  } = useField(props.name, props.rules, fieldOptions);

  const modelValue = computed({
    get() {
      const value = props.modelValue;

      // const hasModelValue = value !== undefined;
      // const hasValueChanged = inputValue.value !== value;
      // if (hasModelValue && hasValueChanged) setInputValue(value);
      return value;
    },
    set(value) {
      setInputValue(value);

      emits("update:modelValue", value);
    },
  });
  // defineOptions({
  //   inheritAttrs: false,
  // });
</script>

<style lang="scss" scoped>
  .select {
    &__input {
      // height: 30px;
      ::v-deep {
        .v-field {
          border-radius: 0.8rem;
        }
      }
    }
    .v-input {
    }
  }
</style>
