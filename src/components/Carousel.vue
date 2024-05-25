<template>
    <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button v-for="(image, index) in images" :key="index" type="button" :data-bs-target="'#myCarousel'"
                :data-bs-slide-to="index" :class="{ active: index === 0 }" :aria-current="index === 0 ? 'true' : ''"
                :aria-label="'Slide ' + (index + 1)"></button>
        </div>
        <div class="carousel-inner">
            <div v-for="(image, index) in images" :key="index" :class="['carousel-item', { active: index === 0 }]">
                <img :src="image" class="d-block w-100" :alt="'Image ' + (index + 1)">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'CarouselComponent',
    props: {
        images: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.carousel-item img {
    height: 500px;
    object-fit: cover;
    object-position: center;
    border-radius: 20px;
}

@media (max-width: 992px) {
    #myCarousel {
        display: none;
    }
}
</style>
