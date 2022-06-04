<template>
  <ChecksControl />
</template>

<script>
export default {
  name: "ChecksControlPage",
  components: {
    'ChecksControl': () =>  import('@/components/check/ChecksControlComponent.vue'),
  }
}
</script>

<style scoped>

</style>