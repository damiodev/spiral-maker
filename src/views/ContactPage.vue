<template>
    <div class="contact-page">
        <ContactForm />
        <CompanyDetails />
        <GoogleMap />
    </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';
import CompanyDetails from '../components/CompanyDetails.vue';
import GoogleMap from '../components/GoogleMap.vue';

export default {
    components: {
        ContactForm,
        CompanyDetails,
        GoogleMap
    }
};
</script>

<style>
.contact-page {
    padding: 2rem;
}
</style>