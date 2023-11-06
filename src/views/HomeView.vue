<script setup>
import AppAbout from "./AboutView.vue"
import Products from "./Products/Products.vue"
</script>

<template>
  <div class="home">
    <v-container fluid>
      <v-row>
        <v-col cols="6" class="header">
          <h1>Restaurant&Cafe</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, commodi voluptatibus! Mollitia, repellat eius, deleniti consequatur reiciendis asperiores corrupti, magnam vel officiis odio modi est non earum ea qui omnis.</p>
        </v-col>
        <v-col cols="6" style="  margin-top: inherit;">
          <img

        src="@/assets/images/bananas.jpg"
        alt=""
      />        </v-col>


      </v-row>

    </v-container>

  </div>
  <AppAbout />
  <Products />

</template>


<style scoped>
.home .header{
  margin-top: inherit;
  padding: 10rem 0;

}
.home .header h1{
  color: #6c744f;
  letter-spacing: .3rem;
  margin-right: 21rem;
margin-bottom: 1rem
}

.home .header p{
  color: #6c744f;
  line-height: 1.8rem;
  margin-left: 5rem;

}
.home img{
  height: 65%;
  background-position: center;
  background-size: 100% auto;

}
</style>
