<template>
  <div class="justify-center" v-if="depositCheck">
    <depositCheck />
  </div>

  <div class="justify-center" v-else-if="addPurchase">
    <addPurchase />
  </div>

  <div class="justify-center" v-else>
    <v-card class="mx-auto">
      <balanceComponent />
      <v-list two-line>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="indigo">
              mdi-arrow-up-right-bold
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Incomes</v-list-item-title>
            <v-list-item-subtitle >$7110,00</v-list-item-subtitle>
          </v-list-item-content>

          <v-btn @click="depositCheck = true">
            <v-icon>mdi-plus</v-icon>
            DEPOSIT A CHECK
          </v-btn>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="indigo">
              mdi-arrow-down-right-bold
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Expenses</v-list-item-title>
            <v-list-item-subtitle>$780,00</v-list-item-subtitle>
          </v-list-item-content>

          <v-btn @click="addPurchase = true">
            <v-icon>mdi-plus</v-icon>
            <h4>PURCHASE</h4>
          </v-btn>
        </v-list-item>

        <v-divider dark></v-divider>
        <v-card-title>
          <v-icon>mdi-swap-vertical-bold</v-icon>
          Transactions
        </v-card-title>

        <v-simple-table>
          <template v-slot:default>
            <thead>
            <tr>
              <th class="text-left">
                Title
              </th>
              <th class="text-left">
                Date
              </th>
              <th class="text-left">
                Hour
              </th>
              <th class="text-left">
                Value
              </th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="item in transactions"
                :key="item.title"
            >
              <td>{{ item.title }}</td>
              <td>{{ item.date }}</td>
              <td>{{ item.hour }}</td>
              <td>{{ item.value }}</td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "BalanceComponent",
  components: {
    'balanceComponent': () => import('@/components/balance/UserBalance.vue'),
    'depositCheck': () => import('@/components/check/DepositCheckComponent.vue'),
    'addPurchase': () => import('@/components/expenses/AddPurchaseComponent.vue'),
  },
  data () {
    return {
      depositCheck: false,
      addPurchase: false,
      transactions : [
        {
          title: 'Salary',
          date: '01/01/2019',
          hour: '10:00',
          value: '$ 6500,00'
        },
        {
          title: 'Salary',
          date: '01/01/2019',
          hour: '10:00',
          value: '$ 6500,00'
        },
        {
          title: 'Salary',
          date: '01/01/2019',
          hour: '10:00',
          value: '$ 6500,00'
        },
        {
          title: 'Salary',
          date: '01/01/2019',
          hour: '10:00',
          value: '$ 6500,00'
        },
        {
          title: 'Salary',
          date: '01/01/2019',
          hour: '10:00',
          value: '$ 6500,00'
        },
        {
          title: 'Salary',
          date: '01/01/2019',
          hour: '10:00',
          value: '$ 6500,00'
        },
        {
          title: 'Salary',
          date: '01/01/2019',
          hour: '10:00',
          value: '$ 6500,00'
        },
        {
          title: 'Salary',
          date: '01/01/2019',
          hour: '10:00',
          value: '$ 6500,00'
        },
        {
          title: 'Salary',
          date: '01/01/2019',
          hour: '10:00',
          value: '$ 6500,00'
        },
        {
          title: 'Salary',
          date: '01/01/2019',
          hour: '10:00',
          value: '$ 6500,00'
        },
        {
          title: 'Salary',
          date: '01/01/2019',
          hour: '10:00',
          value: '$ 6500,00'
        }
      ],
    }
  },
}
</script>

<style scoped>

</style>