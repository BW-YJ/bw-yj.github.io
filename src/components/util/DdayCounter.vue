<template>
  <div>
    <slot
      :days="days"
      :hours="hours"
      :minutes="minutes"
      :seconds="seconds"
      :plusMinus="plusMinus"
    ></slot>
  </div>
</template>

<script setup>
import { computed, onBeforeMount, ref } from 'vue'
import {
  dayCounter,
  hourCounter,
  minuteCounter,
  secondCounter
} from '@/components/util/DdayCounter'
const { timestampEnd } = defineProps({
  timestampEnd: {
    type: Number,
    default: new Date('2024-03-09T17:30:00').getTime()
  }
})
const remainingDate = ref(new Date().getTime())
const timer = ref('')
const days = computed(() => dayCounter(remainingDate.value))
const hours = computed(() => hourCounter(remainingDate.value))
const minutes = computed(() => minuteCounter(remainingDate.value))
const seconds = computed(() => secondCounter(remainingDate.value))
const plusMinus = computed(() => (timestampEnd >= new Date().getTime() ? '-' : '+'))

const updateTime = () => {
  remainingDate.value =
    timestampEnd >= new Date().getTime()
      ? timestampEnd - new Date().getTime()
      : new Date().getTime() - timestampEnd
}
onBeforeMount(() => {
  created()
})
const created = () => {
  updateTime()
  timer.value = setInterval(updateTime, 1000)
}
</script>

<style lang="scss" scoped></style>
