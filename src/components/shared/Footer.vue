<script setup lang="ts"></script>
<template>
  <footer class="landing-footer m-t-120px position-relative z-2 container">
    <div class="landing-footer__left">
      <p class="landing-footer__copyright-text textL">
        Copyright © {{ new Date().getFullYear() }}
      </p>
    </div>
    <ul class="landing-footer__menu">
      <li class="landing-footer__menu-item">
        <router-link class="textL" :to="{ name: 'home'}"> {{ $t('nav.home') }} </router-link>
      </li>
      <li class="landing-footer__menu-item">
        <router-link class="textL" :to="{ name: 'about-us'}"> {{ $t('nav.about') }} </router-link>
      </li>
      <li class="landing-footer__menu-item">
        <router-link class="textL" :to="{ name: 'projects' }"> {{ $t('nav.works') }} </router-link>
      </li>
      <li class="landing-footer__menu-item">
        <router-link class="textL" :to="{ name: 'contact' }"> {{ $t('nav.contact') }} </router-link>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped></style>
