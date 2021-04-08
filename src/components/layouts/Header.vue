<template>
  <header class="header">
    <nav class="navbar uk-navbar-container uk-padding-small" uk-navbar>
      <div class="logo uk-navbar-left">
        <router-link to="/">
          <img alt="Vue logo" src="../../assets/SM_LOGO-02.png"
        /></router-link>
      </div>

      <div class="uk-navbar-center">
        <ul class="uk-navbar-nav">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About us</router-link>
          </li>
          <li>
            <router-link to="/events">Events</router-link>
          </li>
          <li>
            <router-link to="/green-goals">Green Goals</router-link>
          </li>
          <li>
            <router-link to="/news">News</router-link>
          </li>
          <li>
            <router-link to="/blogs">Blog / Podcast</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
          <li>
            <router-link to="/involved">Get Involved</router-link>
          </li>
          <li>
            <router-link to="/resources">Resources</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss" scoped>
.logo {
  width: 300px;
}
.navbar {
  background-color: #fff;
}
</style>