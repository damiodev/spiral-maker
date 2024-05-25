<template>
    <div>
        <h2>Votre Panier</h2>
        <div v-if="cartItems.length === 0" class="alert alert-info" role="alert">
            Vous n'avez aucun produit dans votre panier
        </div>
        <div v-else>
            <table class="table">
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Nom du produit</th>
                        <th>Référence</th>
                        <th>Prix (HT)</th>
                        <th>Quantité</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in cartItems" :key="item.id">
                        <td><img :src="item.images[0]" alt="Product Image" width="50"></td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.reference }}</td>
                        <td>{{ item.price }} €</td>
                        <td>
                            <button @click="decreaseQuantity(item.id)" class="btn btn-secondary btn-sm">-</button>
                            {{ item.quantity }}
                            <button @click="increaseQuantity(item.id)" class="btn btn-secondary btn-sm">+</button>
                        </td>
                        <td>
                            <button @click="removeFromCart(item.id)" class="btn btn-danger btn-sm">Supprimer</button>
                            <button @click="showProductModal(item)" class="btn btn-info btn-sm">Détail</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="order-details">
                <h3>Détails de la commande</h3>
                <p>Total : {{ totalPrice }} €</p>
                <p>TVA 20% : {{ formattedTva }} €</p>
                <div>
                    <label>Mode de livraison :</label>
                    <select v-model="shipping">
                        <option value="domicile">A domicile - 30 €</option>
                        <option value="relais">En point relais - 10 €</option>
                    </select>
                </div>
                <p>Total avec livraison : {{ totalWithShipping }} €</p>
                <button :disabled="cartItems.length === 0" class="btn btn-success">Valider mon panier</button>
            </div>
        </div>

        <!-- Modale de détail du produit -->
        <ModalDetailProduct :product="selectedProduct" :allProducts="cartItems" v-if="selectedProduct"
            @close="selectedProduct = null" />
    </div>
</template>

<script>
import { useCartStore } from '../store/cart';
import { computed, ref } from 'vue';
import ModalDetailProduct from './ModalDetailProduct.vue';

export default {
    components: {
        ModalDetailProduct
    },
    setup() {
        const cartStore = useCartStore();
        const shipping = ref('domicile');
        const selectedProduct = ref(null);

        const cartItems = computed(() => cartStore.items);
        const totalPrice = computed(() => cartStore.totalPrice);
        const tva = computed(() => cartStore.tva);

        const formattedTva = computed(() => tva.value.toFixed(2));

        const totalWithShipping = computed(() => {
            const shippingCost = shipping.value === 'domicile' ? 30 : 10;
            return (totalPrice.value + shippingCost + tva.value).toFixed(2);
        });

        const removeFromCart = (id) => {
            cartStore.removeFromCart(id);
        };

        const increaseQuantity = (id) => {
            cartStore.increaseQuantity(id);
        };

        const decreaseQuantity = (id) => {
            cartStore.decreaseQuantity(id);
        };

        const showProductModal = (product) => {
            selectedProduct.value = product;
        };

        return {
            cartItems,
            totalPrice,
            formattedTva,
            shipping,
            totalWithShipping,
            removeFromCart,
            increaseQuantity,
            decreaseQuantity,
            selectedProduct,
            showProductModal
        };
    }
};
</script>

<style>
.table {
    margin-bottom: 2rem;
}

.order-details {
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    padding: 1rem;
    margin-top: 2rem;
    background-color: #f8f9fa;
}

.order-details h3 {
    margin-bottom: 1rem;
}

.order-details p,
.order-details label,
.order-details select {
    margin-bottom: 0.5rem;
}

.order-details button {
    margin-top: 1rem;
}

.alert {
    margin-top: 1rem;
}
</style>
