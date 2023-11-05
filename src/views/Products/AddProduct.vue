<template>
  <div class="add">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h3 class="header">
            Hi, Abeer!
            <br />
            You Can Add Product Here
          </h3>

          <div class="product d-flex">
            <div>
              <img src="@/assets/images/chef.jpg" alt="" />
              <br />
              <v-btn type="submit" class="mt-2 upload">Upload</v-btn>
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
                  <h4>ProductType:</h4>
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
                  <h4>Specialist:</h4>
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
                  <h4>Quantity:</h4>
                  <v-text-field
                    v-model="firstName"
                    :rules="firstNameRules"
                    color="primary"
                    variant="underlined"
                  ></v-text-field>
                </div>

                <div class="d-flex layout">
                  <h4>Comment:</h4>
                  <v-textarea color="#E9EDC9"></v-textarea>
                </div>
                <div class="d-flex clear">
                  <v-btn type="submit" class="mt-2">Add</v-btn>
                  <v-btn type="submit" class="mt-2">Clear</v-btn>
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

.add .product {
  margin: 4rem 0 5rem 0;
}
.add .product img {
  width: 20rem;
  height: 25rem;
  border-radius: 16px;
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
  margin-left: 6rem;
}

.add .product .addition .layout {
  width: 35rem;
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

.add .product .addition .clear .v-btn{
  box-shadow: none;
  width: 10rem;
  background-color: #e9edc9;
  color: #5b513c;
  font-weight: bold;
}
</style>
