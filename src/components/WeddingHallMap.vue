<template>
  <div class="d-flex justify-center flex-column align-center ga-5 pa-10 font-easta-heavy">
    <div class="d-flex flex-row w-100">
      <div class="sub-title">오시는길</div>
    </div>
    <div class="map_wrap">
      <div
        id="map"
        class="mobile-map"
      ></div>
      <div class="custom_zoomcontrol radius_border">
        <span :onClick="zoomIn"
          ><img
            src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png"
            alt="확대"
        /></span>
        <span :onClick="zoomOut"
          ><img
            src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png"
            alt="축소"
        /></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
let map = null
const container = ref(null)
const weddingPosition = ref(null)

onMounted(() => {
  if (window.kakao?.maps) {
    initMap()
  } else {
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
    center: new window.kakao.maps.LatLng(37.2429362, 131.8624647)
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
    map.setLevel(5)
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
  var overayContent =
    '<div class="customoverlay">' +
    '  <a href="https://map.naver.com/p/entry/place/1897374821?c=15.00,0,0,0,dh" target="_blank">' +
    '    <span class="title">JK아트컨벤션</span>' +
    '  </a>' +
    '</div>'

  var customOverlay = new window.kakao.maps.CustomOverlay({
    map:map,
    position: markerPosition,
    content: overayContent,
    yAnchor: 1
  })
}

const zoomIn = () => {
  map.setLevel(map.getLevel() - 1)
}

const zoomOut = () => {
  map.setLevel(map.getLevel() + 1)
}
</script>

<style lang="scss" scoped>
@import '/src/styles/common.scss';

.map_wrap {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 350px;
}
.radius_border {
  border: 1px solid #919191;
  border-radius: 5px;
}
.custom_zoomcontrol {
  position: absolute;
  top: 50px;
  right: 10px;
  width: 36px;
  height: 80px;
  overflow: hidden;
  z-index: 1;
  background-color: #f5f5f5;
}
.custom_zoomcontrol span {
  display: block;
  width: 36px;
  height: 40px;
  text-align: center;
  cursor: pointer;
  padding: 10px;
}
.custom_zoomcontrol span img {
  width: 15px;
  height: 15px;
  border: none;
}
.custom_zoomcontrol span:first-child {
  border-bottom: 1px solid #bfbfbf;
}
.customoverlay {
  position:relative;
  bottom:85px;
  border-radius:6px;
  border: 1px solid #ccc;
  border-bottom:2px solid #ddd;
  float:left;
}
.customoverlay:nth-of-type(n) {border:0; box-shadow:0px 1px 2px #888;}
.customoverlay a {display:block;text-decoration:none;color:#000;text-align:center;border-radius:6px;font-size:14px;font-weight:bold;overflow:hidden;background: #d95050;background: #d95050 url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png) no-repeat right 14px center;}
.customoverlay .title {display:block;text-align:center;background:#fff;margin-right:35px;padding:10px 15px;font-size:14px;font-weight:bold;}
.customoverlay:after {content:'';position:absolute;margin-left:-12px;left:50%;bottom:-12px;width:22px;height:12px;background:url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png')}
</style>
