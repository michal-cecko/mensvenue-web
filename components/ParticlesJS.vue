<template>
  <div class="particles">
    <div id="particles-js"></div>
  </div>
</template>

<script>
export default {
  name: 'ParticlesJS',
  mounted() {
    this.initParticles()
  },
  methods: {
    initParticles() {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 10,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          color: {
            value: '#1C1C1C',
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000',
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: 'img/github.svg',
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 1,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#1c1c1c',
            opacity: 1,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'bounce',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: 'window',
          events: {
            onhover: {
              enable: false,
              mode: 'bubble',
            },
            onclick: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 113.69080972218832,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      })
    },
  },
}
</script>

<style scoped>
/*---- particles.js container ---- */
#particles-js {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #060606;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
</style>
