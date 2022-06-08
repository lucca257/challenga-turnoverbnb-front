<template>
  <v-toolbar
      dark
      prominent
      color="blue-grey darken-1"
  >
    <v-toolbar-title class="flex text-left">
      <h5 class="float-md-right">{{current_month}}, {{current_year}}</h5>
      <h3>Current balance</h3>
      <h4>${{balance}}</h4>
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: "UserBalance",
  data () {
    return {
      balance: 0,
    }
  },
  methods: {
    async getBalance() {
      await fetch(this.base_url+'customer/user/balance', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
          'Content-Type': 'application/json'
        },
      }).then(async (response) => {
        if (response.status !== 200) {
          const errors = await response.json();
          for (let prop in errors) {
            this.displayError = errors[prop]
            break;
          }
          return;
        }
        const data = await response.json();
        this.balance = data.current_balance
      }).catch((err) => {
        console.log(err);
      })
    },
  },
  beforeMount() {
    this.getBalance()
  }
}
</script>

<style scoped>

</style>