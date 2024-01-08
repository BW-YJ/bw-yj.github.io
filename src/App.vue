<script setup lang="ts">
import WeddingMainView from '@/views/WeddingMainView.vue'
import ImagePopup from '@/components/util/ImagePopup.vue'
import AccountInfoPopup from '@/components/util/AccountInfoPopup.vue'
import '@/styles/font.scss'
</script>

<template>
  <v-app id="app">
    <header></header>
    <body>
      <div class="main bg-color">
        <ImagePopup />
        <AccountInfoPopup />
        <WeddingMainView />
      </div>
    </body>
  </v-app>
</template>

<style lang="scss">
body,
#app {
  font-family: 'bodoni', 'easta-mid';
}
</style>
