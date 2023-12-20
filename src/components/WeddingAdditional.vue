<template>
  <div class="d-flex flex-column w-100 font-easta-heavy">
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
          href="https://agent.maruw.co.kr/product?shop=bojagicard&idx=e75f1236187d42c719996f84495b7b34"
          target="_blank"
          >바로 주문</v-btn
        >
      </template>
    </v-banner>
  </div>
</template>

<script setup>
const moveToPresent = () => {}
</script>

<style lang="scss" scoped>
@import '/src/styles/common.scss';
.banner {
  background: #0f172a;
  color: white;
}
</style>
