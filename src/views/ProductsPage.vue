<template>
    <div class="container">
        <h1 class="my-4">Nos Produits</h1>
        <FilterProduct :products="products" @filter="applyFilters" />
        <ProductList :products="products" :filters="filters" />
    </div>
</template>

<script>
import FilterProduct from '../components/FilterProduct.vue';
import ProductList from '../components/ProductList.vue';

export default {
    components: {
        FilterProduct,
        ProductList
    },
    data() {
        return {
            products: [],
            filters: {
                category: '',
                brand: '',
                priceOrder: ''
            }
        };
    },
    mounted() {
        fetch('/data/products.json')
            .then(response => response.json())
            .then(data => {
                this.products = data;
            });
    },
    methods: {
        applyFilters(filters) {
            this.filters = filters;
        }
    }
};
</script>

<style>
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
}

.my-4 {
    margin-top: 2rem;
    margin-bottom: 2rem;
}
</style>
