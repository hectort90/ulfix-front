<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <v-text-field
              label="User"
              prepend-icon="mdi-account-circle"
              v-model="name"
              required
          />
          <v-text-field
              label="Email"
              prepend-icon="mdi-email"
              v-model="email"
              required
          />
          <v-text-field
              label="Password"
              prepend-icon="mdi-lock"
              type="password"
              v-model="password"
              required
          />
          <v-btn @click="registerUser" color="success">Registrar Usuario</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddUser",
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    registerUser() {
      global.api.addUser(this.name, this.email, this.password).then(res => {
        console.log(res.data)
        this.$router.push({name: 'Home'})
      })
    }
  }
}
</script>

<style scoped>

</style>