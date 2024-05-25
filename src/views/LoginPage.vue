<template>
    <div class="login-page">
        <h2>Connexion</h2>
        <form @submit.prevent="login" class="login-form">
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model="loginForm.email" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" id="password" v-model="loginForm.password" required>
            </div>
            <button type="submit" class="btn btn-primary">Se connecter</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginForm: {
                email: '',
                password: ''
            }
        };
    },
    methods: {
        login() {
            // Implémentez la logique de connexion ici
            console.log('Connexion en cours...');
        }
    }
};
</script>

<style scoped>
.login-page {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.login-form {
    display: flex;
    flex-direction: column;
}


</style>
