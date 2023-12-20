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
            height="100%"
          ></v-img>
        </v-col>

        <v-col v-if="image.children" cols="6" class="d-flex flex-column">
          <v-row>
            <v-col
              v-for="(children, childIdx) in image.children"
              :key="childIdx"
              :cols="children.cols"
            >
              <v-img
                :src="`https://bw-yj.github.io/images/photo${imgIdx + children.cols}.png`"
                cover
                height="100%"
              ></v-img>
            </v-col>
          </v-row>
        </v-col>
      </template>
    </v-row>
  </div>
</template>

<script setup>
const imageLayout = [
  { cols: 6 },
  {
    cols: 6,
    children: [{ cols: 12 }, { cols: 12 }]
  },
  { cols: 6 },
  { cols: 3 },
  { cols: 9 },
  { cols: 6 },
  { cols: 6 }
]
</script>

<style lang="scss" scoped>
@import '/src/styles/common.scss';
</style>
