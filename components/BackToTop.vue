<template>
  <div :class="['backToTop', scY > 100 ? 'active' : '']" id="backToTop">
    <v-btn @click="toTop()" class="arrowBtn" fab>
      <img src="~/assets/images/svg/feedback_arrow.svg" alt="Back to top" />
    </v-btn>
  </div>
</template>
<script>
import animateScrollTo from 'animated-scroll-to'
export default {
  name: 'BackToTop',
  data() {
    return {
      scTimer: 0,
      scY: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (this.scTimer) return
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY
        clearTimeout(this.scTimer)
        this.scTimer = 0
      }, 100)
    },
    toTop() {
      animateScrollTo(0)
    },
  },
}
</script>
<style lang="scss" scoped>
.backToTop {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 4;
  pointer-events: none;
  opacity: 0;
  transition: 0.5s ease all;
  .arrowBtn {
    transform: rotate(90deg);
    background-color: #979797;
    height: 50px;
    width: 50px;
  }
  &.active {
    pointer-events: all;
    opacity: 1;
  }
}
@media only screen and (max-width: 600px) {
  .backToTop {
    right: 1rem;
    bottom: 1rem;
    .arrowBtn {
      height: 35px;
      width: 35px;
      img {
        transform: scale(0.8);
      }
    }
  }
}
</style>
