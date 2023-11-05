<template>
  <div class="login">
    <v-container>
      <v-row>
        <v-col cols="3"> </v-col>
        <v-col cols="6">
          <h3>Login</h3>
          <v-form fast-fail @submit.prevent>
            <v-text-field
              v-model="firstName"
              label="Name"
              :rules="firstNameRules"
            ></v-text-field>

            <v-text-field
              v-model="lastName"
              label="Password"
              type="password"
              :rules="lastNameRules"
            ></v-text-field>

            <v-btn type="submit" class="mt-2">Submit</v-btn>
            <div class="make_account flex-start">
              <h5 class="account">Do You Have Account?</h5>
              <router-link to="/register">
                <h5 class="register">Register</h5>
              </router-link>
            </div>
          </v-form>
        </v-col>

        <v-col cols="6"> </v-col>
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
.login {
  background-color: #fffbf3;
  padding: 7rem 0 0 0;
}

.login h3 {
  color: #5b513c;
  font-size: 27px;
}
.login .v-text-field input {
  background-color: #fffbf3;
}
.v-input--horizontal,
.v-btn {
  margin: 2.2rem;
}

.login .v-btn {
  background-color: #e9edc9;
  padding: 1.2rem 0 2.2rem 0;
  box-shadow: none;
  width: 88%;
  font-weight: bold;
  color: #5b513c;
}

.make_account .account {
  color: #6c744f;
  font-weight: 400;
}
.make_account .register {
  color: #6c744f;
  font-weight: bold;
  text-decoration: none;
}
</style>
