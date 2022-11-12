<template>
  <div class="home">
    <BackToTop />
    <BeforeUvod v-if="!isLoaded" />
    <Uvod v-if="isLoaded" />
    <ONas />
    <Sluzby />
    <Feedback />
    <Galeria />
  </div>
</template>

<script>
import BackToTop from '@/components/BackToTop.vue'
import Uvod from '@/components/Home/Uvod/Uvod.vue'
import BeforeUvod from '@/components/Home/Uvod/BeforeUvod.vue'
import ONas from '@/components/Home/ONas/ONas.vue'
import Sluzby from '@/components/Home/Sluzby/Sluzby.vue'
import Feedback from '@/components/Home/Feedback/Feedback.vue'
import Galeria from '@/components/Home/Galeria/Galeria.vue'

export default {
  name: 'Home',
  components: {
    BackToTop,
    BeforeUvod,
    Uvod,
    ONas,
    Sluzby,
    Feedback,
    Galeria,
  },
  props: {
    nuxtChildKey: String,
  },
  data() {
    return {
      isLoaded: false,
    }
  },
  created() {
    this.isLoaded = this.nuxtChildKey == 'false' ? false : true
  },
}
</script>
