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
          'http://localhost/SISGEVA/resources/js/components/img/carrucel1.jpg',
          'http://localhost/SISGEVA/resources/js/components/img/carrusel2.jpg',
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
  transition: opacity 0.5s ease;
}

.carousel-item img {
  width: 100%; /* Make sure the image fills the width of the container */
  height: 400px; /* Fixed height for all images */
  object-fit: cover; /* Cover the entire container without distorting the aspect ratio */
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