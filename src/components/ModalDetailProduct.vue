<template>
    <div v-if="product" class="modal fade show d-block" tabindex="-1" role="dialog" aria-labelledby="productModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="productModalLabel">{{ product.name }}</h5>
                    <button type="button" class="btn-close" @click="$emit('close')"></button>
                </div>
                <div class="modal-body">
                    <img :src="product.images[0]" class="img-fluid" alt="Product Image" width="300">
                    <p>Marque: {{ product.brand }}</p>
                    <p>Prix: {{ product.price }} €</p>
                    <p v-if="product.discount > 0">Remise: {{ product.discount }}%</p>
                    <p>Référence: {{ product.reference }}</p>
                    <p>{{ product.description }}</p>
                    <RecommendedProducts :products="allProducts" />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="$emit('close')">Fermer</button>
                    <button type="button" class="btn btn-primary" @click="addToCart(product)">Ajouter au panier</button>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <!-- Optionally, you can add a placeholder or a message when no product is selected -->
    </div>
</template>

<script>
import { useCartStore } from '../store/cart';
import RecommendedProducts from './RecommendedProducts.vue';

export default {
    props: {
        product: {
            type: Object,
            required: false,
            default: null
        },
        allProducts: {
            type: Array,
            required: true
        }
    },
    components: {
        RecommendedProducts
    },
    setup() {
        const cartStore = useCartStore();
        const addToCart = (product) => {
            cartStore.addToCart(product);
        };

        return { addToCart };
    }
};
</script>

<style>
.modal {
    display: none;
}

.modal.show {
    display: block;
}
</style>
