<template>
  <ExpensesList />
</template>

<script>
export default {
  name: "ExpensesPage",
  components: {
    'ExpensesList': () => import('@/components/expenses/ExpensesListComponent.vue'),
  },
}
</script>

<style scoped>

</style>