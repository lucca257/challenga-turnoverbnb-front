<template>
  <v-card class="mx-auto">
    <v-card-title>
      <v-icon>mdi-cash-100</v-icon>
      Checks
    </v-card-title>
    <v-card-subtitle>June, 2022</v-card-subtitle>

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