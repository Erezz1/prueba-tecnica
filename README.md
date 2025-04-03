# 📘 Documentación para correr la aplicación

Este proyecto usa **React**, **Vite**, **TypeScript** y **TailwindCSS**. Además, el gestor de paquetes utilizado es **pnpm**.

## ✅ Requisitos previos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (v16 o superior recomendado)
- [pnpm](https://pnpm.io/) (v8 o superior recomendado)

Puedes verificar las versiones ejecutando:

```bash
node -v
pnpm -v
```

## 📂 Instalación de dependencias
Para instalar las dependencias del proyecto, ejecuta:

```bash
pnpm install
```

## ▶️ Ejecución en modo desarrollo
Para iniciar el servidor de desarrollo, usa:

```bash
pnpm dev
```

Esto abrirá la aplicación en [http://localhost:5173](http://localhost:5173).

## 🎨 Configuración de TailwindCSS
TailwindCSS ya está configurado en el proyecto. Asegúrate de que los estilos estén correctamente importados en ```src/app.css```:

```bash
@import "tailwindcss";
```

## 🛠️ Otros comandos útiles
- ```pnpm build```: Compila la aplicación para producción.
- ```pnpm preview```: Previsualiza la aplicación compilada.
