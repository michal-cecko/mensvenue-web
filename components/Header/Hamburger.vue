<template>
  <div :class="[isOpened ? 'open' : '', 'hamburger']">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>
<script>
export default {
  name: "Hamburger",
  props: {
    isOpened: Boolean,
  },
};
</script>
<style lang="scss">
.hamburger {
  z-index: 10;
  width: 3rem;
  height: 1.69rem;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

.hamburger span {
  display: block;
  position: absolute;
  height: 1.5px;
  width: 100%;
  background: white;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

/* Icon 3 */

.hamburger span:nth-child(1) {
  top: 0px;
}

.hamburger span:nth-child(2),
.hamburger span:nth-child(3) {
  top: 12px;
}

.hamburger span:nth-child(4) {
  top: 24px;
}

.hamburger.open span:nth-child(1) {
  top: 12px;
  width: 0%;
  left: 50%;
}

.hamburger.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.hamburger.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.hamburger.open span:nth-child(4) {
  top: 12px;
  width: 0%;
  left: 50%;
}

@media only screen and (max-width: 960px) {
  .hamburger {
    & > span {
      height: 1px !important;
    }
  }
}

@media only screen and (max-width: 600px) {
  .hamburger {
    width: 1.875rem;
    position: absolute;
    top: 0;
    right: -1rem;
    & > span {
      height: 0.5px !important;
    }
  }
  .hamburger span:nth-child(2),
  .hamburger span:nth-child(3) {
    top: 9px;
  }

  .hamburger span:nth-child(4) {
    top: 19px;
  }

  .hamburger.open span:nth-child(1) {
    top: 9px;
    width: 0%;
    left: 50%;
  }

  .hamburger.open span:nth-child(4) {
    top: 9px;
    width: 0%;
    left: 50%;
  }
}
</style>