<template>
  <v-app>
    <balanceComponent/>
  </v-app>
</template>

<script>

  export default {
    name: 'Home',

    components: {
      'balanceComponent': () => import('@/components/balance/BalanceComponent.vue'),
    },
  }
</script>
