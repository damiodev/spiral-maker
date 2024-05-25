<template>
    <div class="contact-form">
        <h2>Contactez-nous</h2>
        <form @submit.prevent="sendEmail">
            <div class="mb-3">
                <label for="name" class="form-label">Nom</label>
                <input type="text" class="form-control" id="name" v-model="form.name" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model="form.email" required>
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" rows="5" v-model="form.message" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Envoyer</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: ''
            }
        };
    },
    methods: {
        async sendEmail() {
            try {
                const response = await axios.post('https://gmail.googleapis.com/gmail/v1/users/{userId}/drafts/send', {
                    to: 'orienteurdigital@gmail.com',
                    subject: `Message from ${this.form.name}`,
                    text: `Email: ${this.form.email}\nMessage: ${this.form.message}`
                });
                if (response.status === 200) {
                    alert('Email envoyé avec succès');
                    this.form.name = '';
                    this.form.email = '';
                    this.form.message = '';
                } else {
                    alert('Erreur lors de l\'envoi de l\'email');
                }
            } catch (error) {
                alert('Erreur lors de l\'envoi de l\'email');
            }
        }
    }
};
</script>

<style scoped>
.contact-form {
    max-width: 600px;
    margin: 0 auto;
}
</style>