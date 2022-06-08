<template>
  <v-card class="mx-auto">
    <v-card-title>
      <v-icon>mdi-cash-100</v-icon>
      &nbsp; Checks
    </v-card-title>
    <v-card-subtitle>{{current_month}}, {{current_year}}</v-card-subtitle>

    <v-tabs
        v-model="tab"
        background-color="transparent"
        centered
        dark
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#pending">PENDING</v-tab>

      <v-tab href="#accepted">ACCEPTED</v-tab>

      <v-tab href="#rejected">REJECTED</v-tab>

      <v-tabs-items v-model="tab">
        <v-tab-item :value="'pending'">
          <v-card flat>
            <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            Title
          </th>
          <th class="text-left">
            Amount
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="item in pending"
            :key="item.title"
        >
          <td>{{ item.description }}</td>
          <td>{{ item.amount }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
          </v-card>
        </v-tab-item>
        <v-tab-item :value="'accepted'">
          <v-card flat>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                <tr>
                  <th class="text-left">
                    Title
                  </th>
                  <th class="text-left">
                    Amount
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr
                    v-for="item in accepted"
                    :key="item.title"
                >
                  <td>{{ item.description }}</td>
                  <td>{{ item.amount }}</td>
                </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-tab-item>
        <v-tab-item :value="'rejected'">
          <v-card flat>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                <tr>
                  <th class="text-left">
                    Title
                  </th>
                  <th class="text-left">
                    Amount
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr
                    v-for="item in rejected"
                    :key="item.title"
                >
                  <td>{{ item.description }}</td>
                  <td>{{ item.amount }}</td>
                </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  name: "CheckListComponent",
  data () {
    return {
      tab: null,
      transactions : [],
      pending: [],
      accepted: [],
      rejected: [],
    }
  },
  methods: {
    async requestIncomes() {
      const date = new Date()
      await fetch(this.base_url+'customer/deposits/list', {
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
        this.filterTransactions()
      }).catch((err) => {
        this.displayError = err.message;
      })
    },
    filterTransactions() {
      this.pending = this.transactions.filter(item => item.status === 'pending')
      this.accepted = this.transactions.filter(item => item.status === 'confirmed')
      this.rejected = this.transactions.filter(item => item.status === 'rejected')
    }
  },
  beforeMount() {
    this.requestIncomes()
  }
}
</script>

<style scoped>

</style>