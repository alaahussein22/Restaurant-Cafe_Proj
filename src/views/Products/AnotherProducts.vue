<script setup>
import Filter from "../../components/Products/MainFilter.vue";
</script>

<template>
  <div class="products">
    <v-container>
      <Filter />



      <v-row style="margin:0 7rem">
        <v-col cols="3">
          <v-card class="mx-auto" max-width="300">
            <v-card-title>Omas Apfelkuchen </v-card-title>

            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="400px"
              cover
            ></v-img>
            <div
              class="d-flex pt-1 pb-2"
              style="background-color: #ffd3b6; border-color: #ffd3b6"
            >
            <div>
                <v-card-subtitle>
                  <span>Kategorie: </span> Gebackenes</v-card-subtitle
                >
                <v-card-subtitle> <span>Geschmack:</span> süß</v-card-subtitle>
                <v-card-subtitle> <span>Dauer:</span> 11 Min</v-card-subtitle>
              </div>
              <v-icon>mdi-pen</v-icon>
            </div>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="mx-auto" max-width="300">
            <v-card-title>Omas Apfelkuchen </v-card-title>

            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="400px"
              cover
            ></v-img>
            <div
              class="d-flex pt-1 pb-2"
              style="background-color: #ffd3b6; border-color: #ffd3b6"
            >
            <div>
                <v-card-subtitle>
                  <span>Kategorie: </span> Gebackenes</v-card-subtitle
                >
                <v-card-subtitle> <span>Geschmack:</span> süß</v-card-subtitle>
                <v-card-subtitle> <span>Dauer:</span> 11 Min</v-card-subtitle>
              </div>
              <v-icon>mdi-pen</v-icon>
            </div>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="mx-auto" max-width="300">
            <v-card-title>Omas Apfelkuchen </v-card-title>

            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="400px"
              cover
            ></v-img>
            <div
              class="d-flex pt-1 pb-2"
              style="background-color: #ffd3b6; border-color: #ffd3b6"
            >
            <div>
                <v-card-subtitle>
                  <span>Kategorie: </span> Gebackenes</v-card-subtitle
                >
                <v-card-subtitle> <span>Geschmack:</span> süß</v-card-subtitle>
                <v-card-subtitle> <span>Dauer:</span> 11 Min</v-card-subtitle>
              </div>
              <v-icon>mdi-pen</v-icon>
            </div>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="mx-auto" max-width="300">
            <v-card-title>Omas Apfelkuchen </v-card-title>

            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="400px"
              cover
            ></v-img>
            <div
              class="d-flex pt-1 pb-2"
              style="background-color: #ffd3b6; border-color: #ffd3b6"
            >
            <div>
                <v-card-subtitle>
                  <span>Kategorie: </span> Gebackenes</v-card-subtitle
                >
                <v-card-subtitle> <span>Geschmack:</span> süß</v-card-subtitle>
                <v-card-subtitle> <span>Dauer:</span> 11 Min</v-card-subtitle>
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
.v-card {
  box-shadow: none;
}

.v-card .v-card-title {
  background-color: #ebae81;
}

.v-card .v-card-subtitle {
  color: black;
  display: flex;
  margin: 0.5rem 0 0 0;
  font-size: 1rem;
}
.v-card .v-card-subtitle span {
  font-weight: 900;
  margin-right: 0.5rem;
}

.v-icon {
  margin: 3rem 0rem 0rem 6rem;
  color: #e69f5d;
}
</style>
