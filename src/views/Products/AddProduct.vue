<template>
  <div class="add">
    <v-container>
      <v-row style="margin: 0 7rem">
        <v-col cols="12">
          <h3 class="header">
            <span>Hi,</span>Abeer!
            <br />
            Hier kannst du ein Rezept erstellen
          </h3>

          <div class="product d-flex">
            <div>
              <img src="@/assets/images/cup.png" alt="" />
              <br />
              <v-btn type="submit" class="mt-2 upload">Bild auswählen</v-btn>
            </div>

            <div class="addition">
              <v-form fast-fail @submit.prevent>
                <div class="d-flex layout">
                  <h4>Name:</h4>
                  <v-text-field
                    v-model="firstName"
                    :rules="firstNameRules"
                    color="primary"
                    variant="underlined"
                  ></v-text-field>
                </div>

                <div class="d-flex layout">
                  <h4>Geschmacksrichtung:</h4>
                  <v-select
                    color="primary"
                    variant="underlined"
                    :items="[
                      'California',
                      'Colorado',
                      'Florida',
                      'Georgia',
                      'Texas',
                      'Wyoming',
                    ]"
                  ></v-select>
                </div>

                <div class="d-flex layout">
                  <h4>Speiseart:</h4>
                  <v-select
                    color="primary"
                    variant="underlined"
                    :items="[
                      'California',
                      'Colorado',
                      'Florida',
                      'Georgia',
                      'Texas',
                      'Wyoming',
                    ]"
                  ></v-select>
                </div>

                <div class="d-flex layout">
                  <h4>Dauer:</h4>
                  <v-text-field
                    v-model="firstName"
                    :rules="firstNameRules"
                    color="primary"
                    variant="underlined"
                  ></v-text-field>
                </div>

                <div class="d-flex layout">
                  <h4>Zubereitung:</h4>
                  <v-textarea></v-textarea>
                </div>

                <div class="d-flex clear">
                  <v-btn type="submit" class="mt-2">Rezept posten</v-btn>
                  <v-btn type="submit" class="mt-2">Verwerfen</v-btn>
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
  color: #5b513c;
  font-size: 16px;
  font-weight: 400;
  word-spacing: 6px;
  letter-spacing: 3px;
  margin: auto;
}

.add .header span {
  color: #5b513c;
  font-weight: bold;
}
.add .product {
  margin: 4rem 0 5rem 0;
}
.add .product img {
  width: 20rem;
  height: 25rem;
  border-radius: 16px;
  margin: 1.5rem 0;
}

.add .product .upload {
  display: flex;
  box-shadow: none;
  width: 10rem;
  padding: 1.5rem 0;
  background-color: #e9edc9;
  color: #5b513c;
  font-weight: bold;
}

.add .product .addition {
  margin-left: 5rem;
}

.add .product .addition .layout {
  width: 33rem;
  align-items: center;
}

.add .product .addition .layout .v-input--horizontal {
  margin-left: 5rem;
}
.add .product .addition .layout h4 {
  color: #5b513c;
  font-size: 20px;
  font-weight: bold;
  margin-right: 3rem;
}

.add .product .addition .clear {
  justify-content: space-between;
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
}
</style>
