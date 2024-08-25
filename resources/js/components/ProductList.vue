<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for="product in products" :key="product.id">
        <ProductItem :product="product" @add-to-cart="addToCart" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  name: "ProductList",
  components: {
    ProductItem
  },
  data() {
    return {
      products: [
        { id: 1, name: "Motorcycle A", description: "Description of Motorcycle A", price: 15000, image: "path-to-image-a.jpg" },
        { id: 2, name: "Motorcycle B", description: "Description of Motorcycle B", price: 12000, image: "path-to-image-b.jpg" },
        // Add more products here
      ]
    };
  },
  methods: {
    addToCart(product) {
      this.$emit('add-to-cart', product);
    }
  }
};
</script>

<style scoped>
.container {
  padding-top: 20px;
}
</style>
