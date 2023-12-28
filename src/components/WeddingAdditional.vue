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
const moveToPresent = () => {
}
</script>

<style lang="scss" scoped>
@import '/src/styles/common.scss';

.banner {
  background: #0f172a;
  color: white;
}
</style>
