<template>
  <div>
    <v-alert type="warning"
             :value="displayError"
             dismissible>
      {{displayError}}
    </v-alert>
    <v-card>
      <balanceComponent />
      <v-card-text>
        <validation-observer ref="obs" v-slot="{passes}" slim>
          <v-form @submit.prevent="passes(save)">
            <validation-provider name="amount" rules="required" v-slot="{errors}" slim>
              <v-text-field
                  prepend-icon="mdi-cash"
                  v-model="amount"
                  :error-messages="errors[0]"
                  label="amount"
                  type="number"
                  required
              />
            </validation-provider>
            <validation-provider name="date" :rules="'required'" v-slot="{errors}" slim>
              <v-menu
                  ref="wc_menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                      prepend-icon="mdi-calendar"
                      label="date"
                      name="date"
                      v-model="date"
                      readonly
                      :error-messages="errors[0]"
                      v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="wc_menu = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.wc_menu.save(date)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </validation-provider>
            <validation-provider name="description" rules="required" v-slot="{errors}" slim>
              <v-text-field
                  prepend-icon="mdi-star"
                  v-model="description"
                  :counter="25"
                  :error-messages="errors[0]"
                  label="description"
                  required
              />
            </validation-provider>
            <v-btn @click="cancel()">
              <v-icon>mdi-alpha-x-circle</v-icon>
              &nbsp; CANCEL
            </v-btn> &nbsp;&nbsp;
            <v-btn type="submit" color="info">ADD PURCHASE</v-btn>
          </v-form>
        </validation-observer>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "AddPurchaseComponent",
  data: () => ({
    amount: "",
    description: "",
    date: "",
    wc_menu: false
  }),
  components: {
    'balanceComponent': () => import('@/components/balance/UserBalance.vue'),
  },
  methods: {
    cancel() {
      this.$parent.addPurchase = false;
    },
    async save() {
      await fetch(this.base_url+'customer/purchases', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          amount: this.amount,
          description: this.description,
          purchase_at: this.date
        })
      }).then(async (response) => {
        if (response.status !== 200) {
          const errors = await response.json();
          for (let prop in errors) {
            this.displayError = errors[prop]
            break;
          }
          return;
        }
        this.$router.go('/')
      }).catch((err) => {
        console.log(err);
      })
    }
  }
}
</script>

<style scoped>

</style>