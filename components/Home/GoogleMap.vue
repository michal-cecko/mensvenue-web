<template>
  <div id="map">
    <iframe
      id="mapIframe"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1683.9160641549347!2d18.833124363446604!3d49.39088119208579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714412e7a32b65d%3A0x33d8f9100c90f942!2sMen&#39;s%20Venue!5e0!3m2!1ssk!2ssk!4v1643733301486!5m2!1ssk!2ssk&mapTypeControl=false"
      allowfullscreen=""
      loading="lazy"
      title="Men's Venue"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
}
</script>
<style lang="scss">
#map {
  width: 100%;
  height: 100%;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
    filter: grayscale(100%) invert(100%) contrast(100%);
  }
}
.gm-inset-map {
  display: none;
}
</style>
