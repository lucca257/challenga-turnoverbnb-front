<template>
  <v-card class="mx-auto">
    <v-alert type="warning"
             :value="displayError"
             dismissible>
      {{displayError}}
    </v-alert>
    <v-card-title>
      <v-icon>mdi-arrow-up-right-bold</v-icon>
      Incomes
    </v-card-title>
    <v-card-subtitle>{{current_month}}, {{current_year}}</v-card-subtitle>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            Title
          </th>
          <th class="text-left">
            Status
          </th>
          <th class="text-left">
            Value
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="item in transactions"
            :key="item.id"
        >
          <td>{{ item.description }}</td>
          <td>{{ item.status }}</td>
          <td>$ {{ item.amount }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
export default {
  name: "incomesListComponent",
  data () {
    return {
      transactions : [],
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
      }).catch((err) => {
        this.displayError = err.message;
      })
    }
  },
  beforeMount() {
    this.requestIncomes()
  }
}
</script>