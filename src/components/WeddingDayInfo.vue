<template>
  <div class="d-flex flex-column">
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      class="d-flex flex-row w-100 align-center justify-center ga-5 pa-10 h-200px"
    >
      <div class="d-flex flex-column align-content-end justify-end info-date">
        <div class="info-date_year">{{ WEDDING.YEAR }}년</div>
        <div class="info-date-text">{{ WEDDING.MONTH }}월<br />{{ WEDDING.DATE }}일</div>
      </div>
      <v-divider vertical :thickness="1" class="border-opacity-50"></v-divider>
      <div class="d-flex flex-column align-baseline justify-end info-place">
        <div>{{ WEDDING.DAY }} {{ WEDDING.TIME }}</div>
        <div>{{ WEDDING.PLACE }}, {{ WEDDING.HALL }}</div>
      </div>
    </div>
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      class="d-flex flex-row w-100 align-center justify-center ga-10"
    >
      <WeddingCalendar />
    </div>
  </div>
</template>

<script setup>
import { WEDDING } from '/src/constants/wedding'
import WeddingCalendar from '@/components/WeddingCalendar.vue'
</script>

<style lang="scss" scoped>
@import '/src/styles/common.scss';

.info-date_year {
  font-size: 1.3rem;
  line-height: 30px;
  vertical-align: bottom;
}

.info-date {
  position: relative;
  font-size: 2rem;
  line-height: 32px;
  text-align: right;
  vertical-align: bottom;

  &-text {
    position: relative;
    vertical-align: bottom;
    right: -2px;
    font-size: 1.8rem;
    text-align: right;
  }
}

.info-place {
  font-size: 0.8rem;
  vertical-align: bottom;
}
</style>
