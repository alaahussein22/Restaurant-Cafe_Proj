<script setup>
import AppAbout from "./AboutView.vue";
import Products from "./Products/Products.vue";
import AnotherProducts from "./Products/AnotherProducts.vue"
</script>

<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="6" class="header">
          <h1>Restaurant&Cafe</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Architecto, commodi voluptatibus! Mollitia, repellat eius, deleniti
            consequatur reiciendis asperiores.
          </p>
          <img src="@/assets/images/blueberries-864627_1280.jpg" alt="" />
        </v-col>

        <v-col cols="6"  class="header_bottom">
          <img src="@/assets/images/bananas.jpg" alt="" />
          <h1>Welcome To Our Cafe</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Architecto, commodi voluptatibus! Mollitia, repellat eius, deleniti
            consequatur reiciendis asperiores.
          </p>
        </v-col>
      </v-row>
    </v-container>
    <AppAbout />
    <Products />
    <AnotherProducts />

  </div>
</template>

<style scoped>
.home{
  background-color: #FFFBF3;
}
.home .header {
  margin-top: 3.5rem;
}
.home .header  h1 {
  color: #6c744f;
  letter-spacing: 0.1rem;
  margin-right: 21rem;
  margin-bottom: 1rem;
  font-weight: bolder;
}
.home .header_bottom h1 {
  color: #6c744f;
  letter-spacing: 0.1rem;
  margin-bottom: 1rem;
  font-weight: bolder;
  margin-top: 1rem;

}
.home .header , .header_bottom p {
  color: #6c744f;
  line-height: 1.8rem;
}
.home img {
  margin-top: 3.5rem;
  border: 4px solid #d9a279;
  border-radius: 2rem;
  width: 55%;
  height: 70%;
  background-position: center;
  background-size: 100% auto;
}
</style>
