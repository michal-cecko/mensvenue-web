<template>
  <v-app :class="[isLoading ? 'loading' : '']">
    <ParticlesJS />
    <LoadingScreen :isLoading="isLoading"></LoadingScreen>
    <v-main v-show="!isLoading" :class="['content']">
      <Header :isLoaded="!isLoading" />
      <nuxt :nuxt-child-key="isLoadingStr" />
      <Footer />
      <CopyRight />
    </v-main>
  </v-app>
</template>

<script>
import Vue from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import CopyRight from '@/components/CopyRight.vue'
import LoadingScreen from '@/components/LoadingScreen.vue'
import ParticlesJS from '@/components/ParticlesJS.vue'

Vue.filter('wrapText', function (text, addToWrap) {
  const a = text.split(' ')
  let str = ''
  for (let x = 0; x < a.length; x++) {
    str += '<span>'
    str += a[x]
    str += ' </span>'
  }
  str += addToWrap
  return str
})

import '@/assets/style/style.scss'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    LoadingScreen,
    CopyRight,
    ParticlesJS,
  },
  data() {
    return {
      isLoadingStr: 'false',
      isLoading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false
      this.isLoadingStr = 'true'
    }, 1200)
  },
}
</script>
<style lang="scss">
.content {
  position: absolute;
  width: 100%;
}
.loading {
  overflow: hidden;
  height: 80vh;
}
</style>
