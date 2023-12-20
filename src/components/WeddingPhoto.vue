<template>
  <div
    data-aos="fade-up"
    data-aos-duration="1500"
    class="d-flex flex-column w-100 font-easta-heavy pa-10"
  >
    <v-row>
      <template v-for="(image, imgIdx) in imageLayout" :key="imgIdx">
        <v-col :cols="image.cols">
          <v-img
            :src="`https://bw-yj.github.io/images/photo${imgIdx}.png`"
            cover
            alt="test"
            height="100%"
            @click="handleImageClick(imgIdx)"
          ></v-img>
        </v-col>
      </template>
    </v-row>
  </div>
  <ImagePopup selectedImage="imageNo" opened="imagePopupOpened" />
</template>

<script setup>
import ImagePopup from '@/components/util/ImagePopup.vue'
import { ref } from 'vue'

const imageLayout = [{ cols: 12 }, { cols: 6 }, { cols: 6 }, { cols: 12 }, { cols: 6 }, { cols: 6 }]
const imageNo = ref('')
const imagePopupOpened = ref(false)

const handleImageClick = (img) => {
  console.log('tt')
  imageNo.value = img
  imagePopupOpened.value = true
}
</script>

<style lang="scss" scoped>
@import '/src/styles/common.scss';
</style>
