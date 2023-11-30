<template>
  <div
    class="bg-white d-flex flex-row w-100 align-center justify-center font-easta-heavy ga-10 pa-10"
  >
    <div class="d-flex flex-column align-center justify-end info-date">
      <div class="info-date_year">{{ WEDDING.YEAR }}년</div>
      <div>{{ WEDDING.MONTH }}월<br />{{ WEDDING.DATE }}일</div>
    </div>
    <div class="d-flex flex-column align-baseline justify-end info-place">
      <div>{{ WEDDING.DAY }} {{ WEDDING.TIME }}</div>
      <div>{{ WEDDING.PLACE }}, {{ WEDDING.HALL }}</div>
    </div>
  </div>
</template>

<script setup>
import { WEDDING } from '/src/constants/wedding'
</script>

<style lang="scss" scoped>
@import '/src/styles/common.scss';

.info-date_year {
  font-size: 1.3rem;
  line-height: 30px;
  vertical-align: bottom;
}
.info-date {
  font-size: 2rem;
  line-height: 30px;
  vertical-align: bottom;
}
.info-place {
  font-size: 0.8rem;
  vertical-align: bottom;
}
</style>
