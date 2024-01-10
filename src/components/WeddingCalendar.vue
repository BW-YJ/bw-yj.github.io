<template>
  <div
    data-aos="fade-up"
    data-aos-duration="1500"
    class="d-flex flex-column w-100 pl-10 pr-10 my-calendar"
  >
    <VCalendar
      expanded
      transparent
      borderless
      :attributes="attrs"
      class="vc-container"
      :step="0"
      hideArrows
      showNav="false"
      navVisibility="hover"
      disable-page-swipe
    >
      <template v-slot:header-title-wrapper></template>

      <template v-slot:header-prev-button></template>
      <template v-slot:header-next-button
        ><button @click.prevent.stop="() => {}"></button>
      </template>
    </VCalendar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const move = () => {}
const attrs = ref([
  {
    key: 'wedding-day',
    highlight: {
      color: 'orange',
      fillMode: 'light',
      contentClass: 'italic'
    },
    showNavigation: false,
    dates: new Date(2024, 2, 9)
  }
])
</script>

<style lang="scss" scoped>
@import '/src/styles/common.scss';

.my-calendar :deep(.vc-weekday-7) {
  color: #6366f1;
}
.my-calendar :deep(.vc-weekday-1) {
  color: #f16395;
}
</style>
