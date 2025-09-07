<script setup lang="ts"></script>
<template>
  <div class="contact-style contact-section__right">
    <form>
      <div class="contact-form">
        <div class="two-input-field">
          <div class="single__input">
            <label class="textXL label__style" htmlFor="name"> Name </label>
            <input
              class="input-field-style"
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
            />
          </div>
          <div class="single__input">
            <label class="textXL label__style" htmlFor="email"> Email </label>
            <input
              class="input-field-style"
              id="email"
              type="email"
              placeholder="Your email"
            />
          </div>
        </div>
        <div class="two-input-field">
          <div class="single__input">
            <label class="textXL label__style" htmlFor="phone">
              Phone (Optional)
            </label>
            <input
              class="input-field-style"
              id="phone"
              type="number"
              placeholder="Your phone"
            />
          </div>
          <div class="single__input">
            <label class="textXL label__style" htmlFor="subject">
              Subject
            </label>
            <input
              class="input-field-style"
              id="subject"
              type="text"
              placeholder="Your subject"
            />
          </div>
        </div>
        <div class="single__input">
          <label class="textXL label__style" htmlFor="question">
            Message
          </label>
          <textarea
            class="input-field-style"
            id="question"
            rows="{8}"
            placeholder="Type your message"
            name="message"
          ></textarea>
        </div>
      </div>
      <div class="m-t-40px">
        <button class="see-all-blog">
          <span class="textM post-comment light-theme-white-text">
            Submit Now
          </span>
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
