<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>
              <h2>Register</h2>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <validation-observer ref="obs" v-slot="{passes}" slim>
              <v-form @submit.prevent="passes(submit)">
                <validation-provider name="username" rules="required" v-slot="{errors}" slim>
                  <v-text-field
                      prepend-icon="person"
                      v-model="username"
                      :error-messages="errors[0]"
                      label="username"
                      required
                  />
                </validation-provider>
                <validation-provider name="email" rules="required" v-slot="{errors}" slim>
                  <v-text-field
                      prepend-icon="mail"
                      v-model="email"
                      :error-messages="errors[0]"
                      label="email"
                      type="email"
                      required
                  />
                </validation-provider>
                <validation-provider name="password" rules="required" v-slot="{errors}" slim>
                  <v-text-field
                      prepend-icon="lock"
                      v-model="password"
                      :error-messages="errors[0]"
                      label="password"
                      type="password"
                      required
                  />
                </validation-provider>
                <v-spacer />&nbsp;&nbsp;
                <v-btn type="submit" color="info">REGISTER</v-btn>
              </v-form>
            </validation-observer>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "RegisterComponent",
  data: () => ({
    username: '',
    password: '',
    email: ''
  }),
  methods: {
    async submit() {
      console.log(this.base_url)
      await fetch(this.base_url+'auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
          email: this.email
        })
      }).then(async (response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
              response.status);
          return;
        }
        const data = await response.json();
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('role', data.role);
        this.redirectToRouteByRole();
      }).catch((err) => {
        console.log(err);
      })
    },
    redirectToRouteByRole(){
      if(localStorage.getItem('role') === 'admin') {
        this.$router.push('admin/deposits');
        return;
      }
      this.$router.push("/");
    },
    isLoggedIn() {
      if(localStorage.getItem('access_token') !== null) {
        this.redirectToRouteByRole();
      }
    }
  },
}
</script>

<style scoped>

</style>