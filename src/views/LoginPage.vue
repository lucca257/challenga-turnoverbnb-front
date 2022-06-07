<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
        <loginComponent />
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "LoginPage",
  components: {
    'loginComponent': () => import('@/components/login/LoginComponent')
  },
  data: () => ({
    form: {
      login: '',
      password: ''
    }
  }),
  methods : {
    async submit() {
      if(this.form.login === ''){
        alert('login field is required')
        return;
      }
      if(this.form.password === ''){
        alert('password field is required')
        return;
      }
      console.log(this.form)
    }
  }
}
</script>

<style scoped>

</style>