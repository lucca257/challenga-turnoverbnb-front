<template>
  <v-app>

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
        <v-btn color="deep-purple accent-4"
            @click="$router.push({path: item.path})"
            v-for="item in menuItems"
            :key="item.icon"
            :title="item.title"
            flat
        >{{ item.title }}</v-btn>

      </v-toolbar-items>
    </v-app-bar>

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
  data(){
    return {
      menuItems: [
        { title: 'Home', path: '/', icon: 'home' },
        { title: 'About', path: '/about', icon: 'home' },
      ]
    }
  },
};
</script>