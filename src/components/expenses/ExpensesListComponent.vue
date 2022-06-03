<template>
  <div class="justify-center">
    <v-card class="mx-auto">
        <v-card-title>
          <v-icon>mdi-arrow-down-right-bold</v-icon>
          Expenses
        </v-card-title>
        <v-card-subtitle>June, 2022</v-card-subtitle>
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
      </v-card>
    <v-btn
        class="mt-3 mx-2 float-right"
        fab
        dark
        color="indigo"
        title="Add Purchase"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
    </div>
</template>

<script>
export default {
  name: "ExpensesList",
  data () {
    return {
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