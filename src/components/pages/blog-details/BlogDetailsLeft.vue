<script setup lang="ts">
import quoteImage from "@/assets/image/quote-down.png";
import CustomTransition from "@/components/shared/CustomTransition.vue";
</script>
<template>
  <div class="blog-details-container__left">
    <div class="date-tag">
      <span class="textL font-thin">December 17,2023</span>
      <span class="textL font-thin tag">No-Code</span>
    </div>
    <h2 class="heading-2 main-title">Aroha&apos;s Client Journey Chronicles</h2>
    <p class="textL font-thin main-title-text">
      Embark a captivating journey through Aroha Agency&apos;s Client
      Chronicles. Explore firsthand accounts of transformative digital
      experiences. From initial concepts to triumphant results discover the
      stories that illuminate our commitment to crafting tailored solutions and
      fostering lasting partnerships.
    </p>
    <div class="quote-box">
      <p class="textXL font-thin">
        Embark on a riveting exploration of Aroha Agency&apos;s Client Journey
        Chronicles. Navigate through diverse industries and witness the
        transformative impact of our tailored solutions.
      </p>

      <img :src="quoteImage" alt="Quote image" class="quote" />
    </div>
    <p class="textL font-thin text-after-quote">
      These stories unfold the essence of collaborative success, illustrating
      our commitment to turning visions into digital realities that resonate and
      endure.
    </p>
    <div class="m-t-60px secondary-blog-details">
      <h3 class="heading-3">Aroha&apos;s Approach to SEO Optimization</h3>
      <p class="textL font-thin secondary-blog-details__text">
        Learn how Aroha Agency navigates the complex world of SEO. We share
        insights into our enhancing online visibility and ensuring our clients
        stand out in the digital crowd.
      </p>
      <ol>
        <li class="textL font-thin">
          It is a long-established fact that a reader will.
        </li>
        <li class="textL font-thin">
          The standard chunk of Lorem Ipsum used since the 1500s.
        </li>
        <li class="textL font-thin">
          It is a long-established fact that a reader will.
        </li>
      </ol>
      <p class="textL font-thin secondary-blog-details__end-text">
        Dive into the world of branding with Aroha Agency. Discover how we
        create unique and memorable brand identities that resonate with
        audiences and stand the test of time.
      </p>
    </div>
    <div class="m-t-60px blog-detail-tags">
      <p class="textL tag-heading">Tags:</p>

      <div class="all-tags">
        <router-link to="#">Development</router-link>
        <router-link to="#">Branding</router-link>
        <router-link to="#">UIX/UI</router-link>
      </div>
    </div>
    <div class="m-t-60px comment-section">
      <h5 class="heading-4">Leave A Comment</h5>
      <form class="comment-section__area">
        <div class="name-and-email">
          <CustomTransition>
            <input type="text" class="name" placeholder="Name" />
          </CustomTransition>
          <CustomTransition>
            <input type="email" class="name" placeholder="Email" />
          </CustomTransition>
        </div>
        <CustomTransition>
          <textarea
            name="txtname"
            :rows="5"
            class="textarea"
            placeholder="Type a comment"
          />
        </CustomTransition>
        <button class="comment-submit">
          <span class="textM post-comment light-theme-white-text">
            Post Comment
          </span>
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
