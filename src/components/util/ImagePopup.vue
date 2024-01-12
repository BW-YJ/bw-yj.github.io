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
          <div class="d-flex flex-column justify-space-around modal__window">
            <div class="d-flex main_wrapper align-center">
              <Carousel
                id="gallery"
                :items-to-show="1"
                :wrap-around="true"
                v-model="currentSlide"
                class="main_wrapper"
              >
                <Slide v-for="slide in 7" :key="slide">
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

            <div class="thumbnail__wrapper">
              <v-divider thickness="1" class="pa-3" />
              <Carousel
                id="thumbnails"
                :items-to-show="4"
                :wrap-around="true"
                v-model="currentSlide"
                ref="carousel"
              >
                <Slide v-for="slide in 7" :key="slide">
                  <div
                    class="carousel__item thumbnail justify-center align-center"
                    @click="slideTo(slide - 1)"
                  >
                    <v-img
                      class="thumbnail"
                      :src="`https://bw-yj.github.io/images/photo${slide}.png`"
                      cover
                      alt="not loaded"
                    ></v-img>
                  </div>
                </Slide>
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
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { ref } from 'vue'

const { isPopupOpened, selectedImage } = storeToRefs(useimagePopupStore())
const { handleImagePopupOpened } = useimagePopupStore()
const currentSlide = ref(selectedImage)

const slideTo = (val) => {
  currentSlide.value = val
}
</script>
<style lang="scss" scoped>
@import '/src/styles/common.scss';
.main_wrapper {
  align-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
}
.thumbnail__wrapper {
  width: 100%;
  height: 100px;
  overflow: hidden;
}
.mainImg {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.thumbnail {
  width: 90%;
  height: 90%;
  object-fit: cover;
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
    height: 95%;
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
