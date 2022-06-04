<template>
  <div>
    <h4>Check deposit preview</h4>
    <v-img :src="imageUrl" style="border: 1px dashed #add8e6; min-height: 250px" />
  </div>
</template>

<script>
export default {
  props: ['imageUrl'],
  name: "CheckPreview"
}
</script>

<style scoped>

</style>