<script setup>
import AppAbout from "./AboutView.vue";
</script>

<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="6" class="header">
          <h1>RWilkommen bei <span class="mt-5">KochKladde!</span></h1>
          <p>
            EinLorem ipsum dolor sit amet, consetetur sadipscing<br />
            elitr, sed diam nonumy eirmod tempor invidunt ut <br />
            labore et dolore magna aliquyam erat, sed diam<br />
            voluptua.
          </p>
          <img src="@/assets/images/salad.jpg" alt="" />
        </v-col>

        <v-col cols="6" class="header_bottom">
          <img src="@/assets/images/cookies-1835414_1280.jpg" alt="" />
          <h1>Rezepte <span class="ers">erstellen</span> <br />und<span class="spe"> speichern</span></h1>
          <p>
            EinLorem ipsum dolor sit amet, consetetur sadipscing<br />
            elitr, sed diam nonumy eirmod tempor invidunt ut <br />
            labore et dolore magna aliquyam erat, sed diam<br />
            voluptua.
          </p>
        </v-col>
      </v-row>
    </v-container>
    <AppAbout />
  </div>
</template>

<style scoped>
.home {
  background-color: #fffbf3;
}
.home .header {
  margin-top: 3.5rem;
}
.home .header h1 {
  color: #6c744f;
  letter-spacing: 0.5rem;
  margin-right: 4rem;
  margin-bottom: 1rem;
  font-weight: bolder;
  font-size: 60px;
}
.home .header h1 span {
  margin-left: -8rem;
}
.home .header p {
  color: #5b513c;
  letter-spacing: 0.1rem;
  line-height: 2rem;
  font-size: 20px;
  text-align: justify;
  margin-left: 10rem;
}
.home .header_bottom h1 {
  color: #6c744f;
  letter-spacing: 0.3rem;
  margin-bottom: 1rem;
  font-weight: bolder;
  margin-top: 1rem;
  font-size: 50px;
  text-align: justify;
  margin-left: 10rem;

}
.header_bottom p {
  color: #5b513c;
  letter-spacing: 0.1rem;
  line-height: 2rem;
  font-size: 20px;
  text-align: justify;
  margin-left: 0rem;
}

.header_bottom .ers{
  color:#E69F5D
}

.header_bottom .spe{
  color:#B1BB8F
}
.home img {
  margin-top: 3.5rem;
  border: 10px solid #d9a279;
  border-radius: 5rem;
  width: 55%;
  height: 65%;
  background-position: center;
  background-size: contain;
}
</style>
