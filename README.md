# Men's Venue — Barber site

Marketing site for [Men's Venue](https://mensvenue.sk), a barber shop in Žilina (SK). One-page Nuxt site with bookings handled via the Bookio widget.

Live at **[mensvenue.sk](https://mensvenue.sk)**.

## Stack

- **Nuxt 2** + **Vue 2** (kept stable for the client)
- **Vuetify** for base components
- **AOS** for scroll-triggered animations
- **vue-slick-carousel** + **vue-flickity** for image carousels
- **particles.js** for background effects
- External booking via **Bookio** widget embed

## Local dev

> ⚠️ Requires **Node 16** (Nuxt 2 + Vuetify + node-sass don't build on newer Node).

```bash
nvm use 16
npm install
npm run dev                 # http://localhost:3000
```

## Build

```bash
npm run build && npm run start       # SSR
npm run generate                     # static export
```

## License

[MIT](LICENSE) © Michal Čečko
