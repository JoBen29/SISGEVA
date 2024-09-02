<template>
    <div class="carousel">
      <div class="carousel-inner">
        <div
          v-for="(image, index) in images"
          :key="index"
          :class="['carousel-item', { active: index === currentIndex }]"
        >
          <img :src="image" :alt="'Image ' + (index + 1)" />
        </div>
      </div>
      <button class="carousel-control prev" @click="prevSlide">&#10094;</button>
      <button class="carousel-control next" @click="nextSlide">&#10095;</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageCarousel',
    data() {
      return {
        currentIndex: 0,
        images: [
          './img/carrucel1.jpg',
          './img/carrusel2.jpg',
          './img/carrusel3.jpg',
        ],
      };
    },
    methods: {
      prevSlide() {
        this.currentIndex =
          this.currentIndex === 0
            ? this.images.length - 1
            : this.currentIndex - 1;
      },
      nextSlide() {
        this.currentIndex =
          this.currentIndex === this.images.length - 1
            ? 0
            : this.currentIndex + 1;
      },
    },
  };
  </script>
  
  <style scoped>
  .carousel {
    position: relative;
    max-width: 100%;
    margin: auto;
    overflow: hidden;
  }
  
  .carousel-inner {
    display: flex;
    transition: transform 0.5s ease;
  }
  
  .carousel-item {
    min-width: 100%;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  .carousel-item.active {
    opacity: 1;
  }
  
  .carousel-item img {
    width: 100%;
    height: auto;
  }
  
  .carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    border: none;
    padding: 1rem;
    cursor: pointer;
  }
  
  .prev {
    left: 0;
  }
  
  .next {
    right: 0;
  }
  </style>
  