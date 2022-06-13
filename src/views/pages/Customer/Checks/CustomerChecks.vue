<template>
  <v-row >
    <v-col cols="12" md="12">
      <current-balance />
    </v-col>
    <v-col cols="12" md="12">
      <v-card id="account-setting-card">
        <!-- tabs -->
        <v-tabs
          v-model="tab"
          show-arrows
        >
          <v-tab
            v-for="tab in tabs"
            :key="tab.icon"
          >
            <v-icon
              size="20"
              class="me-3"
            >
              {{ tab.icon }}
            </v-icon>
            <span>{{ tab.title }}</span>
          </v-tab>
        </v-tabs>

        <!-- tabs item -->
        <v-tabs-items v-model="tab">
          <v-tab-item><CheckList :transactions="pendingTransactions" /></v-tab-item>
          <v-tab-item><CheckList :transactions="acceptedTransactions" /></v-tab-item>
          <v-tab-item><CheckList :transactions="rejectedTransactions" /></v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { ref } from '@vue/composition-api/dist/vue-composition-api'
import { mdiDotsHorizontal, mdiCloseThick, mdiCheckOutline } from '@mdi/js'
import CheckList from './CheckList.vue'
// eslint-disable-next-line import/extensions
import CurrentBalance from '@/views/pages/Customer/balance/CurrentBalance'

export default {
  name: 'CustomerChecks',
  components: {
    CurrentBalance,
    // eslint-disable-next-line vue/no-unused-components
    CheckList,

  },
  data() {
    return {
      tab: ref(''),
      tabs: [
        { title: 'Pending', icon: mdiDotsHorizontal },
        { title: 'Accepted', icon: mdiCheckOutline },
        { title: 'Rejected', icon: mdiCloseThick },
      ],
      transactions: [
        {
          id: 1,
          description: 'Google Adsense',
          value: '50,00',
          type: 'expense',
          status: 'pending',
        },
        {
          id: 2,
          description: 'Github Enterprise',
          value: '1850,00',
          type: 'expense',
          status: 'pending',
        },
        {
          id: 3,
          description: 'Upgrade Slack Plan',
          value: '40,00',
          type: 'expense',
          status: 'confirmed',
        },
        {
          id: 4,
          description: 'Digital Ocean',
          value: '21,00',
          type: 'income',
          status: 'rejected',
        },
      ],
      pendingTransactions: [],
      acceptedTransactions: [],
      rejectedTransactions: [],
    }
  },
  methods: {
    filterTransactions() {
      this.pendingTransactions = this.transactions.filter(item => item.status === 'pending')
      this.acceptedTransactions = this.transactions.filter(item => item.status === 'confirmed')
      this.rejectedTransactions = this.transactions.filter(item => item.status === 'rejected')
    },
  },
  beforeMount() {
    this.filterTransactions()
  },
}
</script>

<style scoped>

</style>
