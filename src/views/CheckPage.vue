<template>
  <div class="justify-center" v-if="depositCheck">
    <DepositCheck />
  </div>
  <div class="justify-center" v-else>
    <CheckList />
    <v-btn
        class="mt-3 mx-2 float-right"
        fab
        dark
        color="indigo"
        title="Deposit a check"
        @click="depositCheck = true"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "CheckPage",
  components: {
    'CheckList': () => import('@/components/check/ChecksListComponent'),
    'DepositCheck': () => import('@/components/check/DepositCheckComponent'),
  },
  data () {
    return {
      depositCheck: false
    }
  },
}
</script>