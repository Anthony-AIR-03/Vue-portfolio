<script setup lang="ts">
import { ref } from "vue";
import emailjs from "@emailjs/browser";
import { useI18n } from 'vue-i18n'


const { t } = useI18n()
const form = ref<HTMLFormElement | null>(null);
const isSending = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

async function sendEmail() {
    if (!form.value || isSending.value) return;

    isSending.value = true;
    successMessage.value = "";
    errorMessage.value = "";

    try {
        await emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.value,
            {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            },
        ) 

        successMessage.value = t('contactPage.messages.success');
        form.value?.reset();
    } catch (error) {
        errorMessage.value = t('contactPage.messages.failed');;
        console.error(error);
    } finally {
        isSending.value = false;
    }
}
</script>

<template>
    <div class="contact-style contact-section__right">
        <form ref="form" @submit.prevent="sendEmail">
            <div class="contact-form">
                <div class="two-input-field">
                    <div class="single__input">
                        <label class="textXL label__style" for="name"
                            >{{ $t('contactPage.form.name.label') }}</label
                        >
                        <input
                            class="input-field-style"
                            id="name"
                            type="text"
                            name="name"
                            :placeholder="$t('contactPage.form.name.placeholder')"
                            required
                            :disabled="isSending"
                        />
                    </div>

                    <div class="single__input">
                        <label class="textXL label__style" for="email"
                            >{{ $t('contactPage.form.email.label') }}</label
                        >
                        <input
                            class="input-field-style"
                            id="email"
                            type="email"
                            name="email"
                            :placeholder="$t('contactPage.form.email.placeholder')"
                            required
                            :disabled="isSending"
                        />
                    </div>
                </div>

                <div class="two-input-field">
                    <div class="single__input">
                        <label class="textXL label__style" for="phone">
                            {{ $t('contactPage.form.phone.label') }}
                            {{ $t('general.optional') }}
                        </label>
                        <input
                            class="input-field-style"
                            id="phone"
                            type="tel"
                            name="phone"
                            :placeholder="$t('contactPage.form.phone.placeholder')"
                            :disabled="isSending"
                        />
                    </div>

                    <div class="single__input">
                        <label class="textXL label__style" for="subject"
                            >{{ $t('contactPage.form.subject.label') }}</label
                        >
                        <input
                            class="input-field-style"
                            id="subject"
                            type="text"
                            name="subject"
                            :placeholder="$t('contactPage.form.subject.placeholder')"
                            required
                            :disabled="isSending"
                        />
                    </div>
                </div>

                <div class="single__input">
                    <label class="textXL label__style" for="message"
                        >{{ $t('contactPage.form.message.label') }}</label
                    >
                    <textarea
                        class="input-field-style"
                        id="message"
                        rows="8"
                        name="message"
                        :placeholder="$t('contactPage.form.message.placeholder')"
                        required
                        :disabled="isSending"
                    ></textarea>
                </div>
            </div>

            <p v-if="successMessage">{{ successMessage }}</p>
            <p v-if="errorMessage">{{ errorMessage }}</p>

            <div class="m-t-40px">
                <button
                    class="see-all-blog"
                    type="submit"
                    :disabled="isSending"
                >
                    <span class="textM post-comment light-theme-white-text">
                        {{
                            isSending
                                ? $t('contactPage.form.submitBtn.sending')
                                : $t('contactPage.form.submitBtn.submit')
                        }}
                    </span>
                </button>
            </div>
        </form>
    </div>
</template>
