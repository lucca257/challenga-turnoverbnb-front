<template>
  <div class="justify-center" v-if="depositCheck">
    <depositCheck :balance="35"/>
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
            <v-list-item-subtitle>{{balances.total_incomes}}</v-list-item-subtitle>
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
            <v-list-item-subtitle>{{balances.total_expenses}}</v-list-item-subtitle>
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
                Value
              </th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="item in transactions"
                :key="item.title"
            >
              <td>{{ item.description }}</td>
              <td v-if="item.type === 'income'" style="color: cornflowerblue">${{ item.amount }}</td>
              <td v-else style="color: red">- ${{ item.amount }}</td>
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
      transactions : [],
      balances: {
        current_balance: 0,
        total_incomes: 0,
        total_expenses: 0,
      }
    }
  },
  methods: {
    async requestTransactions() {
      const date = new Date()
      await fetch(this.base_url+'customer/transactions', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          year: date.getFullYear(),
          month: date.getMonth()+1
        })
      }).then(async (response) => {
        if (response.status !== 200) {
          const errors = await response.json();
          for (let prop in errors) {
            this.displayError = errors[prop]
            break;
          }
          return;
        }
        this.transactions = await response.json();
      }).catch((err) => {
        console.log(err);
      })
    },
    async getBalance() {
      await fetch(this.base_url+'customer/user/balance', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
          'Content-Type': 'application/json'
        },
      }).then(async (response) => {
        if (response.status !== 200) {
          const errors = await response.json();
          for (let prop in errors) {
            this.displayError = errors[prop]
            break;
          }
          return;
        }
        const data = await response.json();
        this.balances.current_balance = data.current_balance
        this.balances.total_incomes = data.total_incomes
        this.balances.total_expenses = data.total_expenses
      }).catch((err) => {
        console.log(err);
      })
    },
  },
  async beforeMount() {
    await this.requestTransactions()
    await this.getBalance()
  }
}
</script>

<style scoped>

</style>