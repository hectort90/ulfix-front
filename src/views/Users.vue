<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Usuarios registrados</h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <v-data-table
              :headers="headers"
              :items="users"
              @click:row="editUser"
          >
          </v-data-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      users: [],
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: true,
          value: 'name',
        },
        {
          text: 'Email',
          align: 'start',
          sortable: true,
          value: 'email',
        },
        {
          text: 'Created at',
          align: 'start',
          sortable: false,
          value: 'createdAt'
        },
        {
          text: 'Updated at',
          align: 'start',
          sortable: false,
          value: 'updatedAt'
        },
      ]
    }
  },
  methods:{
    editUser(user) {
      this.$router.push({name: 'EditUser', params: {userId: user.id}})
    }
  },
  created() {
    global.api.getAllUsers().then(res => {
      this.users = res.data;
    })
  }
}
</script>

<style scoped>

</style>