<template>
  <div class="home">
    <v-row>
      <v-col>
        <h1 class="text-center">Welcome to Ulfix Fullstack Mini Project</h1>
        <v-card width="600" class="mx-auto mt-5">
          <v-card-title>
            <h4>To enter the platform please enter your credentials</h4>
          </v-card-title>
          <v-card-text>
            <v-form v-model="valid" ref="form">
              <v-text-field
                  label="User"
                  prepend-icon="mdi-account-circle"
                  v-model="email"
                  required
                  :rules="usernameAndPasswordRules"
              />
              <v-text-field
                  label="Password"
                  :type="showPassword ? 'text' : 'password'"
                  prepend-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  v-model="password"
                  required
                  :rules="usernameAndPasswordRules"
                  @keypress.enter="login"
              />
              <p class="text-center red--text">{{error}}</p>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="success" :to="{name: 'AddUser'}">Register</v-btn>
            <v-spacer/>
            <v-btn color="info" @click="login" :loading="isLoading">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      person: '',
      valid: false,
      isLoading: false,
      email: 'test@gmail.com',
      usernameAndPasswordRules: [
        v => !!v || 'El campo es requerido'
      ],
      password: 'Test',
      showPassword: false,
      error: ''
    }
  },
  methods: {
    login() {
      global.api.login(this.email, this.password).then(res => {
        this.isLoading = false;
        localStorage.setItem('ulfix', res.data);
        this.$router.push({name: 'Users'})
      }).catch(err => {
        switch (err.response.status) {
          case 401:
            this.error = "Wrong user or password";
            break;
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
