This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

```
AMP-Vending_web-app
├─ auth.config.ts
├─ components
│  ├─ admin
│  │  ├─ AdminDashboard.tsx
│  │  ├─ AdminHeader.tsx
│  │  ├─ AdminLayout.tsx
│  │  ├─ AdminLogin.tsx
│  │  └─ AdminSidebar.tsx
│  ├─ AMPVendingLogo.tsx
│  ├─ auth
│  │  ├─ AuthProvider.tsx
│  │  └─ DevelopmentAuthProvider.tsx
│  ├─ hero
│  │  └─ HeroParallax.tsx
│  ├─ layout
│  │  └─ Navbar.tsx
│  ├─ sections
│  │  ├─ ContactForm.tsx
│  │  ├─ KoolMoreVendingShowcase.tsx
│  │  ├─ ProductSection.tsx
│  │  ├─ RevenueVisualization.tsx
│  │  ├─ VendingMachineOptions.tsx
│  │  └─ WorkplaceBenefits.tsx
│  └─ ui
│     ├─ bento-grid.tsx
│     ├─ Button.tsx
│     ├─ Card.tsx
│     ├─ FeatureItem.tsx
│     ├─ hero-parallax.tsx
│     ├─ sticky-scroll-reveal.tsx
│     ├─ Tabs.tsx
│     └─ VendingMachinePlaceholder.tsx
├─ eslint.config.mjs
├─ hooks
│  └─ useVendingMachines.ts
├─ lib
│  ├─ schema
│  │  └─ contactFormSchema.ts
│  ├─ services
│  │  ├─ dashboardService.ts
│  │  └─ emailService.ts
│  ├─ theme.ts
│  ├─ types.ts
│  ├─ utils.ts
│  └─ vendingMachineData.ts
├─ middleware.ts
├─ next-auth.d.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ pages
│  ├─ api
│  │  ├─ auth
│  │  │  └─ [...nextauth]
│  │  │     └─ route.ts
│  │  ├─ contact
│  │  │  └─ route.ts
│  │  └─ hello.ts
│  ├─ index.tsx
│  ├─ _app.tsx
│  └─ _document.tsx
├─ postcss.config.mjs
├─ public
│  ├─ favicon.ico
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ images
│  │  ├─ beverages
│  │  │  ├─ coke.jpg
│  │  │  ├─ drpepper.jpg
│  │  │  ├─ gatorade.jpg
│  │  │  ├─ justwater.jpg
│  │  │  ├─ monster.jpg
│  │  │  └─ RedBull.jpg
│  │  ├─ Hero-Vending.jpg
│  │  ├─ Map.jpg
│  │  ├─ Map_Location.jpg
│  │  ├─ snacks
│  │  │  ├─ cheetos.jpg
│  │  │  ├─ doritos.jpg
│  │  │  ├─ lays.jpg
│  │  │  ├─ mms.jpg
│  │  │  ├─ skittles.jpg
│  │  │  └─ snickers.jpg
│  │  ├─ TheGlampingSpot-Logo.png
│  │  ├─ Vending-Back.jpg
│  │  ├─ Vending-coin.jpg
│  │  ├─ vending-crop.jpg
│  │  ├─ vending-machine-svg
│  │  ├─ vending-machine.jpg
│  │  ├─ vending-machine2.jpg
│  │  ├─ vending-machines
│  │  │  ├─ back-transparent.png
│  │  │  ├─ front-Bg-Transparent.png
│  │  │  ├─ front-transparent.png
│  │  │  ├─ Front.jpg
│  │  │  ├─ left-transparent.png
│  │  │  ├─ left.jpg
│  │  │  ├─ Logo-transparent.png
│  │  │  ├─ measurements-removebg-preview.png
│  │  │  ├─ measurements.jpg
│  │  │  ├─ payment-options-transparent.png
│  │  │  ├─ payment-system-bg-transparent.png
│  │  │  ├─ payment-system-transparent.png
│  │  │  ├─ payment-system.jpg
│  │  │  ├─ push-door.jpg
│  │  │  ├─ right-bg-transparent.png
│  │  │  ├─ right-removebg-preview.png
│  │  │  ├─ right-transparent.png
│  │  │  ├─ right.jpg
│  │  │  ├─ Screenshot 2025-04-08 155836.png
│  │  │  └─ TouchScreen.jpg
│  │  ├─ Vending-Measurements.jpg
│  │  ├─ vending-pic.jpg
│  │  ├─ Vending-Push-Door.jpg
│  │  ├─ Vending-Screen.jpg
│  │  ├─ Vending-Screen2.jpg
│  │  ├─ vending.jpg
│  │  ├─ Vending1.jpg
│  │  ├─ Vending2.jpg
│  │  ├─ Vending3.jpg
│  │  └─ Vending_Bill-Insert.jpg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ styles
│  └─ globals.css
└─ tsconfig.json

```