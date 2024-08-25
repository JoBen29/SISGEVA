<template>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" :src="product.image" alt="Product Image">
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">{{ product.description }}</p>
      <p class="card-text">{{ formatCurrency(product.price) }}</p>
      <button class="btn btn-primary" @click="addToCart(product)">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatCurrency(value) {
      return `$${value.toFixed(2)}`;
    },
    addToCart(product) {
      this.$emit('add-to-cart', product);
    }
  }
};
</script>
