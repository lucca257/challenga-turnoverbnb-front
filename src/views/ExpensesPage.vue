<template>
  <div class="justify-center" v-if="addPurchase">
    <AddPurchase />
  </div>

  <div class="justify-center" v-else>
    <ExpensesList />
    <v-btn
        class="mt-3 mx-2 float-right"
        fab
        dark
        color="indigo"
        title="Add Purchase"
        @click="addPurchase = true"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "ExpensesPage",
  components: {
    'ExpensesList': () => import('@/components/expenses/ExpensesListComponent.vue'),
    'AddPurchase': () => import('@/components/expenses/AddPurchaseComponent.vue'),
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