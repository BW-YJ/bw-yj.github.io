<script setup lang="ts">
import { WEDDING } from '@/constants/wedding'

const weddingDate: string = WEDDING.DAY + ' ' + WEDDING.TIME
</script>

<template>
  <div class="d-flex bg-black h-500px justify-center align-center">
    {{ weddingDate }}
  </div>
</template>

<style lang="scss" scoped>
@import '/styles/common.scss';
</style>
