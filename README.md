## 📝 Portafolio Minimalista

Un portafolio web minimalista y elegante construido con Astro. Diseñado para mostrar tu experiencia profesional, habilidades y proyectos de una manera limpia y eficiente.

## ✨ Características

- 🎨 Diseño minimalista y profesional
- 📱 Totalmente responsive
- 🖨️ Versión optimizada para impresión
- ⚡ Rendimiento óptimo gracias a Astro
- 📊 Basado en [JSON Resume Schema](https://jsonresume.org/schema/)
- 🌐 Iconos SVG optimizados
- 🔗 Enlaces directos para contacto (email, teléfono, redes sociales)

## 🚀 Project Structure and Tecnologías

Dentro de tu proyecto Astro, verás las siguientes carpetas y archivos:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── icons/
│   │       ├── Github.astro
│   │       ├── Impresora.astro
│   │       ├── Letter.astro
│   │       ├── Linkedin.astro
│   │       ├── Phone.astro
│   │       ├── Worldmap.astro
│   │       └── X.astro
│   ├── components/
│   │   ├── KeyboardManager.astro
│   │   └── Section.astro
│   ├── data/
│   │   └── resume.json
│   ├── layouts/
│   │   └── layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── sections/
│       ├── About.astro
│       ├── Education.astro
│       ├── Experience.astro
│       ├── Hero.astro
│       ├── Projects.astro
│       └── Skills.astro
├── .gitignore
├── astro.config.mjs
├── pnpm-lock.yaml
├── README.md
├── tsconfig.json
```

- [Astro](https://astro.build)
- TypeScript
- CSS Moderno (Grid, Flexbox)

## 📥 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/Mianr0/portafolio-minimalista.git
cd portafolio-minimalista
```

2. Instala las dependencias:

```bash
pnpm install
```

3. Inicia el servidor de desarrollo:

```bash
pnpm dev
```

## 🛠️ Comandos

| Comando        | Acción                                            |
| :------------- | :------------------------------------------------ |
| `pnpm install` | Instala las dependencias                          |
| `pnpm dev`     | Inicia servidor de desarrollo en `localhost:4321` |
| `pnpm build`   | Construye el sitio para producción en `./dist/`   |
| `pnpm preview` | Previsualiza la build localmente                  |

## 📝 Personalización

1. Modifica el archivo `src/data/resume.json` con tu información personal
2. Actualiza las imágenes en `src/assets`
3. Ajusta los estilos en los archivos `.astro` según necesites
4. Modifica los iconos en `src/assets/icons`

## 🎨 Diseño

Inspirado en el diseño de [BartoszJarocki/cv](https://github.com/BartoszJarocki/cv)

## 📄 Licencia

MIT - Siéntete libre de usar este código para tu propio portafolio' >
