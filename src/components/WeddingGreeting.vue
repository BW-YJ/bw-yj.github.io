<template>
  <div class="bg-black d-flex flex-column w-100 h-200px align-center">
    <div class="d-flex text-xl-h1">저희 결혼합니다.</div>
    <v-divider inset :thickness="5" color="success"></v-divider>
    <div class="d-flex flex-row ga-4">
      <subtitle-2>{{ WEDDING.BROOM }}</subtitle-2>
      <v-divider vertical class="mx-4">|</v-divider>
      <div>{{ WEDDING.BRIDE }}</div>
    </div>
  </div>
</template>

<script setup>
import { WEDDING } from '/src/constants/wedding'
</script>

<style lang="scss" scoped></style>
