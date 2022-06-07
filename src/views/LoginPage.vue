<template>
  <loginComponent />
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