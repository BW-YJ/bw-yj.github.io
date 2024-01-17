<template>
  <div
    data-aos="fade-up"
    data-aos-duration="2000"
    class="d-flex flex-column w-100 pa-10 align-center"
  >
    <div class="d-flex flex-column sub-title font-bodoni pb-5">Gallery</div>
    <v-divider :thickness="1" class="w-100"></v-divider>
    <v-row class="w-100">
      <template v-for="(image, imgIdx) in imageLayout" :key="imgIdx">
        <v-col :cols="image.cols">
          <div>
            <v-img
              :src="`https://bw-yj.github.io/images/photo_${imgIdx}.png`"
              cover
              alt="test"
              height="100%"
              @click="handleImageClick(imgIdx - 1)"
            ></v-img>
          </div>
        </v-col>
      </template>
    </v-row>
    <span class="font-size-info pt-2">* 이미지 클릭 시 더 크게 사진을 보실 수 있습니다.</span>
  </div>
</template>

<script setup>
import { useimagePopupStore } from '@/stores/imagePopup'
const { handleImagePopupOpened, setImageNo } = useimagePopupStore()

const imageLayout = [
  { cols: 12 },
  { cols: 3 },
  { cols: 3 },
  { cols: 6 },
  { cols: 6 },
  { cols: 3 },
  { cols: 3 },
  { cols: 6 },
  { cols: 3 },
  { cols: 3 },
  { cols: 3 },
  { cols: 3 },
  { cols: 3 },
  { cols: 3 },
  { cols: 6 },
  { cols: 3 },
  { cols: 3 },
  { cols: 6 },
  { cols: 3 }
]

const handleImageClick = (img) => {
  setImageNo(img)
  handleImagePopupOpened(true)
}
</script>

<style lang="scss" scoped>
@import '/src/styles/common.scss';
</style>
