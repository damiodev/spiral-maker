<template>
    <div class="row featurette mt-5 align-items-center">
        <div class="col-md-7">
            <h2 class="featurette-heading fw-bold lh-1 text-primary">Révolutionnez la Fabrication. <span
                    class="text-body-secondary">La magie de l'impression 3D.</span></h2>
            <p class="lead text-dark-emphasis">L'impression 3D transforme la façon dont nous fabriquons et concevons les
                objets. Que ce soit pour des prototypes rapides ou des produits finis, cette technologie offre des
                possibilités infinies pour les innovateurs de tous les secteurs.</p>
        </div>
        <div class="col-md-5">
            <img src="https://www.machines-3d.com/images/Image/Imprimante-3D-Dentaire-Accufab-D1-1-1-1.png"
                alt="imprimante-3d" class="img-fluid rounded">
        </div>
    </div>

    <hr class="featurette-divider m-5">

    <div class="row featurette align-items-center">
        <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading fw-bold lh-1 text-primary">La Précision à Portée de Main. <span
                    class="text-body-secondary">Découvrez la perfection.</span></h2>
            <p class="lead text-dark-emphasis">Grâce à l'impression 3D, il est possible de créer des objets avec une
                précision millimétrique. Cette technologie permet de produire des pièces complexes et détaillées qui
                seraient impossibles à réaliser avec des méthodes traditionnelles.</p>
        </div>
        <div class="col-md-5 order-md-1">
            <img src="https://www.emotion-tech.com/sites/default/files/uploads/emotion-tec_V2/1-imprimante-microdelta-rework.png" alt="imprimante-3d"
                class="img-fluid rounded">
        </div>
    </div>

    <hr class="featurette-divider m-5">

    <div class="row featurette align-items-center">
        <div class="col-md-7">
            <h2 class="featurette-heading fw-bold lh-1 text-primary">L'Avenir de la Personnalisation. <span
                    class="text-body-secondary">Une innovation sans limites.</span></h2>
            <p class="lead text-dark-emphasis">Avec l'impression 3D, la personnalisation devient simple et accessible.
                Que ce soit pour des objets du quotidien ou des pièces spécifiques à une industrie, cette technologie
                permet de répondre aux besoins uniques de chaque utilisateur.</p>
        </div>
        <div class="col-md-5">
            <img src="https://www.machines-3d.com/images/Image/Imprimante-3D-Zortrax-Inventure.png" alt="imprimante-3d"
                class="img-fluid rounded">
        </div>
    </div>
</template>

<script>
export default {
    name: 'FeaturetteComponent',
    props: {
        featurette: Object
    }
}
</script>

<style>
.featurette-heading {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.text-primary {
    color: #007bff;
}

.text-dark-emphasis {
    color: #343a40;
    font-weight: 500;
}

.featurette-divider {
    border-top: 2px solid #e9ecef;
}

.img-fluid {
    max-width: 100%;
    height: auto;
    border-radius: 0.25rem;
}
</style>
