<template>
  <div
    data-aos="fade-up"
    data-aos-duration="1500"
    class="d-flex flex-column w-100 align-center justify-center font-easta-heavy pt-10"
  >
    <div class="d-flex text-xl-h3">WE ARE GETTING MARRIED</div>
    <div class="d-flex text-xl-h3">저희 결혼 합니다.</div>
    <div class="">
      <div class="pa-15 mobile-100-w-50">
        <img
          src="https://bw-yj.github.io/images/IMG_2460.png"
          alt="Polaroid Image"
          class="polaroid-image"
        />
      </div>
    </div>
    <br />
    <v-divider :thickness="5" color="success"></v-divider>
    <div class="d-flex flex-row ga-4">
      <div>{{ WEDDING.BROOM }}</div>
      <v-divider vertical="true" class="mx-4">|</v-divider>
      <div>{{ WEDDING.BRIDE }}</div>
    </div>
  </div>
</template>

<script setup>
import { WEDDING } from '/src/constants/wedding'
</script>

<style lang="scss" scoped>
@import '/src/styles/common.scss';
</style>
