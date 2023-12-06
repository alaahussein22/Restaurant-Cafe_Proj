<template>
  <div class="add">
    <v-container>
      <v-row style="margin: 0 17rem">
        <v-col cols="12">
          <h3 class="header">Profil</h3>

          <div class="product d-flex">
            <div class="photo">
              <img src="@/assets/images/woman.jpg" alt="" />
              <br />
              <v-btn type="submit" class="mt-2 upload">Bild auswählen</v-btn>
            </div>

            <div class="addition">
              <v-form fast-fail @submit.prevent>
                <div class="d-flex layout">
                  <h4>Name:</h4>
                  <h5>Abeer</h5>
                  <v-btn type="submit" class="mt-2 post">Name bearbeiten</v-btn>
                </div>

                <div class="d-flex layout">
                  <h4>Passwort:</h4>
                  <h5>*****</h5>
                  <v-btn
                    type="submit"
                    class="mt-2 post"
                    >Passwort bearbeiten</v-btn
                  >
                </div>

                <div class="d-flex layout">
                  <h4>E-Mail:</h4>
                  <h5>Nutzer@mail.de</h5>
                  <v-btn type="submit" class="mt-2 post"
                    >E-Mail bearbeiten</v-btn
                  >
                </div>
                <div class="d-flex layout mt-5">
                  <h4>Biografie:</h4>
                  <v-textarea bg-color="#E9EDC9"
                    >EinLorem ipsum dolor sit amet, consetetur<br />
                    sadipscing elitr, sed diam nonumy eirmod<br />
                    tempor
                  </v-textarea>
                </div>

                <div class="d-flex clear">
                  <v-btn type="submit" class="mt-2">Bio bearbeiten</v-btn>
                </div>
              </v-form>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    firstName: "",
    firstNameRules: [
      (value) => {
        if (value?.length > 3) return true;

        return "First name must be at least 3 characters.";
      },
    ],
    lastName: "123",
    lastNameRules: [
      (value) => {
        if (/[^0-9]/.test(value)) return true;

        return "Last name can not contain digits.";
      },
    ],
  }),
};
</script>

<style scoped>
.add {
  background-color: #fffbf3;
  padding: 2rem 0 0 0;
}

.add .header {
  color: #6c744f;
  font-size: 20px;
  font-weight: bold;
  word-spacing: 6px;
  letter-spacing: 3px;
  margin: auto;
}

.add .product {
  margin: 4rem 0 5rem 0;
}

.add .product .photo {
  margin: 0 4rem;
}
.add .product img {
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  margin: 1.5rem 0;
}

.add .product .upload {
  display: flex;
  box-shadow: none;
  width: 10rem;
  margin: auto;

  background-color: #e9edc9;
  color: #5b513c;
  font-weight: bold;
}

.add .product .addition {
  margin-left: 3rem;
}

.add .product .addition .layout {
  width: 43rem;
  align-items: center;
  margin: 1rem 0;
}

.add .product .addition .layout h4 {
  color: #5b513c;
  font-size: 20px;
  font-weight: bold;
  margin-right: 1rem;
}

.add .product .addition .layout h5 {
  color: #5b513c;
  font-size: 20px;
  font-weight: 300;
  /* margin-left: 2rem; */
}

.add .product .addition .layout .post {
  box-shadow: none;
  width: 15rem;
  background-color: #e9edc9;
  color: #5b513c;
  font-weight: 450;
  margin: 0 6rem;
  text-align: justify;
}

.v-textarea textarea {
  background-color: #e9edc9;
}

.add .product .addition .clear .v-btn {
  box-shadow: none;
  width: 10rem;
  background-color: #e9edc9;
  color: #5b513c;
  font-weight: bold;
  margin: 0 0rem 0 33rem;
}
</style>
