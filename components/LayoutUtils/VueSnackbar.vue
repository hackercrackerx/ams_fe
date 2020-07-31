<template>
  <div>
    <v-snackbar
      v-model="notifyDetail.display"
      :color="notifyDetail.color">
      {{ notifyDetail.message }}
      <v-btn color="red" text @click="notifyDetail.display = false">
        <v-icon
          color="white"
          v-text="'mdi-close-circle'"
        ></v-icon>
      </v-btn>
    </v-snackbar>
  </div>
</template>
<script>
import { mapGetters } from "vuex"
export default {
  computed: {
    ...mapGetters({
      notifyDetail: "getNotify"
    })
  }
}
</script>
