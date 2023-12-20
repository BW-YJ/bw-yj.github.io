import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { loadFonts } from './plugins/webfontloader'
import VCalendar from 'v-calendar'
import 'v-calendar/style.css'

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(VCalendar, {})
  .mixin({
    created() {
      AOS.init()
    }
  })
  .mount('#app')
