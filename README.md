# 🍕 Pizzería Mamma Mía — Hito 1

Proyecto incremental desarrollado con **React + Vite.js** como parte del curso Full Stack JavaScript en Desafío Latam.

---

## 🚀 Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| React 18 | Librería principal de UI |
| Vite.js | Bundler y servidor de desarrollo |
| Bootstrap 5 | Estilos y componentes visuales |

---

## 📁 Estructura del proyecto

```
mamma-mia/
├── public/
├── src/
│   ├── assets/
│   │   └── Header.jpg          # Imagen de fondo del header
│   ├── components/
│   │   ├── Navbar.jsx          # Barra de navegación con token y total
│   │   ├── Header.jsx          # Hero con imagen, título y descripción
│   │   ├── Home.jsx            # Página principal
│   │   ├── CardPizza.jsx       # Tarjeta de producto (recibe props)
│   │   └── Footer.jsx          # Pie de página
│   ├── utils/
│   │   └── formatPrice.js      # Helper: formateo de precios en CLP
│   ├── App.jsx                 # Raíz: monta Navbar, Home y Footer
│   └── main.jsx                # Entry point de React/Vite
├── index.html
└── package.json
```

---

## 🔄 Flujo de componentes

```
App.jsx
├── <Navbar />
│     ├── token=false → 🔐 Login | 🔐 Register
│     ├── token=true  → 🔓 Profile | 🔒 Logout
│     ├── 🍕 Home          (siempre visible)
│     └── 🛒 Total: $25.000 (siempre visible)
│
├── <Home />
│     ├── <Header />   (imagen fondo + título + descripción)
│     ├── <CardPizza name="Napolitana" price={5950} ... />
│     ├── <CardPizza name="Española"  price={6950} ... />
│     └── <CardPizza name="Pepperoni" price={6950} ... />
│
└── <Footer />
```

---

## ⚙️ Instalación y uso

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # build producción
```

---

## 📋 Criterios Hito 1 — Estado

| Criterio | Pts | Estado |
|---|---|---|
| App.jsx muestra Navbar, Home y Footer | 2 | ✅ |
| Header.jsx con título y descripción en Home.jsx | 1 | ✅ |
| Navbar.jsx con 6 opciones de navegación | 2 | ✅ |
| Home y Total siempre visibles (independiente del token) | 2 | ✅ |
| CardPizza.jsx con props: name, price, ingredients, img | 2 | ✅ |
| Footer.jsx con derechos reservados | 1 | ✅ |
| **TOTAL** | **10** | ✅ |

---

## 📌 Próximos hitos (proyecto incremental)

- React Router (navegación entre vistas)
- Context API / estado global (carrito, autenticación)
- Integración con APIs externas
- Funcionalidad en botones (Añadir, Ver Más, Login real)

---
*Desafío Latam — Full Stack JS G108*
