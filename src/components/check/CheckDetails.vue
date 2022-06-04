<template>
  <v-card class="mx-auto">
    <v-card-title>
      <v-icon>mdi-card-account-details</v-icon>
      &nbsp; Check details
    </v-card-title>
    <v-card-text>
      <v-container>
        <validation-observer ref="obs" v-slot="{passes}" slim>
          <v-form @submit.prevent="passes(save)">
            <validation-provider name="customer" rules="required" v-slot="{errors}" slim>
              <v-text-field
                  prepend-icon="mdi-account"
                  v-model="customer.name"
                  :error-messages="errors[0]"
                  label="customer"
                  required
              />
            </validation-provider>
            <validation-provider name="customer email" rules="required" v-slot="{errors}" slim>
              <v-text-field
                  prepend-icon="mdi-email"
                  v-model="customer.email"
                  :error-messages="errors[0]"
                  label="customer email"
                  required
              />
            </validation-provider>
            <validation-provider name="account" rules="required" v-slot="{errors}" slim>
              <v-text-field
                  prepend-icon="mdi-card-account-details-outline"
                  v-model="customer.account"
                  :error-messages="errors[0]"
                  label="account"
                  required
              />
            </validation-provider>
            <validation-provider name="reported amount" rules="required" v-slot="{errors}" slim>
              <v-text-field
                  prepend-icon="mdi-cash"
                  v-model="customer.amount"
                  :error-messages="errors[0]"
                  label="reported amount"
                  required
              />
            </validation-provider>
            <checkPreview :imageUrl="customer.imageUrl"/>
            <v-btn class="mt-4">
              <v-icon>mdi-alpha-x-circle</v-icon>
              &nbsp; REJECT
            </v-btn> &nbsp;&nbsp;
            <v-btn type="submit" color="info" class="mt-4">
              <v-icon>mdi-checkbox-marked-circle</v-icon>
              &nbsp; ACCEPT
            </v-btn>
          </v-form>
        </validation-observer>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import {ValidationObserver, ValidationProvider} from "vee-validate";
import CheckPreview from "@/components/check/CheckPreviewComponent";
export default {
  name: "CheckDetails",
  components: { ValidationObserver, ValidationProvider, CheckPreview },
  props: [],
  data () {
    return {
      customer: {
        name: "pedro",
        email: "mock@email.com",
        account: "13456789",
        amount: "9850.00",
        imageUrl: "https://i.pinimg.com/originals/c8/04/f5/c804f569dfbd0fd73bf650d53e072001.jpg",
      },
    }
  },

  methods: {
    reject () {

    },
    save () {
      alert("accept check")
    },
  },
}
</script>

<style scoped>

</style>