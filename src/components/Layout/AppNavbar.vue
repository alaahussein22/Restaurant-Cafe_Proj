<template>
  <div class="nav">
    <v-app-bar
      color="#F4EAD8"
      style="box-shadow: none; height: 72px; padding: 0.5rem 0"
    >
      <v-container>
        <div class="content">
          <div>
            <router-link to="/">
              <img src="../../assets/images/download (1).png" contain alt="" />
            </router-link>
          </div>

          <div class="heart">
            <router-link to="/Products">
              <h5>
                <v-icon class="me-1 mb-1" aria-hidden="false">mdi-heart</v-icon
                >Dein Kochbuch
              </h5>
            </router-link>
          </div>

          <div>
            <div class="add">
              <router-link to="/addProduct">
                <h3>
                  <v-icon class="me-1" aria-hidden="false">mdi-plus</v-icon
                  >Rezept erstellen
                </h3>
              </router-link>
            </div>
          </div>

          <div>
            <div class="d-flex justify-content-between login">
              <router-link to="/register">
                <v-btn
                  style="
                    height: 25;
                    margin: -6px 0px;
                    color: #6c744f;
                    font-size: 13px;
                    text-transform: capitalize;
                  "
                >
                  Registrieren
                </v-btn>
              </router-link>
              <router-link to="/login">
                <v-btn
                  style="
                    margin: -6px 0px;
                    color: #6c744f;
                    font-size: 13px;
                    text-transform: capitalize;
                  "
                >
                  Anmelden
                </v-btn>
              </router-link>
            </div>
          </div>
        </div>
      </v-container>
    </v-app-bar>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 7rem;
}
.nav a {
  text-decoration: none;
  color: #5b513c;
}

img {
  width: 65px;
  height: 65px;
}
.add h3 {
  color: #6c744f;
  font-size: 21px;
  font-weight: bold;
  cursor: pointer;
  /* margin-right: 10rem; */
}
.add a {
  text-decoration: none;
}
.add:hover {
  background-color: #f4ead8;
}

.heart h5,
.log {
  font-size: 13px;
  color: #6c744f;
  /* margin-right: 10rem; */
}

.login {
  cursor: pointer;
}
</style>
