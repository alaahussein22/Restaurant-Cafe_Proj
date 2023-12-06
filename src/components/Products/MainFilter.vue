<template>
  <div class="products">
    <v-container>
      <v-row>
        <v-col cols="4">
          <v-card class="mx-auto" max-width="300">
            <h1 class="filter">Gespostete Rezepte</h1>
          </v-card>
        </v-col>

        <v-col cols="8">
          <v-card class="d-flex" style="margin: 3rem -60px">
            <v-icon>mdi-filter</v-icon>
            <div class="category">
              <div class="d-flex justify-content-between">
                <h3>Speiseart :</h3>
                <v-btn class=""> Gebackenes </v-btn>
                <v-btn class="" style="background-color: #ebae81">
                  Dessert
                </v-btn>
                <v-btn class=""> Getränk </v-btn>
                <v-btn class=""> Hauptspeise </v-btn>
                <v-btn class=""> Snacks </v-btn>
              </div>
              <div class="d-flex justify-content-between mt-3">
                <h3>Geschmack :</h3>

                <v-btn class=""> süß </v-btn>
                <v-btn class=""> salzig </v-btn>
                <v-btn class=""> sauer </v-btn>
                <v-btn class=""> herzhaft </v-btn>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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
.v-card {
  box-shadow: none;
  background-color: #fffbf3;
}

.v-card .filter {
  color: #e69f5d;
  font-weight: bold;
  /* padding: 2.2rem; */
  margin: 2rem 0;
  box-shadow: none;
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: justify;
  /* width: 300px; */
}

.v-card .v-card-title {
  background-color: #ffd3b6;
}

.v-card .category .v-btn {
  background-color: #FFD3B6;
  margin: 0 5px;
  box-shadow: none;
  text-transform: capitalize;
}
.v-card .v-card-subtitle {
  color: #5b513c;
  display: flex;
  margin: 0.5rem 0 0 0;
  font-size: 1rem;
}
.v-card .v-card-subtitle span {
  font-weight: 900;
  margin-right: 0.5rem;
}

.v-icon {
  margin: 0rem 1rem 0rem 4rem;
  color: #e69f5d;
  font-size: 3rem;
}
</style>
