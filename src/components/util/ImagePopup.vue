<template>
  <div v-if="isPopupOpened">
    <transition name="modal" appear>
      <section class="modal">
        <div class="modal__overlay" @click.self="handleImagePopupOpened(false)"></div>
        <div class="modal__window">
          <v-img
            :src="`https://bw-yj.github.io/images/photo${selectedImage}.png`"
            cover
            alt="test"
            height="100%"
          ></v-img>
        </div>
      </section>
    </transition>
  </div>
</template>

<script setup>
import { useimagePopupStore } from '@/stores/imagePopup'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'

const { isPopupOpened, selectedImage } = storeToRefs(useimagePopupStore())
const { handleImagePopupOpened } = useimagePopupStore()

watch(selectedImage, () => {
  console.log('test~~', selectedImage.value)
})

watch(isPopupOpened, () => {
  console.log('test22~~', isPopupOpened.value)
})
</script>
<style lang="scss" scoped>
@import '/src/styles/common.scss';
img {
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

  &__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.8;
  }

  &__window {
    width: 90%;
    height: 90%;
    object-fit: cover;

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
</style>
