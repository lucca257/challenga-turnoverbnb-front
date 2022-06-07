<template>
  <div v-if="checkDetails">
    <checkDetails :details="checkDetails"/>
  </div>
  <v-card class="mx-auto" v-else>
    <v-card-title>
      <v-icon>mdi-checkbook</v-icon>
      &nbsp; Checks control
    </v-card-title>
    <v-card-subtitle>June, 2022</v-card-subtitle>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            Description
          </th>
          <th class="text-left">
            Date
          </th>
          <th class="text-left">
            Details
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="item in transactions"
            :key="item.title"
        >
          <td>{{ item.description }}</td>
          <td>{{ item.amount }}</td>
          <td><v-icon @click="checkDetails = item.id">mdi-eye</v-icon></td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
export default {
  name: "ChecksControlComponent",
  components: {
    'checkDetails': () => import('./CheckDetails.vue')
  },
  data () {
    return {
      checkDetails: null,
      transactions : [],
    }
  },
  methods: {
    async requestDeposits() {
      await fetch(this.base_url+'admin/deposits', {
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
        this.transactions = await response.json();
      }).catch((err) => {
        this.displayError = err.message;
      })
    }
  },
  beforeMount() {
    this.requestDeposits()
  }
}
</script>

<style scoped>

</style>