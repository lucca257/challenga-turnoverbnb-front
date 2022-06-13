<template>
  <v-row >
    <v-col
      md="12">
      <current-balance />
    </v-col>
    <v-col>
      <v-card>
        <v-card-text>
          <div class="d-flex align-center">
            <v-avatar
              rounded
              size="38"
              color="#5e56690a"
              class="me-4"
            >
              <v-icon
                size="40"
                :color="transactionTypes.income.color">{{transactionTypes.income.icon}}</v-icon>
            </v-avatar>
            <div class="d-flex align-center flex-grow-1 flex-wrap">
              <div>
                <h4 class="font-weight-medium">
                  Incomes
                </h4>
                <span class="text-xs text-no-wrap">$452,5</span>
              </div>

              <v-spacer></v-spacer>

              <div class="ms-1">
                <v-icon class="text--primary font-weight-medium mb-1 d-flex align-center">
                  {{icons.mdiPlus}}
                </v-icon>
                <p class="text--primary font-weight-medium mb-1">
                  deposit a check
                </p>
              </div>
            </div>
          </div>
        </v-card-text>
        <v-card-text>
          <div class="d-flex align-center">
            <v-avatar
              rounded
              size="38"
              color="#5e56690a"
              class="me-4"
            >
              <v-icon
                size="40"
                :color="transactionTypes.expense.color">{{transactionTypes.expense.icon}}</v-icon>
            </v-avatar>
            <div class="d-flex align-center flex-grow-1 flex-wrap">
              <div>
                <h4 class="font-weight-medium">
                  Expenses
                </h4>
                <span class="text-xs text-no-wrap">$50,5</span>
              </div>

              <v-spacer></v-spacer>

              <div class="ms-1">
                <v-icon class="text--primary font-weight-medium mb-1 d-flex align-center">
                  {{icons.mdiPlus}}
                </v-icon>
                <p class="text--primary font-weight-medium mb-1">
                  add purchase
                </p>
              </div>
            </div>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-title>
          <v-icon>{{icons.mdiSwapVerticalBold}}</v-icon>
          &nbsp;Transactions
        </v-card-title>
        <v-card-text>
          <v-simple-table>
            <template v-slot:default>
              <thead>
              <tr>
                <th class="text-uppercase">
                  Description
                </th>
                <th class="text-center text-uppercase">
                  Value
                </th>
                <th class="text-center text-uppercase">
                  Type
                </th>
              </tr>
              </thead>
              <tbody>
              <tr
                v-for="item in transactions"
                :key="item.dessert"
              >
                <td>{{ item.description }}</td>
                <td class="text-center">
                  <span class="font-weight-semibold info--text" v-if="item.type === 'income'">+ ${{ item.value  }}</span>
                  <span class="font-weight-semibold error--text" v-else>- ${{ item.value  }}</span>
                </td>
                <td class="text-center">
                  <v-chip
                    small
                    :color="transactionTypes[item.type].color"
                    class="font-weight-medium"
                  >
                    {{ item.type }}
                  </v-chip>
                </td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>

</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiArrowDownRightBold, mdiArrowUpRightBold, mdiSwapVerticalBold, mdiPlus } from '@mdi/js'

export default {
  name: 'CustomerBalance',
  components: {
    'current-balance': () => import('./CurrentBalance.vue'),
  },
  data() {
    return {
      transactions: [
        {
          id: 1,
          description: 'Google Adsense',
          value: '50,00',
          type: 'expense',
        },
        {
          id: 2,
          description: 'Github Enterprise',
          value: '1850,00',
          type: 'expense',
        },
        {
          id: 3,
          description: 'Upgrade Slack Plan',
          value: '40,00',
          type: 'expense',
        },
        {
          id: 4,
          description: 'Digital Ocean',
          value: '21,00',
          type: 'income',
        },
      ],
      transactionTypes: {
        income: {
          icon: mdiArrowUpRightBold,
          color: 'info',
        },
        expense: {
          icon: mdiArrowDownRightBold,
          color: 'error',
        },
      },
    }
  },
  setup() {
    return {
      icons: {
        mdiArrowUpRightBold,
        mdiArrowDownRightBold,
        mdiSwapVerticalBold,
        mdiPlus,
      },
    }
  },
}
</script>
