<script setup lang="ts">
import { personalData } from "@/assets/data/personalData";
import { PhMapPin, PhPaperPlaneTilt, PhPhone } from "@phosphor-icons/vue";
</script>
<template>
    <div class="contact-section__left">
        <span class="heading-5 contact-sub-title">{{ $t('contactPage.contactInfo.title') }}</span>
        <h3 class="heading-2 section-title">{{ $t('contactPage.contactInfo.slogan') }}</h3>
        <p class="textXL font-thin just-hello">
            {{ $t('contactPage.contactInfo.note') }}
        </p>

        <div class="m-t-60px contact-info">
            <!-- {/* phone */} -->
            <div class="contact-info__card">
                <div class="contact-info__card-icon">
                    <PhPhone :size="32" color="#9747FF" />
                </div>
                <div class="contact-info__card-info">
                    <p class="textLead">{{ $t('contactPage.contactInfo.phone') }}</p>
                    <a href="tel:+3567897483" class="textM font-thin link">
                        {{ personalData.contactInfo.phoneNumber }}
                    </a>
                </div>
            </div>
            <!-- {/* email */} -->
            <div class="contact-info__card">
                <div class="contact-info__card-icon">
                    <PhPaperPlaneTilt :size="32" color="#9747FF" />
                </div>
                <div class="contact-info__card-info">
                    <p class="textLead">{{ $t('contactPage.contactInfo.email') }}</p>
                    <a
                        href="mailto:tanya.hill@example.com"
                        class="textM font-thin link"
                    >
                        {{ personalData.contactInfo.email }}
                    </a>
                </div>
            </div>
            <div class="contact-info__card">
                <div class="contact-info__card-icon">
                    <PhMapPin :size="32" color="#9747FF" />
                </div>
                <div class="contact-info__card-info">
                    <p class="textLead">{{ $t('contactPage.contactInfo.address') }}</p>
                    <p class="textM font-thin link">
                        {{ personalData.contactInfo.address }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
