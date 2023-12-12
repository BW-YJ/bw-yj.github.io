import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mixin({
    created() {
      AOS.init()
    }
  })
  .mount('#app')
