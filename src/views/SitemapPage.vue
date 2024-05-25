<template>
    <div class="container mt-5">
        <h1>Plan du Site</h1>
        <ul class="list-unstyled">
            <li><router-link to="/">Accueil</router-link></li>
            <li><router-link to="/produits">Produits</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link to="/panier">Panier</router-link></li>
            <li><router-link to="/connexion">Se connecter</router-link></li>
            <li><router-link to="/inscription">S'enregistrer</router-link></li>
            <li><router-link to="/mentions-legales">Mentions Légales</router-link></li>
            <li><router-link to="/cgv">Conditions Générales de Vente</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "SiteMapPage"
}
</script>

<style scoped>
.container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
    margin-bottom: 20px;
}

ul {
    line-height: 1.6;
}

ul ul {
    margin-left: 20px;
}
</style>