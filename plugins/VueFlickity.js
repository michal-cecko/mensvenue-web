import Vue from 'vue'

import Flickity from 'vue-flickity'
Vue.component('Flickity', Flickity)

import Particles from 'particles.js'
Vue.use(Particles)



import AOS from 'aos'
import 'aos/dist/aos.css'
export default ({ app }) => {
  app.AOS = new AOS.init() //   { disable: 'phone' } or any other options you need
}
