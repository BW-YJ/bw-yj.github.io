<script setup lang="ts">
import {WEDDING} from "@/constants/wedding";

const weddingDate: string = WEDDING.DAY + ' ' + WEDDING.TIME


</script>

<template>
  <div>
    {{ weddingDate }}
  </div>
</template>


<style lang="scss" scoped>

</style>
