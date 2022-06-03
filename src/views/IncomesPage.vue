<template>
  <div class="justify-center">
    <incomes-list />
  </div>
</template>

<script>
export default {
  name: "IncomesPage",
  components: {
    'IncomesList': () => import('@/components/incomes/IncomesListComponent'),
  },
  data () {
    return {
      addPurchase: false
    }
  },
}
</script>

<style scoped>

</style>