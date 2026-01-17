# ⚡️ Conecta con Nacho | Brand Identity Platform

Bienvenido al repositorio oficial de la nueva identidad visual para la marca personal **Conecta con Nacho**. Esta plataforma es una presentación interactiva de alto impacto diseñada para mostrar el ecosistema visual de la marca, incluyendo tipografía variable, paleta cromática y estrategias de social media.

![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

---

## 🚀 Vision General

La web ha sido construida bajo la premisa de **"Dinamismo y Conexión"**. Utilizando un enfoque de desarrollo moderno, se ha priorizado la velocidad de carga y la interactividad fluida (efecto *Antigravity*) para elevar la percepción premium de la marca personal.

### Características Principales:
- **Variable Font Tester**: Un motor interactivo (basado en Pangram Pangram) que interpola el peso de la tipografía *Zalando Sans* en tiempo real.
- **Bento Social Grid**: Diseño asimétrico para la visualización de contenidos de YouTube e Instagram con efectos de revelación al scroll.
- **Infinite Marquee**: Footer dinámico con tipografía masiva en movimiento infinito.
- **Scroll Reveal System**: Animaciones escalonadas (*staggered*) que guían la atención del usuario sin interrumpir la navegación.

---

## 🎨 Identidad de Marca

### Tipografía
- **Principal:** `Zalando Sans SemiExpanded` (Variable Font).
- **Pesos:** 100 - 900.

### Paleta de Colores
- **Electric Lima:** `#E9FF27` (Energía y Atención).
- **Deep Ocean:** `#000DFF` (Profundidad y Autoridad).
- **Rich Black:** `#1B1D1C` (Estructura).
- **Pure White:** `#FAFAFA` (Claridad).

---

## 🛠️ Stack Tecnológico

- **Framework:** [Astro 4+](https://astro.build/) (Island Architecture para máxima velocidad).
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) (Motor de diseño basado en Vite).
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/) para las interacciones de UI y tipografía variable.
- **Componentes:** React para micro-interacciones dinámicas.
- **Despliegue:** Vercel (CI/CD conectado a este repositorio).

---

## 📦 Instalación y Uso

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/conecta-nacho.git

## 🩻 Estructura Proyecto
```/
├── public/
│   ├── fonts/              # Tipografías variables (.ttf)
│   └── favicon.svg         # Icono de la pestaña del navegador
├── src/
│   ├── assets/             # Recursos optimizados por Astro
│   │   └── images/
│   │       ├── logo/       # Logotipos y favicons
│   │       └── social/     # Miniaturas de YouTube e Instagram
│   ├── components/         # Componentes modulares y reactivos
│   │   ├── ColorPalette.astro
│   │   ├── Hero.astro
│   │   ├── LogoSection.astro
│   │   ├── Navbar.astro
│   │   ├── RevealText.tsx
│   │   ├── ScrollCarousel.astro
│   │   ├── ScrollReveal.tsx
│   │   ├── SocialMedia.astro
│   │   ├── TypographySection.astro
│   │   └── VariableTester.tsx
│   ├── layouts/            # Plantillas de página y configuración SEO
│   │   └── Layout.astro
│   ├── pages/              # Rutas de la aplicación
│   │   └── index.astro
│   └── styles/             # CSS Global y variables de Tailwind v4
│       └── global.css
├── astro.config.mjs        # Configuración de Astro y Plugins
├── package.json            # Dependencias y Scripts de Node
└── tsconfig.json           # Configuración de TypeScript```
