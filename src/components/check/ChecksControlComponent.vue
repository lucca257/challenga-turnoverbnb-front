<template>
  <v-card class="mx-auto">
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
            Hour
          </th>
          <th class="text-left">
            Value
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
          <td>{{ item.title }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.hour }}</td>
          <td>{{ item.value }}</td>
          <td><v-icon @click="checkDetails = item.title">mdi-eye</v-icon></td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
export default {
  name: "ChecksControlComponent",
  data () {
    return {
      checkDetails: null,
      transactions : [
        {
          title: 'customer 1',
          date: '01/01/2019',
          hour: '10:00',
          value: '$ 6500,00'
        },
        {
          title: 'customer 2',
          date: '01/01/2019',
          hour: '10:00',
          value: '$ 6500,00'
        },
        {
          title: 'customer 3',
          date: '01/01/2019',
          hour: '10:00',
          value: '$ 6500,00'
        },
        {
          title: 'customer 4',
          date: '01/01/2019',
          hour: '10:00',
          value: '$ 6500,00'
        },
      ],
    }
  },
}
</script>

<style scoped>

</style>