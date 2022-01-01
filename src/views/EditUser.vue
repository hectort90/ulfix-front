<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="text-center">
            <h1>Editar usuario</h1>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <v-text-field
              label="User"
              prepend-icon="mdi-account-circle"
              v-model="user.name"
              required
          />
          <v-text-field
              label="Email"
              prepend-icon="mdi-account-circle"
              v-model="user.email"
              required
          />
          <div class="row">
            <div class="col">
              <v-btn @click="editUser" color="success">Edit user</v-btn>
            </div>
            <div class="col">
              <v-dialog
                  v-model="dialog"
                  width="500"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      color="red lighten-1"
                      dark
                      v-bind="attrs"
                      v-on="on"
                  >
                    Delete my user
                  </v-btn>
                </template>
                <v-card style="background-color: white">
                  <v-card-title class="text-h5">
                    Are you sure you want to delete your user?
                  </v-card-title>
                  <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </v-card-text>
                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        text
                        @click="eraseUser"
                    >
                      I accept
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jwtDecode from 'jwt-decode'
export default {
  name: "EditUser",
  data() {
    return {
      user: {
        name: '',
        email: '',
        dialog: false,
      }
    }
  },
  computed: {
    userId() {
      const token = localStorage.getItem('ulfix');
      return jwtDecode(token).id
    }
  },
  methods: {
    editUser() {
      global.api.updateUser(this.userId, this.user.name, this.user.email).then(res => {
        this.$router.push({name: 'Users'})
        console.log(res.data)
      }).catch(err => {
        switch (err.response.status) {
          case 401:
            this.$router.push({name: 'Home'})
            break;
        }
      })
    },
    eraseUser() {
        global.api.deleteUser(this.userId).then(() => {
          this.dialog = false;
          this.$router.push({name: 'Home'})
        }).catch(err => {
          switch (err.response.status) {
            case 401:
              this.$router.push({name: 'Home'})
              break;
          }
        })
    }
  },
  created() {
    global.api.getUser(this.userId).then(res => {
      this.user = res.data;
    }).catch(err => {
      switch (err.response.status) {
        case 401:
          this.$router.push({name: 'Home'})
          break;
      }
    })
  }
}
</script>

<style scoped>

</style>