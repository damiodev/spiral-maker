<template>
    <div class="register-page">
        <h2>Inscription</h2>
        <form @submit.prevent="register" class="register-form">
            <div class="mb-3">
                <label for="name" class="form-label">Nom</label>
                <input type="text" class="form-control" id="name" v-model="registerForm.name" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model="registerForm.email" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" id="password" v-model="registerForm.password" required>
            </div>
            <button type="submit" class="btn btn-primary">S'inscrire</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            registerForm: {
                name: '',
                email: '',
                password: ''
            }
        };
    },
    methods: {
        register() {
            // Implémentez la logique d'inscription ici
            console.log('Inscription en cours...');
        }
    }
};
</script>

<style scoped>
.register-page {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.register-form {
    display: flex;
    flex-direction: column;
}

</style>
