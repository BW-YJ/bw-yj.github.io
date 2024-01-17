<template>
  <div v-if="isPopupOpened">
    <transition name="modal" appear>
      <section class="modal">
        <div class="modal__overlay" @click="handleAccountInfoPopupOpened(false)"></div>
        <div class="modal__wrapper d-flex flex-column">
          <div class="d-flex flex-row-reverse">
            <v-btn
              icon
              density="compact"
              @click="handleAccountInfoPopupOpened(false)"
              class="close-button"
            >
              <v-icon icon="mdi-close" size="small"></v-icon>
            </v-btn>
          </div>
          <div class="modal__window justify-center align-center align-self-center pt-10 pb-10">
            <div class="d-flex pl-3">신랑측</div>
            <v-list lines="two">
              <v-list-item v-for="accountInfo in ACCOUNT_INFO_BROOM" :key="accountInfo">
                <v-list-item-content class="d-flex flex-row justify-space-between align-center">
                  <div class="d-flex flex-column">
                    <v-list-item-title class="flex-grow-1 account-text" :title="accountInfo.OWNER">
                      {{ accountInfo.OWNER + '(' + accountInfo.ROLE + ')' }}
                    </v-list-item-title>

                    <v-list-item-subtitle class="account-text-number">
                      {{ accountInfo.ACCOUNT_BANK + ' ' + accountInfo.ACCOUNT_NUMBER }}
                    </v-list-item-subtitle>
                  </div>
                  <v-btn
                    variant="plain"
                    v-clipboard="accountInfo.ACCOUNT_BANK + ' ' + accountInfo.ACCOUNT_NUMBER"
                    @click="snackbar = true"
                  >
                    <v-icon small>mdi-content-copy</v-icon>
                  </v-btn>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider :thickness="1" class="w-100"></v-divider>
            <div class="d-flex pl-3 pt-3">신부측</div>
            <v-list lines="two">
              <v-list-item v-for="accountInfo in ACCOUNT_INFO_BRIDE" :key="accountInfo">
                <v-list-item-content class="d-flex flex-row justify-space-between align-center">
                  <div class="d-flex flex-column account-text">
                    <v-list-item-title class="flex-grow-1 account-text">
                      {{ accountInfo.OWNER + '(' + accountInfo.ROLE + ')' }}
                    </v-list-item-title>

                    <v-list-item-subtitle class="account-text-number">
                      {{ accountInfo.ACCOUNT_BANK + ' ' + accountInfo.ACCOUNT_NUMBER }}
                    </v-list-item-subtitle>
                  </div>
                  <v-btn
                    variant="plain"
                    v-clipboard="accountInfo.ACCOUNT_BANK + ' ' + accountInfo.ACCOUNT_NUMBER"
                    @click="snackbar = true"
                  >
                    <v-icon small>mdi-content-copy</v-icon>
                  </v-btn>
                </v-list-item-content>
                <!--                <v-divider class="mt-2" />-->
              </v-list-item>
            </v-list>
          </div>
        </div>
      </section>
    </transition>
  </div>
  <v-snackbar v-model="snackbar" :timeout="timeout" rounded="xl" color="#e2e0d8">
    <div class="d-flex justify-center">{{ text }}</div>
  </v-snackbar>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useAccountInfoPopupStore } from '@/stores/accountInfoPopup'
import { ACCOUNT_INFO_BRIDE, ACCOUNT_INFO_BROOM } from '@/constants/wedding'
import { ref } from 'vue'
const { isPopupOpened } = storeToRefs(useAccountInfoPopupStore())
const { handleAccountInfoPopupOpened } = useAccountInfoPopupStore()

const snackbar = ref(false)
const timeout = 1000
const text = '복사되었습니다.'
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

  &__wrapper {
    width: 90%;
    border-radius: 0.4rem;

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
    height: 80%;
    border-radius: 0.9rem;

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
