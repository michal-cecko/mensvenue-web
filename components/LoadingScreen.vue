<template>
  <div id="loading">
    <img
      src="~/assets/images/svg/Logo.svg"
      :class="[isLoading ? '' : 'active', 'img']"
      alt="Loading..."
    />
  </div>
</template>
<script>
export default {
  name: 'LoadingScreen',
  props: {
    isLoading: Boolean,
  },
}
</script>
<style scoped lang="scss">
#loading {
  top: 0;
  position: absolute;
  height: 100vh;
  width: 100vw;
  text-align: center;
}
.img {
  z-index: 5;
  position: absolute;
  top: 4.3rem;
  transform: translate(-50%);
  height: 1.7rem;
  &:not(.active) {
    top: 50%;
    height: 5rem;
  }
  &.active {
    animation-name: logo_animation;
    animation-duration: 1s;
  }
}
@keyframes logo_animation {
  0% {
    top: 50%;
    height: 5rem;
  }
  100% {
    top: 4.3rem;
    height: 1.7rem;
  }
}

@media only screen and (max-width: 960px) and (min-width: 600px) {
  .img {
    top: 4.3rem;
    height: 1.7rem;
    &:not(.active) {
      top: 45%;
      height: 3rem;
    }
    &.active {
      animation-name: logo_animation_tablet;
      animation-duration: 1s;
      transform: translate(-50%);
    }
  }
}
@keyframes logo_animation_tablet {
  0% {
    top: 45%;
    height: 3rem;
  }
  100% {
    top: 4.3rem;
    height: 1.7rem;
  }
}
@media only screen and (max-width: 600px) {
  .img {
    top: 2rem;
    left: 2rem;
    height: 1.25rem;
    transform: translate(0);
    &:not(.active) {
      top: 40%;
      left: 50%;
      height: 1.25rem;
      transform: translate(-50%);
    }
    &.active {
      animation-name: logo_animation_mobil;
      animation-duration: 1s;
    }
  }
}

@media only screen and (max-width: 375px) {
  .img {
    height: 1.1rem;
    &:not(.active) {
      height: 1.1rem;
    }
  }
}

@media only screen and (max-width: 1200px) and (min-width: 961px) {
  .img {
    width: 80%;
  }
}

@keyframes logo_animation_mobil {
  0% {
    top: 40%;
    left: 50%;
    transform: translate(-50%);
  }
  100% {
    top: 2rem;
    left: 2rem;
    transform: translate(0);
  }
}
</style>
