<template>
  <v-card class="mx-auto">
    <v-card-title>
      <v-icon>mdi-card-account-details</v-icon>
      &nbsp; Check details {{ details}}
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
                  readonly
                  label="customer"
                  required
              />
            </validation-provider>
            <validation-provider name="customer email" rules="required" v-slot="{errors}" slim>
              <v-text-field
                  prepend-icon="mdi-email"
                  v-model="customer.email"
                  :error-messages="errors[0]"
                  readonly
                  label="customer email"
                  required
              />
            </validation-provider>
            <validation-provider name="account" rules="required" v-slot="{errors}" slim>
              <v-text-field
                  prepend-icon="mdi-card-account-details-outline"
                  v-model="customer.account"
                  :error-messages="errors[0]"
                  readonly
                  label="account"
                  required
              />
            </validation-provider>
            <validation-provider name="reported amount" rules="required" v-slot="{errors}" slim>
              <v-text-field
                  prepend-icon="mdi-cash"
                  v-model="customer.amount"
                  :error-messages="errors[0]"
                  readonly
                  label="reported amount"
                  required
              />
            </validation-provider>
            <checkPreview :imageUrl="customer.imageUrl"/>
            <v-btn class="mt-4" @click="reject()">
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
import CheckPreview from "@/components/check/CheckPreviewComponent";
export default {
  name: "CheckDetails",
  components: { CheckPreview },
  props: ['details'],
  watch: {
    details: {
      immediate: true,
      deep: true,
      handler() {
        this.requestDeposit()
      }
    }
  },
  data () {
    return {
      customer: {
        name: "",
        email: "",
        account: "",
        amount: "",
        imageUrl: "https://i.pinimg.com/originals/c8/04/f5/c804f569dfbd0fd73bf650d53e072001.jpg",
      },
      test: null
    }
  },

  methods: {
    async requestDeposit() {
      await fetch(this.base_url+'admin/deposits/'+this.details, {
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
        this.customer.name = data.user.username;
        this.customer.email = data.user.email;
        this.customer.account = data.user.id;
        this.customer.amount = data.amount;
      }).catch((err) => {
        this.displayError = err.message;
      })
    },
    reject () {
      this.$parent.checkDetails = false;
    },
    save () {
      alert("accept check")
    },
  },
}
</script>

<style scoped>

</style>