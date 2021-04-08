<template>
  <div>
    <!-- Hero/ slider section -->
    <Slider :imgSrc="gallery"></Slider>

    <div class="cta-container uk-padding">
      <!-- Cta text -->
      <div class="cta" v-html="cta"></div>

      <!-- Summary/ Slogan Text -->
      <div class="summary" v-html="summary"></div>

      <!-- Cta Button -->
      <Button
        :classes="[`cta-btn uk-button uk-button-primary`]"
        value="Join Now"
      ></Button>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import sanityClient from "../sanity.js";
import Slider from "../components/ui/default-slider.vue";
import Button from "../components/ui/default-button.vue";

const query = `*[_type == 'homePage' ] {
  _id,
  cta,
  summary,
  image,
  imagesGallery,
  content
}`;

export default Vue.extend({
  name: "Home",
  components: {
    Slider,
    Button,
  },

  data() {
    return {
      gallery: [],
      cta: "",
      summary: "",
      content: "",
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      sanityClient.fetch(query).then((res) => {
        console.log(res[0]);
        this.gallery = res[0].imagesGallery;
        console.log(this.gallery);
        this.cta = res[0].cta;
        this.summary = res[0].summary;
        this.content = res[0].content;
      });
    },
  },
});
</script>


<style lang="scss" >
// overides

.cta-container {
  position: absolute;
  top: 43vh;
  left: 29%;
  display: flex;
  flex-direction: column;
  text-align: center;
  z-index: 4;
  //border: 1px solid red;
}

.summary,
.cta {
  font-size: 4em;
  font-weight: bolder;
  display: inline;
  color: white;
  width: 100%;
  margin-bottom: 5%;
}

.summary {
  top: 58vh;
  font-size: 2.5em;
  font-weight: normal;
}

.cta-btn {
  background-color: #2ecc71;
}
</style>