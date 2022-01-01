<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
          <h2 @click="$router.push({name: 'Home'})">Ulfix</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        :to="{name: 'Users'}"
        text
      >
        <span class="mr-2">Users</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn
          :to="{name: 'EditUser'}"
          text
      >
        <span class="mr-2"
        >My Profile</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
