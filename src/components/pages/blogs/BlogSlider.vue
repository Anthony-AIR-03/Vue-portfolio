<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";

import { Autoplay, Navigation } from "swiper/modules";

import sliderBlog1 from "@/assets/image/slider-blog-1.png";
import sliderBlog2 from "@/assets/image/slider-blog-2.png";
import sliderBlog3 from "@/assets/image/slider-blog-3.png";
import { PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";
import BlogSliderItem from "./BlogSliderItem.vue";

const blogSlider = [
  {
    image: sliderBlog1,
    date: "December 25,2023",
    tag: "Articles",
    title: "Digital Alchemy Aroha's Secrets",
    text: "Regular analysis and reporting to track performance  and guide future strategies etc.",
    link: "/",
  },
  {
    image: sliderBlog2,
    date: "December12,2023",
    tag: "No-Code",
    title: "Aroha Unveiled Behind the Pixels",
    text: "Showcase your video creation and editing skills, including promotional animations.",
    link: "/",
  },
  {
    image: sliderBlog3,
    date: "December 17,2023",
    tag: "Resources",
    title: "Aroha's Client Journey Chronicles",
    text: "Display your artistic skills through digital or traditional illustrations and many more.",
    link: "/",
  },
  {
    image: sliderBlog1,
    date: "December 25,2023",
    tag: "News",
    title: "Digital Alchemy Aroha's Secrets",
    text: "Regular analysis and reporting to track performance and guide future strategies etc. ",
    link: "/",
  },
  {
    image: sliderBlog2,
    date: "December12,2023",
    tag: "Articles",
    title: "Aroha Unveiled Behind the Pixels",
    text: "Showcase your video creation and editing skills, including promotional animations.",
    link: "/",
  },
  {
    image: sliderBlog2,
    date: "December12,2023",
    tag: "Resources",
    title: "Aroha Unveiled Behind the Pixels",
    text: "Showcase your video creation and editing skills, including promotional animations.",
    link: "/",
  },
  {
    image: sliderBlog3,
    date: "December 17,2023",
    tag: "Resources",
    title: "Aroha's Client Journey Chronicles",
    text: "Display your artistic skills through digital or traditional illustrations and many more.",
    link: "/",
  },
  {
    image: sliderBlog1,
    date: "December 25,2023",
    tag: "Resources",
    title: "Digital Alchemy Aroha's Secrets",
    text: "Regular analysis and reporting to track performance and guide future strategies etc.",
    link: "/",
  },
  {
    image: sliderBlog2,
    date: "December12,2023",
    tag: "News",
    title: "Aroha Unveiled Behind the Pixels",
    text: "Showcase your video creation and editing skills, including promotional animations.",
    link: "/",
  },
  {
    image: sliderBlog3,
    date: "December 17,2023",
    tag: "News",
    title: "Aroha's Client Journey Chronicles",
    text: "Display your artistic skills through digital or traditional illustrations and many more.",
    link: "/",
  },
  {
    image: sliderBlog1,
    date: "December 25,2023",
    tag: "Articles",
    title: "Digital Alchemy Aroha's Secrets",
    text: "Regular analysis and reporting to track performance and guide future strategies etc.",
    link: "/",
  },
  {
    image: sliderBlog2,
    date: "December12,2023",
    tag: "Articles",
    title: "Aroha Unveiled Behind the Pixels",
    text: "Showcase your video creation and editing skills, including promotional animations.",
    link: "/",
  },
  {
    image: sliderBlog3,
    date: "December 17,2023",
    tag: "News",
    title: "Aroha's Client Journey Chronicles",
    text: "Display your artistic skills through digital or traditional illustrations and many more.",
    link: "/",
  },
];

const filterData = ref(blogSlider);
const buttonActive = ref("");

const handleFilterData = (event: MouseEvent) => {
  const buttonText = event.target as HTMLElement;
  buttonActive.value = buttonText.innerText.toLowerCase();
  const filterItems = blogSlider.filter(
    (item) => item.tag.toLowerCase() === buttonText.innerText.toLowerCase()
  );
  filterData.value = filterItems;
};
</script>
<template>
  <div class="m-t-60px blog-body__down">
    <h3 class="heading-3">Categories</h3>
    <div class="tab-area">
      <div class="tab-area__buttons">
        <button
          @click="(e:MouseEvent) => handleFilterData(e)"
          class="textM tab-area__buttons-button"
          :class="`${
            buttonActive == 'Resources'.toLocaleLowerCase() ? 'tab-active' : ''
          }`"
        >
          Resources
        </button>
        <button
          @click="(e:MouseEvent) => handleFilterData(e)"
          class="textM tab-area__buttons-button"
          :class="`${
            buttonActive == 'Articles'.toLocaleLowerCase() ? 'tab-active' : ''
          }`"
        >
          Articles
        </button>
        <button
          @click="(e:MouseEvent) => handleFilterData(e)"
          class="textM tab-area__buttons-button"
          :class="`${
            buttonActive == 'News'.toLocaleLowerCase() ? 'tab-active' : ''
          }`"
        >
          News
        </button>
      </div>
      <div class="slider-buttons">
        <button class="customerSliderNext blog-slider-button">
          <PhCaretLeft :size="24" />
        </button>
        <button class="customerSliderPrev blog-slider-button">
          <PhCaretRight :size="24" />
        </button>
      </div>
    </div>

    <!-- slider area  -->
    <div class="m-t-40px">
      <Swiper
        :slidesPerView="1"
        :spaceBetween="6"
        :speed="1400"
        :loop="true"
        :modules="[Navigation, Autoplay]"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: false,
        }"
        :navigation="{
          nextEl: '.customerSliderNext',
          prevEl: '.customerSliderPrev',
        }"
        :breakpoints="{
          '768': {
            spaceBetween: 12,
            slidesPerView: 2,
          },
          '992': {
            spaceBetween: 12,
            slidesPerView: 3,
          },
          '1200': {
            spaceBetween: 24,
            slidesPerView: 3,
          },
        }"
      >
        <SwiperSlide
          v-for="(props, index) in filterData"
          :key="`blog-slider-${index}`"
        >
          <BlogSliderItem v-bind="props" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style scoped></style>
