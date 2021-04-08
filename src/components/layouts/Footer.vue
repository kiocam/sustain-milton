<template>
  <footer class="footer uk-padding">
    <div class="wrapper uk-grid-large" uk-grid>
      <div>
        <h4>Company</h4>
        <ul class="uk-list">
          <li>
            <router-link to="/about">About us</router-link>
          </li>
          <li>
            <router-link to="/events">Events</router-link>
          </li>
          <li>
            <router-link to="/blogs">Blog / Podcast</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>

      <div>
        <h4>Learn More</h4>
        <ul class="uk-list">
          <li>
            <router-link to="/green-goals">Green Goals</router-link>
          </li>
          <li>
            <router-link to="/meeting">Meeting Calendar</router-link>
          </li>
          <li>
            <router-link to="/resources">Resources</router-link>
          </li>
          <li>
            <router-link to="/Links">Links</router-link>
          </li>
          <li>
            <router-link to="/groups">Sustainability Groups</router-link>
          </li>
        </ul>
      </div>

      <div>
        <h4>Connect With Us</h4>
        <div uk-grid>
          <ul class="uk-list">
            <li>
              <a href="#"><i class="fab fa-facebook fa-2x"></i> Facebook</a>
            </li>
            <li>
              <a href="#"><i class="fab fa-twitter fa-2x"></i> Twitter</a>
            </li>
            <li>
              <a href="#"><i class="fab fa-youtube fa-2x"></i> Youtube</a>
            </li>
          </ul>
          <!--  -->
          <ul class="uk-list">
            <li>
              <a href="#"><i class="fab fa-wordpress fa-2x"></i> Blog</a>
            </li>
            <li>
              <a href="#"><i class="fab fa-linkedin fa-2x"></i> LinkedIn</a>
            </li>
            <li>
              <a href="#"><i class="fab fa-snapchat fa-2x"></i> SnapChat</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="divider uk-margin" />
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss" scoped>
a,
a:link,
a:visited,
a:hover,
a:active {
  color: #fff !important;
}

h4 {
  color: #fff;
}

.divider {
  width: 60%;
  margin: 0 auto;
}
.footer {
  background-color: #273c75;
  .wrapper {
    margin-bottom: 5%;
    width: 50%;
    margin: 0 auto;
  }
}
</style>