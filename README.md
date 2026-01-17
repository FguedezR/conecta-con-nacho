# ⚡️ Conecta con Nacho | Brand Identity Platform

Presentación interactiva de la nueva identidad visual para la marca personal **Conecta con Nacho**. Una experiencia web de alto impacto construida con enfoque en el rendimiento tipográfico y fluidez visual.

---

## 🔗 Live Demo
Puedes ver el proyecto desplegado en tiempo real aquí:
👉 **[https://conecta-con-nacho.vercel.app/](https://conecta-con-nacho.vercel.app/)**

---

## 🚀 Vision General

La plataforma ha sido diseñada para reflejar modernidad, autoridad y dinamismo. Utiliza un sistema de diseño basado en **Astro 4** y **Tailwind CSS v4**, permitiendo una carga instantánea y animaciones fluidas que no comprometen la experiencia de usuario.

### Características Principales:
- **Variable Font Engine**: Interfaz interactiva que muestra la versatilidad de la tipografía *Zalando Sans* mediante interpolación de peso dinámica.
- **Bento Social Grid**: Galería asimétrica para miniaturas de YouTube e Instagram con efectos de revelación al scroll.
- **Infinite Marquee**: Footer dinámico con tipografía masiva en movimiento continuo.
- **Social Carousel**: Transiciones infinitas entre secciones con efectos de difuminado lateral (*fade edges*).
- **SEO & Performance**: Optimización completa de imágenes (WebP), fuentes locales y meta-etiquetas dinámicas.

---

## 🎨 Identidad de Marca

- **Electric Lima:** `#E9FF27` (Energía)
- **Deep Ocean:** `#000DFF` (Profundidad)
- **Rich Black:** `#1B1D1C` (Estructura)
- **Tipografía:** `Zalando Sans SemiExpanded` (Variable Font)

---

## 🛠️ Stack Tecnológico

- **Framework:** [Astro 4](https://astro.build/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
- **Componentes:** React (para micro-interacciones de tipografía variable)
- **Despliegue:** [Vercel](https://vercel.com/)

---

## 📂 Estructura del Proyecto

```text
/
├── public/           # Recursos estáticos y fuentes
├── src/
│   ├── assets/       # Imágenes optimizadas (.webp)
│   ├── components/   # Secciones modulares (.astro / .tsx)
│   ├── layouts/      # Configuración base y SEO
│   ├── pages/        # Punto de entrada principal
│   └── styles/       # CSS Global con @theme v4
└── astro.config.mjs  # Integraciones (React/Tailwind)
