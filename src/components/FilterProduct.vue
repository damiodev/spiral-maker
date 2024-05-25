<template>
    <div class="mb-3">
        <h3>Filtrer les produits</h3>
        <div class="mb-3">
            <label for="category" class="form-label">Catégorie</label>
            <select id="category" class="form-select" v-model="selectedCategory" @change="filterProducts">
                <option value="">Toutes les catégories</option>
                <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="brand" class="form-label">Marque</label>
            <select id="brand" class="form-select" v-model="selectedBrand" @change="filterProducts">
                <option value="">Toutes les marques</option>
                <option v-for="brand in brands" :key="brand" :value="brand">{{ brand }}</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="priceOrder" class="form-label">Ordre du prix</label>
            <select id="priceOrder" class="form-select" v-model="selectedPriceOrder" @change="filterProducts">
                <option value="">Sans ordre</option>
                <option value="asc">Prix croissant</option>
                <option value="desc">Prix décroissant</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        products: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            selectedCategory: '',
            selectedBrand: '',
            selectedPriceOrder: '',
            categories: [],
            brands: []
        };
    },
    watch: {
        products: {
            handler(newProducts) {
                this.categories = [...new Set(newProducts.map(product => product.category))];
                this.brands = [...new Set(newProducts.map(product => product.brand))];
            },
            immediate: true
        }
    },
    methods: {
        filterProducts() {
            this.$emit('filter', {
                category: this.selectedCategory,
                brand: this.selectedBrand,
                priceOrder: this.selectedPriceOrder
            });
        }
    }
};
</script>

<style>
.mb-3 {
    margin-bottom: 1rem;
}
</style>
