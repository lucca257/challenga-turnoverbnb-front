<template>
  <v-toolbar
      dark
      prominent
      color="blue-grey darken-1"
  >
    <v-toolbar-title class="flex text-left">
          <h2>{{current_month}}, {{current_year}}</h2>
<!--      <h5 class="float-md-right">{{current_month}}, {{current_year}}</h5>-->
<!--      <h3>Current balance</h3>-->
<!--      <h4>$ 6500,00</h4>-->
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: "UserBalance"
}
</script>

<style scoped>

</style>