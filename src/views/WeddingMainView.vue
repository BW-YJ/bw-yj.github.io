<script setup lang="ts">
import WeddingTitle from '@/components/WeddingTitle.vue'
import WeddingInformation from '@/components/WeddingInformation.vue'
import WeddingGreeting from '@/components/WeddingGreeting.vue'
import WeddingHallMap from '@/components/WeddingHallMap.vue'
</script>

<template>
  <div class="d-flex flex-column w-100 h-100 ga-10">
    <WeddingTitle />
    <WeddingGreeting />
    <WeddingInformation />

    <WeddingHallMap />
  </div>
</template>

<style lang="scss" scoped>
@import '/src/styles/common.scss';
.my-divider {
  margin: 20px 0; /* 필요에 따라 여백 설정 */
}
</style>
