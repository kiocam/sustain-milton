<template>
  <div>
    <button :style="styles" :class="classes" v-html="value"></button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    value: {
      type: String,
      default: "Button",
      required: true,
    },

    classes: {
      type: Array,
      default: () => {
        [];
      },
    },

    styles: {
      type: Array,
      default: () => [],
    },
  },
});
</script>