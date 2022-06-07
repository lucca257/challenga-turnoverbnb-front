<template>
  <registerComponent />
</template>

<script>
export default {
  name: "RegisterPage",
  components : {
    'registerComponent' : () => import('@/components/login/RegisterComponent.vue')
  }
}
</script>

<style scoped>

</style>