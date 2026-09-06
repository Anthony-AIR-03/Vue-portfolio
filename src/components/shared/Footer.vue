<script setup lang="ts"></script>
<template>
  <footer class="landing-footer m-t-120px position-relative z-2 container">
    <div class="landing-footer__left">
      <p class="landing-footer__copyright-text textL">
        Copyright @ {{ new Date().getFullYear() }}
      </p>
    </div>
    <ul class="landing-footer__menu">
      <li class="landing-footer__menu-item">
        <router-link class="textL" :to="{ name: 'home'}"> Home </router-link>
      </li>
      <li class="landing-footer__menu-item">
        <router-link class="textL" :to="{ name: 'about-us'}"> About </router-link>
      </li>
      <li class="landing-footer__menu-item">
        <router-link class="textL" :to="{ name: 'projects' }"> Works </router-link>
      </li>
      <li class="landing-footer__menu-item">
        <router-link class="textL" :to="{ name: 'contact' }"> Contact </router-link>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped></style>
