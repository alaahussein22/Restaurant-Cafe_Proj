<script setup>
import Filter from "../../components/Products/Filter.vue"
</script>


<template>

  <div class="products"> 
    <v-container>
<Filter />

      <v-row>
        <v-col cols="4">
          <v-card class="mx-auto" max-width="300" >
            <v-card-title> Top western road trips </v-card-title>

            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="400px"
              cover
            ></v-img>
            <div class="d-flex pt-1 pb-2" style="background-color: #FFD3B6;border-color: #FFD3B6;">
              <div>
                <v-card-subtitle> <span>Categorie: </span> Cake</v-card-subtitle>
                <v-card-subtitle> <span>Type:</span> Cake</v-card-subtitle>
                <v-card-subtitle> <span>Calories:</span> 11</v-card-subtitle>
              </div>
              <v-icon>mdi-pen</v-icon>
            </div>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="mx-auto" max-width="300" >
            <v-card-title> Top western road trips </v-card-title>

            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="400px"
              cover
            ></v-img>
            <div class="d-flex pt-1 pb-2" style="background-color: #FFD3B6;border-color: #FFD3B6;">
              <div>
                <v-card-subtitle> <span>Categorie: </span> Cake</v-card-subtitle>
                <v-card-subtitle> <span>Type:</span> Cake</v-card-subtitle>
                <v-card-subtitle> <span>Calories:</span> 11</v-card-subtitle>
              </div>
              <v-icon>mdi-pen</v-icon>
            </div>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="mx-auto" max-width="300" >
            <v-card-title> Top western road trips </v-card-title>

            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="400px"
              cover
            ></v-img>
            <div class="d-flex pt-1 pb-2" style="background-color: #FFD3B6;border-color: #FFD3B6;">
              <div>
                <v-card-subtitle> <span>Categorie: </span> Cake</v-card-subtitle>
                <v-card-subtitle> <span>Type:</span> Cake</v-card-subtitle>
                <v-card-subtitle> <span>Calories:</span> 11</v-card-subtitle>
              </div>
              <v-icon>mdi-pen</v-icon>
            </div>
          </v-card>
        </v-col>
      </v-row>

 
    </v-container>
  </div>
</template>


<style scoped>
.products h1 {
  color: #6c744f;
  letter-spacing: 0.3rem;
  margin: 7rem 0 1rem 0;
}
.v-card{
    box-shadow: none;
}

.v-card .v-card-title {
  background-color: #EBAE81;
}

.v-card .v-card-subtitle {
  color: black;
  display: flex;
  margin: 0.5rem 0 0 0;
  font-size: 1rem;
}
.v-card .v-card-subtitle span {
  font-weight: 900;
  margin-right: .5rem;
}

.v-icon {
  margin: 3rem 0rem 0rem 6rem;
  color: #E69F5D;
}
</style>
