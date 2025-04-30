<template>
  <div class="copyRight">
    <span>
      2022 Mensvenue © Všetky práva vyhradené.
      <br class="hidden-sm-and-up" />
      Made with <span class="heard">♥</span> by
      <a href="https://synapps.sk/" class="myBold">Synapps</a>
    </span>
  </div>
</template>
<script>
export default {
  name: 'CopyRight',
}
</script>
<style lang="scss" scoped>
.copyRight {
  background-color: #171717;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-family: 'Raleway';
    color: #a0a0a0;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
    &.myBold {
      font-weight: 700;
    }
    &.heard {
      color: red;
      font-size: 1.2rem;
    }
  }
}
@media only screen and (max-width: 600px) {
  .copyRight {
    height: 63px;
    span {
      text-align: center;
      font-family: 'Raleway';
      color: #a0a0a0;
      font-size: 12px;
      letter-spacing: 1.2px;
      &.heard {
        font-size: 14px;
      }
    }
  }
}
</style>
