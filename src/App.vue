<template>
  <v-app>
    <topBarComponent></topBarComponent>
    <v-container fluid>
      <v-slide-y-transition mode="out-in">
        <v-main>
          <router-view/>
        </v-main>
      </v-slide-y-transition>
    </v-container>
  </v-app>
</template>
<script>

export default {
  name: 'App',
  components : {
    'topBarComponent' : () => import('@/components/comum/TopBarComponent.vue'),
  }
};
</script>