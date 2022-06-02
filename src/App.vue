<template>
  <v-app>
    <topBarComponent></topBarComponent>
    <v-container fluid>
      <v-slide-y-transition mode="out-in">
        <v-content>
          <router-view/>
        </v-content>
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