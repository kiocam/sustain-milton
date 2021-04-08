<template>
  <div class="uk-text-large" v-html="content"></div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    content: {
      type: String,
      required: true,
      default:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  },
});
</script>