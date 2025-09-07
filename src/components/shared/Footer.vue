<script setup lang="ts"></script>
<template>
  <footer class="landing-footer m-t-120px position-relative z-2 container">
    <div class="landing-footer__left">
      <p class="landing-footer__copyright-text textL">
        Copyright @ {{ new Date().getFullYear() }}
        <router-link to="/" class="footer-template-link"> BentoX </router-link>
      </p>
      <p class="landing-footer__design-text textL">
        Designed By
        <router-link class="textL" to="/"> Pixelaxis </router-link>
      </p>
    </div>
    <ul class="landing-footer__menu">
      <li class="landing-footer__menu-item">
        <router-link class="textL" to="/"> Home </router-link>
      </li>
      <li class="landing-footer__menu-item">
        <router-link class="textL" to="/about-us"> About </router-link>
      </li>
      <li class="landing-footer__menu-item">
        <router-link class="textL" to="/all-projects"> Works </router-link>
      </li>
      <li class="landing-footer__menu-item">
        <router-link class="textL" to="/contact"> Contact </router-link>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped></style>
