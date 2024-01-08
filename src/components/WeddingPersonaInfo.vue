<template>
  <div
    data-aos="fade-up"
    data-aos-duration="1500"
    class="d-flex flex-column w-100 align-center justify-center ga-10 h-200px pa-10"
  >
    <div class="d-flex flex-row align-center ga-2 personal-info">
      <div class="d-flex flex-column align-center justify-end">
        <div>{{ WEDDING.BROOM_FATHER }}<br />{{ WEDDING.BROOM_MOTHER }}</div>
      </div>

      <div class="d-flex flex-column align-baseline justify-end personal-info-main">
        <div>
          의 장남 <strong>{{ WEDDING.BROOM }}</strong>
        </div>
      </div>
    </div>

    <div class="d-flex flex-row align-center ga-2 personal-info">
      <div class="d-flex flex-column align-center justify-end">
        <div>{{ WEDDING.BRIDE_FATHER }}<br />{{ WEDDING.BRIDE_MOTHER }}</div>
      </div>

      <div class="d-flex flex-column align-baseline justify-end personal-info-main">
        <div>
          의 차녀 <strong>{{ WEDDING.BRIDE }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { WEDDING } from '/src/constants/wedding'
</script>

<style lang="scss" scoped>
@import '/src/styles/common.scss';
.personal-info {
  font-size: 13px;
  word-spacing: 3px;
  &-main {
    font-size: 15px;
  }
}
</style>
