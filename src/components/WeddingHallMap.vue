<template>
  <div
    class="d-flex justify-center flex-column align-center ga-5 font-easta-heavy pt-10 pl-5 pr-5 pb-5"
  >
    <div class="d-flex flex-row pl-5 w-100">
      <div class="sub-title">오시는길</div>
    </div>
    <div id="map" class="mobile-map"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
let map = null
const container = ref(null)
const weddingPosition = ref(null)

onMounted(() => {
  console.log('mounted')
  if (window.kakao?.maps) {
    console.log('1')
    initMap()
  } else {
    console.log('2')
    loadScript()
  }
})

const loadScript = () => {
  const key = import.meta.env.VITE_KAKAOMAP_KEY

  const script = document.createElement('script')
  script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${key}&libraries=services`
  script.addEventListener('load', () => window.kakao.maps.load(initMap))
  document.head.appendChild(script)
}
const initMap = () => {
  container.value = document.getElementById('map')
  const options = {
    center: new window.kakao.maps.LatLng(37.2429362, 131.8624647),
    level: 3
  }
  map = new window.kakao.maps.Map(container.value, options)

  var ps = new window.kakao.maps.services.Places()
  ps.keywordSearch('JK아트컨벤션', placesSearchCB)
}
const placesSearchCB = (data, status, pagination) => {
  if (status === window.kakao.maps.services.Status.OK) {
    var bounds = new window.kakao.maps.LatLngBounds()

    for (var i = 0; i < data.length; i++) {
      displayMarker(data[i])
      bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x))
    }
    map.setBounds(bounds)
  }
}

const displayMarker = (place) => {
  weddingPosition.value = place
  var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
    imageSize = new window.kakao.maps.Size(64, 69),
    imageOption = { offset: new window.kakao.maps.Point(27, 69) }

  var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new window.kakao.maps.LatLng(place.y, place.x)

  var marker = new window.kakao.maps.Marker({
    position: markerPosition,
    image: markerImage
  })
  marker.setMap(map)

  //TODO : 마커 정리하기
  var content =
    '<div class="customoverlay">' +
    '  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
    '    <span class="title">JK아트컨벤션</span>' +
    '  </a>' +
    '</div>'

  var customOverlay = new window.kakao.maps.CustomOverlay({
    map: map,
    position: markerPosition,
    content: content,
    yAnchor: 1
  })
}
</script>

<style lang="scss" scoped>
@import '/src/styles/common.scss';
</style>
