<script setup lang="ts">
import WeddingMainView from '@/views/WeddingMainView.vue'
import ImagePopup from '@/components/util/ImagePopup.vue'
</script>

<template>
  <v-app id="app">
    <header></header>
    <body>
      <div class="main">
        <ImagePopup />
        <WeddingMainView />
      </div>
    </body>
  </v-app>
</template>
