<template>
  <div class="overlay w-100 d-flex justify-center">
    <DdayCounter v-slot="{ days, hours, minutes, seconds, plusMinus }">
      <div class="d-flex flex-row ga-2 font-bodoni-itailic info-date">
        <div class="d-flex flex-column align-content-end justify-end info-place">
          <div class="info-date-text d-flex flex-row ga-1">
            <div>Untill our wedding D</div>
            <div class="font-maruburi">{{ plusMinus }}</div>
            <div>{{ days }}</div>
          </div>
        </div>

        <div class="d-flex flex-column align-baseline justify-end info-place">
          <div>{{ hours }}:{{ minutes }}:{{ seconds }}</div>
        </div>
      </div>
    </DdayCounter>
  </div>
</template>

<script setup>
import DdayCounter from '@/components/util/DdayCounter.vue'
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
    font-size: 1rem;
    text-align: right;
  }
}

.info-place {
  font-size: 1rem;
  vertical-align: bottom;
}

.overlay {
  position: fixed;

  border: 1px solid #919191ff;
  bottom: 0;
  right: 0;
  width: 100%;

  background-color: rgba(226, 224, 216, 1); /* 오버레이의 배경색 및 투명도 조절 */
  z-index: 1000; /* 다른 요소들보다 위에 나타나도록 하는 z-index 속성 */
}
</style>
