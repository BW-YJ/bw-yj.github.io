<template>
  <div
    data-aos="fade-up"
    data-aos-duration="1500"
    class="d-flex flex-column w-100 pa-10 my-calendar"
  >
    <VCalendar
      expanded
      :attributes="attrs"
      class="vc-container"
      :step="0"
      hideArrows
      :show-nav="false"
    >
    </VCalendar>
  </div>
</template>

<script setup>
import { ref } from 'vue'

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
