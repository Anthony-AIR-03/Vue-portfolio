<script setup lang="ts">
import CustomTransition from "@/components/shared/CustomTransition.vue";
import type { Project } from "@/assets/data/projectsData";

defineProps<{ project: Project }>();

const sites = [
  {
    name: "Smokies",
    detail:
      "A burger restaurant's site — data-driven menu (a JSON menu feed builds the page, not hand-written HTML per item), an image carousel, an about page, and a PHPMailer-backed contact form.",
    credit: "Built together",
  },
  {
    name: "Steigers",
    detail: "A scaffolding company's client-intake questionnaire site.",
    credit: "Built by the partnership's other developer",
  },
];
</script>
<template>
  <CustomTransition>
    <article class="card-style-two project-details p-32px">
      <header class="project-details__banner">
        <img :src="project.image" :alt="`${project.title} banner`" class="img-fluid" />
        <h1 class="heading-2">{{ project.title }}</h1>
        <p class="textL">{{ project.description }}</p>
      </header>

      <ul v-if="project.tags?.length" class="project-tags" aria-label="Tech stack">
        <li v-for="tag in project.tags" :key="tag" class="project-tags__item">
          {{ tag }}
        </li>
      </ul>

      <section class="project-sites" aria-label="Sites built">
        <h2 class="heading-3">Sites</h2>
        <p class="textL project-sites__note">
          Credit split honestly below — this was a two-person partnership, not solo work.
        </p>
        <ul class="project-sites__list">
          <li v-for="site in sites" :key="site.name" class="project-sites__item">
            <strong>{{ site.name }}</strong>
            <p class="textL project-sites__detail">{{ site.detail }}</p>
            <span class="project-sites__credit">{{ site.credit }}</span>
          </li>
        </ul>
      </section>

      <nav v-if="project.links?.length" class="project-links" aria-label="Project links">
        <a
          v-for="link in project.links"
          :key="link.href"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="project-links__item"
        >
          {{ link.label }}
        </a>
      </nav>
    </article>
  </CustomTransition>
</template>

<style scoped>
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.project-tags__item {
  padding: 8px 16px;
  border-radius: 100px;
  border: 1px solid var(--black-neutral3);
  color: var(--white-neutral1);
  font-size: 13px;
  font-weight: 500;
}

.project-sites {
  border-radius: 32px;
  border: 1px solid var(--black-neutral2);
  padding: 23px;
}

.project-sites__note {
  opacity: 0.7;
  padding-top: 8px;
}

.project-sites__list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  list-style: none;
  padding: 0;
}

.project-sites__item {
  border-top: 1px solid var(--black-neutral2);
  padding-top: 16px;
}

.project-sites__item:first-child {
  border-top: none;
  padding-top: 0;
}

.project-sites__detail {
  opacity: 0.7;
  padding-top: 6px;
}

.project-sites__credit {
  display: inline-block;
  margin-top: 8px;
  font-size: 12px;
  font-weight: 600;
  color: var(--secondary-color);
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.project-links__item {
  color: var(--secondary-color);
  font-weight: 500;
  text-decoration: underline;
}
</style>
