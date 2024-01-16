<script setup lang="ts">
import WeddingTitle from '@/components/WeddingTitle.vue'
import WeddingDayInfo from '@/components/WeddingDayInfo.vue'
import WeddingGreeting from '@/components/WeddingGreeting.vue'
import WeddingHallMap from '@/components/WeddingHallMap.vue'
import WeddingPersonaInfo from '@/components/WeddingPersonaInfo.vue'
import WeddingAdditional from '@/components/WeddingAdditional.vue'
import WeddingPhoto from '@/components/WeddingPhoto.vue'
import WeddingDDay from '@/components/WeddingDDay.vue'
</script>

<template>
  <div class="d-flex flex-column w-100 h-100 ga-50vw bg-color">
    <WeddingTitle />
    <WeddingGreeting />
    <WeddingPersonaInfo />
    <WeddingDayInfo />
    <WeddingPhoto />
    <WeddingHallMap />
  </div>
  <div class="d-flex flex-column w-100 bg-color pt-10 pb-5">
    <WeddingAdditional />
  </div>
  <WeddingDDay></WeddingDDay>
</template>

<style lang="scss" scoped>
@import '/src/styles/common.scss';
</style>
