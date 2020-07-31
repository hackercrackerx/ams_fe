<template>
          <v-card elevation="10" class="">
            <v-card-title class="text--center">
              <v-col class="text-center">
                <v-img src="/logo.png" height="50" class="ma-auto" width="50" />
                <div class="blue-grey--text font-weight-bold">
                  Attendance Management System
                </div>
                <div class="blue-grey--text font-weight-bold">
                  Login
                </div>
              </v-col>
            </v-card-title>
            <v-card flat class="mx-4">
              <v-card-text class="pb-0">
                <v-text-field v-model="email" id="email" label="Username" />
                <v-text-field
                  v-model="password"
                  label="Password"
                  id="password"
                  type="Password"
                />
              </v-card-text>
              <v-card-actions class="text-center">
                <v-btn
                  color="indigo"
                  depressed
                  id="loginButton"
                  class="white--text ml-2 text-capitalize"
                  @click="login"
                >
                  Login
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-card>
</template>
<script>
import pageMixin from '~/mixins/pageMixin'
    export default {
      mixins: [pageMixin],
      layout: "blank",
      data() {
        return {
          title: 'Login | AMS',
          email: "",
          password: ""
        }
      },
      methods: {
        async login() {
             this.setNotify({
                message: "Successfully Login. Welcome to AMS!",
                color: "green"
              })
        //   let data = { email: this.email, password: this.password }
        //   await this.$auth
        //     .loginWith("local", { data })
        //     .then(() => {
        //       this.setNotify({
        //         message: "Successfully Login. Welcome to AMS!",
        //         color: "green"
        //       })
        //       this.$router.push("/")
        //     })
        //     .catch(() => {
        //       this.setNotify({
        //         message: "Invalid Username or Password.",
        //         color: "red"
        //       })
        //     })
        }
      }
    }
</script>
