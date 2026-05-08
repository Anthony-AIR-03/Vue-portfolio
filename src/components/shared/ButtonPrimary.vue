<template>
    <router-link
      :to="{ name: 'about-us' }"
      class="button-primary text-center justify-content-center gap-2 d-inline-flex align-items-center"
    >
      <p class="n0-color textM primary-button-text">{{ $t("bioCard.buttonText") }}</p>
    </router-link>
</template>

<style scoped>
.button-primary {
  padding: 12px;
  background: var(--secondary-color);
  border-radius: 8px;
  font-weight: 500;
  line-height: 150%;
  width: fit-content;
  color: var(--white-neutral1);
  transition: all 0.3s ease-in-out;
  margin-top: 32px;
  align-self: center;
}

@media (max-width: 992px) {
  .button-primary {
    padding: 10px 20px;
  }
}

@media (max-width: 768px) {
  .button-primary {
    padding: 8px 16px;
  }
}

.button-primary {
  transition: all 0.4s;
}

.button-primary .primary-button-icon {
  font-size: 0px;
  transition: all 0.4s;
}

.button-primary .primary-button-text {
  color: #fff;
}

.button-primary:hover .primary-button-icon {
  transition: all 0.4s;
  font-size: 24px;
  color: #fff;
}

[theme="custom-light"] .button-primary:hover {
  background: var(--secondary-color);
  color: var(--white-neutral1);
}
</style>
