<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
      <tr>
        <th class="text-uppercase">
          Description
        </th>
        <th class="text-center text-uppercase">
          Amount
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
        v-for="item in transactions"
        :key="item.id"
      >
        <td>{{ item.description }}</td>
        <td class="text-center">
          <span class="font-weight-semibold">+ ${{ item.value  }}</span>
        </td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: 'CheckList',
  props: {
    transactions: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>
