<template>
  <div class="nav">
    <v-app-bar
      color="#F4EAD8"
      style="box-shadow: none; height: 72px; padding: 0.5rem 0"
    >
      <v-container fluid>
        <v-row>
          <v-col cols="2">
            <router-link to="/">
              <img src="../../assets/images/chef.jpg" contain alt="" />
              <br />
              <span>Restaurant</span>
            </router-link>
          </v-col>

          <v-col cols="7">
            <div class="add">
              <router-link to="/addProduct">
                <h3><v-icon>mdi-plus</v-icon>Add Product</h3>
              </router-link>
            </div>
          </v-col>

          <v-col cols="3">
            <div class="d-flex justify-content-between login">
              <div class="heart d-flex">
                <h4><v-icon>mdi-heart</v-icon> Abeer Mahmoud</h4>
              </div>
              <router-link to="/login">
                <v-btn
                  style="
                    height: 25;
                    margin: -6px 50px;
                    color: #6c744f;
                    font-size: 18px;
                  "
                >
                  Login
                </v-btn>
              </router-link>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<style scoped>
.nav a {
  text-decoration: none;
  color: #5b513c;
}
img {
  width: 50px;
  border-radius: 50%;
  height: auto;
}
.add h3 {
  color: #6c744f;
  font-size: 21px;
  font-weight: bold;
  cursor: pointer;
  margin: 0.5rem 0;
}
.add a {
  text-decoration: none;
}
.add:hover {
  background-color: #f4ead8;
}

.login {
  margin: 0.8rem 0;
  cursor: pointer;
}

.login .heart h4 {
  color: #5b513c;
  font-weight: 400;
}
</style>
