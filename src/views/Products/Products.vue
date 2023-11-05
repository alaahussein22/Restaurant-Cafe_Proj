<template>
    <div class="products">
        <img
          class="bg-white"

          src="@/assets/images/bananas.jpg"
          alt=""
        />
    </div>
  </template>

  <script>
  // @ is an alias to /src

  export default {
    name: "HomeView",
    data() {
      return {
        items: [
          {
            src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          },
          {
            src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          },
          {
            src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          },
          {
            src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          },
        ],
      };
    },
  };
  </script>

  <style scoped>
  .home img{
    width: 100%;
    height: 40rem;
    background-position: center;
    background-size: 100% auto;
  }
  </style>