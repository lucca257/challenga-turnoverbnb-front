<template>
  <v-card class="mx-auto">
    <balanceComponent />
    <v-card-text>
      <v-container>
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
              <p class="font-weight-regular">*The money will be deposited in your account once the check is accepted</p>
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
            <v-file-input v-model="files" type="file" class="input" label="Upload check" hint="Add a picture of the check deposit" outlined dense @change="onFileChange" />
            <v-col>
              <h4>Check preview</h4>
              <v-img :src="imageUrl" style="border: 1px dashed lightblue; min-height: 250px" />
            </v-col>
            <v-btn type="submit" color="info">ADD PURCHASE</v-btn>
          </v-form>
        </validation-observer>
      </v-container>
    </v-card-text>
  </v-card>

</template>

<script>
import {ValidationObserver, ValidationProvider} from "vee-validate";

export default {
  name: "DepositCheck",
  components: {
    ValidationObserver,
    ValidationProvider,
    'balanceComponent': () => import('@/components/balance/UserBalance.vue'),
  },
  data: () => ({
    amount: "",
    description: "",
    files: null,
    imageUrl:""
  }),
  methods: {
    save() {
      alert("add purchase")
    },
    onFileChange(file) {
      if (!file) {
        this.imageUrl = "";
        return;
      }
      const reader = new FileReader();

      reader.onload = e => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
</script>

<style scoped>

</style>