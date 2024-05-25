<template>
    <div class="container">
        <Carousel :images="carouselImages" />
        <div class="container marketing">
            <Featurette />
        </div>
    </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import Featurette from "../components/Featurette.vue";

export default {
    components: {
        Carousel,
        Featurette
    },
    data() {
        return {
            carouselImages: [
                'https://www.pacific-research.com/wp-content/uploads/2020/02/banner-3d-printing.jpg',
                'https://cdnus.globalso.com/tronhoo3d/333.jpg',
                'https://www.primexvents.com/wp-content/uploads/2017/03/3D-printing-banner.jpg'
            ]
        };
    }
}
</script>

<style>
/* Ajoutez des styles globaux ici si nécessaire */
</style>
