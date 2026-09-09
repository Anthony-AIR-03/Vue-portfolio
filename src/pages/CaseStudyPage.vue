<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { marked } from "marked";
import { projectsData, localize } from "@/assets/data/projectsData";
import {
  findCaseStudy,
  getCaseStudyMarkdown,
  caseStudyHasLocale,
} from "@/components/pages/projects/custom/caseStudies";
import LinkBackHome from "@/components/shared/LinkBackHome.vue";
import AfterEffect from "@/components/shared/AfterEffect.vue";

const route = useRoute();
const router = useRouter();
const { t, locale } = useI18n();

const meta = computed(() => findCaseStudy(route.params.module, route.params.slug));
const project = computed(() =>
  projectsData.find((p) => p.slug === route.params.slug)
);

if (!meta.value || !project.value) {
  router.replace("/not-found");
}

const moduleId = computed(() => String(route.params.module));

const html = computed(() => {
  const md = getCaseStudyMarkdown(moduleId.value, locale.value);
  if (!md) return "";
  return marked.parse(md, { async: false, gfm: true });
});

const showEnglishFallbackNote = computed(
  () => locale.value !== "en" && !caseStudyHasLocale(moduleId.value, locale.value)
);
</script>

<template>
  <div v-if="meta && project" class="container case-study">
    <LinkBackHome
      :to="{ name: 'project-detail', params: { slug: project.slug } }"
      :label="t('projects.caseStudy.backToProject', { project: localize(project.title) })"
      class="back-link"
    />
    <article class="card-style-two case-study__card p-32px">
      <p v-if="showEnglishFallbackNote" class="case-study__lang-note">
        {{ t("projects.caseStudy.englishOnly") }}
      </p>
      <!-- Content is first-party Markdown authored in src/assets/case-studies/, not user input. -->
      <div class="case-study__prose" v-html="html" />
    </article>
  </div>
  <AfterEffect />
</template>

<style scoped>
.back-link {
  margin-bottom: 30px;
}

.case-study__card {
  max-width: 860px;
  margin: 0 auto;
}

.case-study__lang-note {
  margin-bottom: 24px;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid var(--black-neutral2);
  font-size: 14px;
  opacity: 0.75;
}

.case-study__prose {
  color: var(--white-neutral1);
  font-size: 16px;
  line-height: 1.7;
  font-weight: 300;
}

.case-study__prose :deep(h1) {
  font-size: 34px;
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 8px;
}

.case-study__prose :deep(h2) {
  font-size: 24px;
  font-weight: 600;
  margin-top: 44px;
  margin-bottom: 12px;
}

.case-study__prose :deep(h3) {
  font-size: 19px;
  font-weight: 600;
  margin-top: 28px;
  margin-bottom: 8px;
}

.case-study__prose :deep(p) {
  margin: 16px 0;
}

.case-study__prose :deep(strong) {
  font-weight: 600;
  opacity: 1;
}

.case-study__prose :deep(a) {
  color: var(--secondary-color);
  text-decoration: underline;
}

.case-study__prose :deep(ul),
.case-study__prose :deep(ol) {
  margin: 16px 0;
  padding-left: 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.case-study__prose :deep(li) {
  padding-left: 4px;
}

.case-study__prose :deep(blockquote) {
  margin: 20px 0;
  padding: 14px 20px;
  border-left: 3px solid var(--secondary-color);
  border-radius: 0 12px 12px 0;
  background: var(--black-neutral4);
  font-size: 15px;
  opacity: 0.85;
}

.case-study__prose :deep(blockquote p) {
  margin: 4px 0;
}

.case-study__prose :deep(code) {
  font-family: ui-monospace, "SF Mono", "Cascadia Code", Menlo, monospace;
  font-size: 0.88em;
  padding: 2px 6px;
  border-radius: 6px;
  background: var(--black-neutral2);
  font-weight: 400;
}

.case-study__prose :deep(img) {
  display: block;
  width: 100%;
  height: auto;
  margin: 28px 0;
  border-radius: 16px;
  border: 1px solid var(--black-neutral2);
}

@media (max-width: 768px) {
  .case-study__prose {
    font-size: 15px;
  }
  .case-study__prose :deep(h1) {
    font-size: 27px;
  }
  .case-study__prose :deep(h2) {
    font-size: 21px;
  }
}
</style>
