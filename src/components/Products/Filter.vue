<template>
    <div class="products">
   
      <v-container>
  
        <v-row>
          <v-col cols="4">
            <v-card class="mx-auto" max-width="300" >
              <v-btn class="filter"> Filter Products </v-btn>
            </v-card>
  
          </v-col>

          <v-col cols="8">
            <v-card class="d-flex" style="    margin: 3rem -60px;">
              <v-icon>mdi-filter</v-icon>
              <div class="category ">
              <div class="d-flex justify-content-between">
                <h3>Category:</h3>
              <v-btn class=""> sub </v-btn>
              <v-btn class=""> sub </v-btn>
              <v-btn class=""> sub </v-btn>
              <v-btn class=""> sub </v-btn>
              <v-btn class=""> sub </v-btn>
            </div>
            <div class="d-flex justify-content-between mt-3">
              <h3>Type:</h3>
  
              <v-btn class=""> sub </v-btn>
              <v-btn class=""> sub </v-btn>
              <v-btn class=""> sub </v-btn>
              <v-btn class=""> sub </v-btn>
             
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
 
  .v-card{
      box-shadow: none;
  }

  .v-card .filter{
    background-color: #F8F0E0;
      color: #5B513C;
      font-weight: bold;
      padding: 2.2rem;
      margin: 3rem 0;
      box-shadow: none;
      align-items: center;
      justify-content: center;
      display: flex;
      width: 300px;
  
  }
  
  .v-card .v-card-title {
    background-color: #b1bb8f;
  }

.v-card .category .v-btn{
    background-color:   #E9EDC9;
    margin: 0 5px;
    box-shadow: none;

}
  .v-card .v-card-subtitle {
    color: #5b513c;
    display: flex;
    margin: 0.5rem 0 0 0;
    font-size: 1rem;
  }
  .v-card .v-card-subtitle span {
    font-weight: 900;
    margin-right: .5rem;
  }
  
  .v-icon {
    margin: 1rem 1rem 0rem 4rem;
    color: #b1bb8f;
    font-size: 3rem;
  }
  </style>
  