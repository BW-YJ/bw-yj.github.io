<script setup lang="ts">
import { WEDDING } from '@/constants/wedding'
import WeddingGreeting from '@/components/WeddingGreeting.vue'

const weddingDate: string = WEDDING.DAY + ' ' + WEDDING.TIME
</script>

<template>
  <div class="d-flex bg-black h-200px justify-center align-center">
    {{ weddingDate }}
  </div>
  <WeddingGreeting />
</template>

<style lang="scss" scoped>
@import '/styles/common.scss';
</style>
