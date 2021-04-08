<template>
  <div
    class="slider uk-position-relative uk-visible-toggle uk-light"
    tabindex="-1"
    uk-slideshow
  >
    <ul class="uk-slideshow-items">
      <li v-for="image in imgSrc" :key="image._key">
        <div class="overlay"></div>
        <img :src="imageUrlFor(image.asset._ref)" alt="" uk-cover />
      </li>
    </ul>

    <a
      class="uk-position-center-left uk-position-small uk-hidden-hover"
      href="#"
      uk-slidenav-previous
      uk-slideshow-item="previous"
    ></a>
    <a
      class="uk-position-center-right uk-position-small uk-hidden-hover"
      href="#"
      uk-slidenav-next
      uk-slideshow-item="next"
    ></a>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import sanityClient from "../../sanity.js";
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(sanityClient);
export default Vue.extend({
  props: {
    imgSrc: {
      type: Array,
      required: true,
    },
  },

  methods: {
    imageUrlFor(source: any) {
      return imageBuilder.image(source);
    },
  },
});
</script>


<style lang="scss" scoped>
svg {
  color: white !important;
}
.overlay {
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3); /* Black background with opacity */
  //z-index: 2;
}
</style>