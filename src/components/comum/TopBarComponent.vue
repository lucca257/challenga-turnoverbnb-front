<template>
  <v-app-bar app color="deep-purple accent-4" dark dense>
    <v-toolbar-title>
      <v-img
          alt="Logo"
          class="shrink mr-2"
          src="@/assets/principal-icon.png"
          transition="scale-transition"
          width="60%"
      />
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
          color="deep-purple accent-4"
          @click="$router.push({path: item.path})"
          v-for="item in menuItems"
          :key="item.title"
          :title="item.title"
          depressed
      >
        <v-icon left>
          {{ item.icon }}
        </v-icon>
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: "TopBarComponent",
  data(){
    return {
      menuItems: [
        { title: 'Balance', path: '/', icon: 'mdi-scale-unbalanced' },
        { title: 'Incomes', path: '/', icon: 'mdi-arrow-up-right-bold' },
        { title: 'Expenses', path: '/', icon: 'mdi-arrow-down-right-bold' },
        { title: 'Checks', path: '/checks', icon: 'mdi-cash-100' },
        { title: 'Logout', path: '/logout', icon: 'mdi-logout-variant' },
      ]
    }
  },
}
</script>

<style scoped>

</style>