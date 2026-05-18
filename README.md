# 🍕 Pizzería Mamma Mía

Proyecto incremental desarrollado con **React + Vite.js** como parte del curso Full Stack JavaScript en Desafío Latam (G108).

🌐 **Demo en vivo:** [https://cjerez7025.github.io/mamma-mia/](https://cjerez7025.github.io/mamma-mia/)

---

## 🚀 Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| React 18 | Librería principal de UI |
| Vite.js | Bundler y servidor de desarrollo |
| React Router DOM v6 | Enrutamiento del lado del cliente |
| Bootstrap 5 | Estilos base |
| react-bootstrap | Componentes UI (Navbar, Form, Alert, Button) |
| gh-pages | Despliegue en GitHub Pages |

---

## 📁 Estructura del proyecto

```
mamma-mia/
├── src/
│   ├── assets/
│   │   └── Header.jpg              # Imagen de fondo del hero (fallback)
│   ├── components/
│   │   ├── Navbar.jsx              # Barra de navegación con Link de React Router
│   │   ├── Header.jsx              # Hero con imagen de fondo, título y descripción
│   │   ├── CardPizza.jsx           # Tarjeta de pizza con Link a /pizza/:id
│   │   └── Footer.jsx              # Pie de página
│   ├── pages/
│   │   ├── Home.jsx                # Página principal con las pizzas (ruta /)
│   │   ├── Login.jsx               # Formulario de login (ruta /login)
│   │   ├── Register.jsx            # Formulario de registro (ruta /register)
│   │   ├── Cart.jsx                # Carrito de compras (ruta /cart)
│   │   ├── Pizza.jsx               # Detalle de pizza (ruta /pizza/:id)
│   │   ├── Profile.jsx             # Perfil de usuario (ruta /profile)
│   │   └── NotFound.jsx            # Página 404 (ruta /404)
│   ├── utils/
│   │   └── formatPrice.js          # Helper formato de precios CLP
│   ├── App.jsx                     # Raíz: BrowserRouter + Routes
│   └── main.jsx
├── vite.config.js
└── package.json
```

---

## 🗺️ Rutas disponibles (Hito 5)

| Ruta | Componente | Descripción |
|---|---|---|
| `/` | `Home` | Página principal con listado de pizzas |
| `/login` | `Login` | Formulario de inicio de sesión |
| `/register` | `Register` | Formulario de registro de usuario |
| `/cart` | `Cart` | Carrito de compras |
| `/pizza/:id` | `Pizza` | Detalle de una pizza (`p001`, `p002`, `p003`) |
| `/profile` | `Profile` | Perfil del usuario con botón cerrar sesión |
| `/404` | `NotFound` | Página no encontrada con enlace a inicio |
| `*` | — | Redirige automáticamente a `/404` |

---

## 🔄 Flujo de navegación (Hito 5 — React Router)

```
Navbar (siempre visible)
  ├─► /           →  Home (pizzas)
  ├─► /login      →  Login
  ├─► /register   →  Register
  ├─► /profile    →  Profile
  └─► /cart       ←  botón 🛒 Total: $xx.xxx

Home
  └─► CardPizza → "Ver Más »" → /pizza/:id

Profile
  └─► "Cerrar Sesión" → /login

Ruta desconocida → /404 → enlace "Volver al inicio" → /
```

---

## 🔄 Flujo de navegación (Hito 2 — Estado con useState)

### Validaciones formularios
```
Login (/login):
  ✓ Campos obligatorios (email + password)
  ✓ Password mínimo 6 caracteres

Register (/register):
  ✓ Campos obligatorios (email + password + confirmPassword)
  ✓ Password mínimo 6 caracteres
  ✓ Password === ConfirmPassword
  ✓ Éxito → muestra alerta de confirmación
```

---

## ⚙️ Instalación y uso

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev        # http://localhost:5173

# Build de producción
npm run build

# Publicar en GitHub Pages
npm run deploy
```

---

## 📋 Criterios de evaluación

### Hito 1 — Introducción a React (10 pts)

| Criterio | Pts | Estado |
|---|---|---|
| App.jsx muestra Navbar, Home y Footer | 2 | ✅ |
| Header.jsx con título y descripción llamado desde Home.jsx | 1 | ✅ |
| Navbar.jsx con opciones de navegación | 2 | ✅ |
| Home y Total siempre visibles | 2 | ✅ |
| CardPizza.jsx con props: name, price, ingredients, img | 2 | ✅ |
| Footer.jsx con derechos reservados | 1 | ✅ |

### Hito 2 — Estado de componentes y eventos (10 pts)

| Criterio | Pts | Estado |
|---|---|---|
| RegisterPage con email, password, confirmPassword + validaciones + mensaje éxito | 5 | ✅ |
| LoginPage con email, password + validaciones + mensaje éxito | 5 | ✅ |

### Hito 5 — React Router I (10 pts)

| Criterio | Pts | Estado |
|---|---|---|
| Instalación y configuración de React Router DOM | 2 | ✅ |
| Componentes Home, Register, Login, Cart y Pizza trasladados a `pages/` | 1 | ✅ |
| Rutas creadas: `/`, `/register`, `/login`, `/cart`, `/pizza/p001`, `/profile`, `/404` | 2 | ✅ |
| Componente `NotFound` con enlace a `/` para rutas inexistentes | 2 | ✅ |
| Componente `Profile` con email estático y botón cerrar sesión | 1 | ✅ |
| Navbar con `Link` de React Router y botón total redirige a `/cart` | 2 | ✅ |

---

*Desafío Latam — Full Stack JS G108*
