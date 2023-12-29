<template>
  <div class="d-flex flex-column w-100 font-easta-heavy align-center ga-10 ">
    <div class="d-flex flex-row justify-center">
      <v-btn block variant="outlined" rounded="xl" size="medium" min-width="300" class="pb-2 pt-2"
             @click="dialog = true">
        마음 전하실 곳
      </v-btn>

      <v-dialog
          v-model="dialog"
          width="auto"
      >
        <v-card>
          <v-card-text>
            김병우 : 카카오뱅크 3333-01-2960005
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false">확인</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </div>

    <v-banner
        class="banner"
        lines="one"
        text="간편하게 예식일에 맞춰 축하 화환을 전해보세요. "
        stacked
        sticky
    >
      <template v-slot:actions>
        <v-btn
            variant="outlined"
            color="deep-blue-accent-4"
            href="http://agent.maruw.co.kr/mobile/product?shop=bojagicard&idx=71a17b723e677a2371527fa088e726dd"
            target="_blank"
        >바로 주문
        </v-btn
        >
      </template>
    </v-banner>
  </div>
</template>

<script setup>
import {ref} from "vue";

const dialog = ref(false)
</script>

<style lang="scss" scoped>
@import '/src/styles/common.scss';

.banner {
  background: #0f172a;
  color: white;
}
</style>
