<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-card-text>
            <v-card-title>You signed out of your accont </v-card-title>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "LogoutPage",
  methods: {
    logout() {
      localStorage.removeItem('access_token')
      localStorage.removeItem('role')
    }
  },
  beforeMount(){
    this.logout()
  },
}
</script>

<style scoped>

</style>