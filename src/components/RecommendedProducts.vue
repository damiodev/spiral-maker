<template>
    <div class="recommended-products-container">
        <div class="scroll-container">
            <div v-for="product in randomProducts" :key="product.id" class="product-card"
                @mouseover="showHover(product.id)" @mouseleave="hideHover(product.id)">
                <img :src="product.images[0]" class="product-image" alt="Product Image">
                <div class="hover-details" v-if="hoveredProduct === product.id">
                    <h5>{{ product.name }}</h5>
                    <p>{{ product.price }} €</p>
                    <button class="btn btn-primary" @click="addToCart(product)">+</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useCartStore } from '../store/cart';

export default {
    props: {
        products: {
            type: Array,
            required: true
        }
    },
    setup(props) {
        const cartStore = useCartStore();
        const hoveredProduct = ref(null);

        const addToCart = (product) => {
            cartStore.addToCart(product);
        };

        const showHover = (id) => {
            hoveredProduct.value = id;
        };

        const hideHover = () => {
            hoveredProduct.value = null;
        };

        const randomProducts = computed(() => {
            let shuffled = props.products.slice().sort(() => 0.5 - Math.random());
            return shuffled.slice(0, 5);
        });

        return { randomProducts, hoveredProduct, addToCart, showHover, hideHover };
    }
};
</script>

<style>
.recommended-products-container {
    overflow-x: auto;
    white-space: nowrap;
    padding: 1rem 0;
}

.scroll-container {
    display: flex;
}

.product-card {
    display: inline-block;
    margin-right: 1rem;
    position: relative;
}

.product-image {
    width: 150px;
    height: 150px;
    object-fit: cover;
}

.hover-details {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
}

.product-card:hover .hover-details {
    opacity: 1;
}
</style>
