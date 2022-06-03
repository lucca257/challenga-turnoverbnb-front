<template>
  <v-card>
    <v-toolbar
        dark
        prominent
        color="blue-grey darken-1"
    >
      <v-toolbar-title class="flex text-left">
        <h3>Current balance</h3>
        <h4>$ 6500,00</h4>
      </v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <validation-observer ref="obs" v-slot="{passes}" slim>
        <v-form @submit.prevent="passes(save)">
          <validation-provider name="amount" rules="required" v-slot="{errors}" slim>
            <v-text-field
                prepend-icon="mdi-cash"
                v-model="amount"
                :error-messages="errors[0]"
                label="amount"
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
          <v-btn type="submit" color="info">ADD PURCHASE</v-btn>
        </v-form>
      </validation-observer>
    </v-card-text>
  </v-card>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  name: "AddPurchaseComponent",
  data: () => ({
    amount: "",
    description: "",
    date: "",
    wc_menu: false
  }),
  components: { ValidationObserver, ValidationProvider },
  methods: {
    save() {
      alert("add purchase")
    }
  }
}
</script>

<style scoped>

</style>