<template>
  <v-app>
    <v-img src="/loginBackground.png" aspect-ratio="2">
      <v-row justify="center" class="py-9 mt-12">
        <v-col cols="5">
          <nuxt />
        </v-col>
      </v-row>
      <vue-snackbar></vue-snackbar>
    </v-img>
  </v-app>
</template>
<script>
import VueSnackbar from "~/components/LayoutUtils/VueSnackbar"
export default {
  components: { VueSnackbar }
}
</script>
