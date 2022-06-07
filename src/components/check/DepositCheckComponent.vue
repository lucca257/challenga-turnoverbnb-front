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
                  type="number"
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
            <validation-provider name="upload check deposit" rules="required" v-slot="{errors}" slim>
            <v-file-input
                v-model="files"
                type="file"
                label="upload check deposit"
                hint="Add a picture of the check deposit"
                :error-messages="errors[0]"
                required
                @change="onFileChange"
            />
            </validation-provider>
            <checkPreview :imageUrl="imageUrl"/>
            <v-btn class="mt-3" @click="cancel()">
              <v-icon>mdi-alpha-x-circle</v-icon>
              &nbsp; CANCEL
            </v-btn> &nbsp;&nbsp;
            <v-btn type="submit" color="info" class="mt-3">ADD PURCHASE</v-btn>
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
    'checkPreview': () => import('@/components/check/CheckPreviewComponent.vue'),
  },
  data: () => ({
    amount: "",
    description: "",
    files: null,
    imageUrl:""
  }),
  methods: {
    cancel() {
      this.$parent.depositCheck = false;
    },
    async save() {
      const formData = new FormData();
      formData.append('amount', this.amount);
      formData.append('description', this.description);
      formData.append('image', this.files);
      console.log(formData)
      await fetch(this.base_url+'customer/deposits', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        },
        body: formData
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
        this.displayError = err.message;
      })
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