import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: JSON.parse(localStorage.getItem("cartItems")) || [],
  }),
  getters: {
    totalPrice: (state) => {
      return state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    tva: (state) => {
      return state.totalPrice * (0.2).toFixed(2); // Assuming 20% VAT
    },
  },
  actions: {
    addToCart(product) {
      const item = this.items.find((item) => item.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
      this.updateLocalStorage();
    },
    removeFromCart(productId) {
      this.items = this.items.filter((item) => item.id !== productId);
      this.updateLocalStorage();
    },
    increaseQuantity(productId) {
      const item = this.items.find((item) => item.id === productId);
      if (item) {
        item.quantity++;
        this.updateLocalStorage();
      }
    },
    decreaseQuantity(productId) {
      const item = this.items.find((item) => item.id === productId);
      if (item && item.quantity > 1) {
        item.quantity--;
        this.updateLocalStorage();
      }
    },
    updateLocalStorage() {
      localStorage.setItem("cartItems", JSON.stringify(this.items));
    },
  },
});
