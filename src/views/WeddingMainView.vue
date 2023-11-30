<script setup lang="ts">
import WeddingTitle from '@/components/WeddingTitle.vue'
import WeddingInformation from '@/components/WeddingInformation.vue'
import WeddingGreeting from '@/components/WeddingGreeting.vue'
import WeddingHallMap from '@/components/WeddingHallMap.vue'
</script>

<template>
  <WeddingTitle />
  <WeddingInformation />
  <v-divider
    class="my-divider"
    :inset="true"
    height="4px"
    style="background-color: white; height: 4px"
  ></v-divider>
  <WeddingGreeting />
  <WeddingHallMap />
</template>

<style lang="scss" scoped>
@import '/src/styles/common.scss';
.my-divider {
  margin: 20px 0; /* 필요에 따라 여백 설정 */
}
</style>
