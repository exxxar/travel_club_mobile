<template>
  <component
    :is="tag"
    :type="tag === 'button' ? nativeType : ''"
    :disabled="disabled || loading"
    @click="handleClick"
    class="tc-button"
    :class="[
      {'tc-button-round': round},
      {'tc-button-icon': icon && !$slots.default},
      // {[`tc-bg-${type}`]: type},
      {[`tc-bg-${bg}`]: bg},
      {[`tc-text-${text}`]: text},
      {[`tc-button-${size}`]: size},
      // {'btn-simple': simple},
      {'tc-button-link': link},
      {'tc-button_disabled': loading || disabled }
    ]">
<!--      (disabled && tag !== 'button')-->
    <slot name="loading">
        <span v-if="loading" class="spinner-border spinner-border-sm" role="status"></span>
    </slot>
      <slot name="icon" v-if="typeof icon != 'boolean'">
          <base-icon v-if="icon && !loading" :name="icon" v-bind="icon_params"></base-icon>
      </slot>
    <slot></slot>
  </component>
</template>
<script>
export default {
  name: "base-button",
  props: {
    tag: {
      type: String,
      default: "button",
      description: "Button html tag"
    },
    round: Boolean,
    // icon: Boolean,
    icon: {
        type: [String, Boolean],
        default: "",
        description: ""
    },
      icon_params: {
    },
    loading: Boolean,
    disabled: Boolean,
    // type: {
    //   type: String,
    //   default: "default",
    //   description: "Button type (primary|secondary|danger etc)"
    // },
    bg: {
      type: String,
      default: "primary",
      description: "Button background (primary|secondary|danger etc)"
    },
    text: {
      type: String,
      default: "",
      description: "Button text color (primary|secondary|danger etc)"
    },
    nativeType: {
      type: String,
      default: "button",
      description: "Button native type (e.g button, input etc)"
    },
    size: {
      type: String,
      default: "",
      description: "Button size (small|lg)"
    },
    // simple: {
    //   type: Boolean,
    //   description: "Whether button is simple (outlined)"
    // },
    link: {
      type: Boolean,
      description: "Whether button is a link (no borders or background)"
    },
  },
    methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>
<style>
</style>
