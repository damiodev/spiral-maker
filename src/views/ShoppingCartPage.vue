<template>
    <div class="container">
        <ShoppingCart />
    </div>
</template>

<script>
import ShoppingCart from '../components/ShoppingCart.vue';

export default {
    components: {
        ShoppingCart
    }
};
</script>

<style>
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
}
</style>