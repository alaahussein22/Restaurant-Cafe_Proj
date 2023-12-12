<script setup>
import AppAbout from "./AboutView.vue";
</script>

<template>
  <div class="home">
    <v-container>
      <div class="content">
        <div class="d-flex header">
          <span>
            <h1>
              Wilkommen bei <br />
              <span style="margin-right: 3.5rem">KochKladde!</span>
            </h1>
            <p>
              EinLorem ipsum dolor sit amet, consetetur sadipscing<br />
              elitr, sed diam nonumy eirmod tempor invidunt ut <br />
              labore et dolore magna aliquyam erat, sed diam<br />
              voluptua.
            </p>
          </span>
          <img
            src="@/assets/images/salad.jpg"
            alt=""
            style="margin-right: 6rem"
          />
        </div>

        <div class="d-flex header_bottom">
          <img
            src="@/assets/images/cookies-1835414_1280.jpg"
            alt=""
            style="margin-left: 7rem"
          />
          <span >
            <h1>
              Rezepte <span class="ers">erstellen</span> <br />und<span
                class="spe"
              >
                speichern</span
              >
            </h1>
            <p>
              EinLorem ipsum dolor sit amet, consetetur sadipscing<br />
              elitr, sed diam nonumy eirmod tempor invidunt ut <br />
              labore et dolore magna aliquyam erat, sed diam<br />
              voluptua.
            </p>
          </span>
        </div>
      </div>
    </v-container>
  <AppAbout />
  </div>
</template>

<style scoped>
.home {
  background-color: #fffbf3;
}

.home .content {
  margin: 3rem 0;
}
.home .content .header,
.home .content .header_bottom {
  justify-content: space-between;
  margin: 0rem;
}
.home .content .header h1 {
  color: #6c744f;
  letter-spacing: 0.3rem;
  margin-bottom: 1rem;
  font-weight: bolder;
  font-size: 50px;
}

.home .content .header p {
  color: #5b513c;
  letter-spacing: 0.1rem;
  line-height: 2rem;
  font-size: 17px;
  text-align: justify;
  margin-left: 10rem;
}


.home .content .header_bottom h1 {
  color: #6c744f;
  letter-spacing: 0.3rem;
  margin-bottom: 1rem;
  font-weight: bolder;
  margin-top: 1rem;
  font-size: 50px;
  text-align: justify;
  margin-left: 10rem;
}
.home .content .header_bottom p {
  color: #5b513c;
  letter-spacing: 0.1rem;
  line-height: 2rem;
  font-size: 20px;
  text-align: justify;
}

.home .content .header_bottom .ers {
  color: #e69f5d;
}

.home .content .header_bottom .spe {
  color: #b1bb8f;
}
.home .content img {
  border: 10px solid #d9a279;
  border-radius: 5rem;
  width: 21rem;
  height: 21rem;
  background-position: center;
  background-size: contain;
}
</style>
