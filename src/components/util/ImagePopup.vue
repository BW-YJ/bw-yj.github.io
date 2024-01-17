<template>
  <div v-if="isPopupOpened">
    <transition name="modal" appear>
      <section class="modal">
        <div class="modal__overlay"></div>
        <div class="modal__wrapper d-flex flex-column">
          <div class="d-flex flex-row-reverse">
            <v-btn
              icon
              density="compact"
              @click="handleImagePopupOpened(false)"
              class="close-button"
            >
              <v-icon icon="mdi-close" size="small"></v-icon>
            </v-btn>
          </div>
          <div class="d-flex flex-column justify-space-around modal__window align-center w-100">
            <div class="d-flex main_wrapper align-center pb-3">
              <Carousel id="gallery" :items-to-show="1" v-model="currentSlide" class="w-100 h-100">
                <Slide v-for="slide in totalPhotos" :key="slide" class="w-100 h-100">
                  <div class="d-flex flex-row carousel__item mainImg">
                    <v-img
                      :src="`https://bw-yj.github.io/images/photo${slide}.png`"
                      alt="not loaded"
                    ></v-img>
                  </div>
                </Slide>
                <template #addons>
                  <Navigation />
                </template>
              </Carousel>
            </div>
            <div class="font-size-info pt-1">{{ currentSlide + 1 }}/{{ totalPhotos }}</div>
            <v-divider thickness="1" class="d-flex pb-3 w-100 h-2px" />
            <div class="thumbnail__wrapper">
              <Carousel id="thumbnails" :items-to-show="4" v-model="currentSlide" ref="carousel">
                <Slide v-for="slide in totalPhotos" :key="slide">
                  <div
                    class="d-flex carousel__item thumbnail__wrapper justify-center align-center w-100 h-100"
                    @click="slideTo(slide - 1)"
                  >
                    <v-img
                      class="thumbnail w-100 h-100"
                      :src="`https://bw-yj.github.io/images/photo${slide}.png`"
                      cover
                      alt="not loaded"
                    ></v-img>
                  </div>
                </Slide>
                <template #addons>
                  <Pagination />
                </template>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </transition>
  </div>
</template>

<script setup>
import { useimagePopupStore } from '@/stores/imagePopup'
import { storeToRefs } from 'pinia'
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'

import { ref } from 'vue'

const { isPopupOpened, selectedImage } = storeToRefs(useimagePopupStore())
const { handleImagePopupOpened } = useimagePopupStore()
const currentSlide = ref(selectedImage)
import '/src/styles/carousel.css'
const totalPhotos = 17

const slideTo = (val) => {
  currentSlide.value = val
}
</script>
<style lang="scss" scoped>
@import '/src/styles/common.scss';

#gallery.carousel * {
  box-sizing: border-box;
  height: 100%;
}
#thumbnails.carousel * {
  box-sizing: border-box;
  height: 100%;
}

.carousel__slide {
  padding-left: 10px;
  padding-right: 10px;
}
#gallery {
  height: 100%;
}

.carousel__track {
  transform-style: preserve-3d;
  height: 100%;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
.main_wrapper {
  box-sizing: border-box;
  align-content: center;
  width: 100%;
  height: 80% !important;
  overflow: hidden;
  object-fit: contain;
}

.mainImg {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  align-content: center;
  &__wrapper {
    width: 100%;
    height: 15%;
    overflow: hidden;
  }
}

.modal {
  position: fixed; /* 수정된 부분 */
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 999;

  &__wrapper {
    width: 90%;
    border-radius: 0.4rem;
    height: 85%;
    justify-content: center;
  }

  &__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.8;
  }

  &__window {
    width: 100%;
    height: 100%;
    border-radius: 0.4rem;
    overflow: hidden;
    padding: 1rem;
    z-index: 999;

    background-color: white;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &-enter-to,
  &-leave {
    transition: opacity 0.4s ease;
  }
}

.close-button {
  position: relative;
  bottom: -10px;
  right: -10px;
  z-index: 1000; /* Ensure it's above other elements */
}
</style>
