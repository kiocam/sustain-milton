<template>
  <div id="app" class="uk-container-expand">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./components/layouts/Header.vue";
import Footer from "./components/layouts/Footer.vue";

export default Vue.extend({
  components: {
    Header,
    Footer,
  },
});
</script>

<style lang="scss">
</style>
