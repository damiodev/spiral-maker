<template>
    <div class="row">
        <!-- Product Cards -->
        <template v-if="filteredProducts.length">
            <div v-for="product in filteredProducts" :key="product.id" class="col-md-4 mb-4">
                <div class="card h-100">
                    <img :src="product.images[0]" class="card-img-top" alt="Product Image">
                    <div class="card-body">
                        <h5 class="card-title">{{ product.name }}</h5>
                        <p class="card-text">{{ product.brand }}</p>
                        <p class="card-text">{{ product.price }} €</p>
                        <!-- <p class="card-text" v-if="product.discount > 0">Remise : {{ product.discount }}%</p> -->
                        <p class="card-text">Référence : {{ product.reference }}</p>
                        <button class="btn btn-primary" @click="addToCart(product)">Ajouter au panier</button>
                        <button class="btn btn-secondary" @click="showProductModal(product)">Détail du produit</button>
                    </div>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="col-12">
                <p class="text-center">Aucun produit trouvé</p>
            </div>
        </template>
        <ModalDetailProduct :product="selectedProduct" :allProducts="products" @close="selectedProduct = null" />
    </div>
    <!-- Notification Container -->
    <div class="notification-container">
        <div v-for="(notification, index) in notifications" :key="index"
            :class="['notification', notification.type, { 'hidden': !notification.visible }]"
            @transitionend="removeNotification(index)">
            {{ notification.message }}
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useCartStore } from '../store/cart';
import ModalDetailProduct from './ModalDetailProduct.vue';

export default {
    props: {
        products: {
            type: Array,
            required: true
        },
        filters: {
            type: Object,
            required: true
        }
    },
    components: {
        ModalDetailProduct
    },
    setup() {
        const cartStore = useCartStore();
        const notifications = ref([]); // Pile de notifications

        const addToCart = (product) => {
            cartStore.addToCart(product);
            const newNotification = {
                message: 'Le produit a été ajouté au panier.',
                type: 'alert-success',
                visible: true
            };
            notifications.value.unshift(newNotification);

            // Marquer la notification comme invisible après 3 secondes
            setTimeout(() => {
                newNotification.visible = false;
            }, 3000);
        };

        const selectedProduct = ref(null);

        const showProductModal = (product) => {
            selectedProduct.value = product;
        };

        const removeNotification = (index) => {
            notifications.value[index].visible = false;
        };

        const refreshNotifications = () => {
            notifications.value = notifications.value.filter(notification => notification.visible);
        };

        // Rafraîchir les notifications toutes les 1000 ms (1 seconde)
        setInterval(refreshNotifications, 1000);

        return { addToCart, showProductModal, selectedProduct, notifications, removeNotification };
    },
    computed: {
        filteredProducts() {
            let products = this.products;

            if (this.filters.category) {
                products = products.filter(product => product.category === this.filters.category);
            }

            if (this.filters.brand) {
                products = products.filter(product => product.brand === this.filters.brand);
            }

            if (this.filters.priceOrder === 'asc') {
                products = products.sort((a, b) => a.price - b.price);
            } else if (this.filters.priceOrder === 'desc') {
                products = products.sort((a, b) => b.price - a.price);
            }

            return products;
        }
    }
};
</script>

<style>
.card {
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
}

.card-img-top {
    width: 100%;
    height: 200px;
    object-fit: contain;
    /* Change object-fit from cover to contain */
}

.card-body {
    padding: 1rem;
}

.card-title {
    font-size: 1.25rem;
}

.card-text {
    margin-bottom: 0.5rem;
}

.btn {
    margin-right: 0.5rem;
}

.text-center {
    text-align: center;
    font-size: 1.25rem;
    color: #999;
}

/* Styles pour la notification */
.notification-container {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    width: 300px;
}

.notification {
    margin-bottom: 10px;
    transition: opacity 0.5s ease-in-out;
}

.notification.hidden {
    opacity: 0;
}

.alert-success {
    background-color: #d4edda;
    border-color: #c3e6cb;
    color: #155724;
}
</style>
