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

### Frontend (`src/`)

```
mamma-mia/
├── src/
│   ├── assets/
│   │   └── Header.jpg
│   ├── components/
│   │   ├── CardPizza.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Navbar.jsx
│   │   └── ProtectedRoute.jsx
│   ├── context/
│   │   ├── CartContext.jsx
│   │   └── UserContext.jsx
│   ├── pages/
│   │   ├── Cart.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── NotFound.jsx
│   │   ├── Pizza.jsx
│   │   ├── Profile.jsx
│   │   └── Register.jsx
│   ├── services/
│   │   ├── auth.service.js
│   │   └── pizza.service.js
│   ├── utils/
│   │   ├── constants.js
│   │   └── formatPrice.js
│   ├── App.jsx
│   └── main.jsx
├── vite.config.js
└── package.json
```

### Backend (`backend/`)

```
backend/
├── controllers/
│   ├── auth.controller.js
│   ├── checkout.controller.js
│   └── pizza.controller.js
├── db/
│   ├── pizzas.json
│   └── users.json
├── middlewares/
│   └── auth.middleware.js
├── models/
│   ├── auth.model.js
│   └── pizza.model.js
├── routes/
│   ├── auth.route.js
│   ├── checkout.route.js
│   └── pizza.route.js
├── utils/
│   └── validators/
│       └── email.validate.js
├── .env
├── index.js
└── package.json
```

---

## 🗺️ Rutas disponibles (Hito 8)

| Ruta | Componente | Tipo | Descripción |
|---|---|---|---|
| `/` | `Home` | Pública | Página principal con listado de pizzas |
| `/login` | `Login` | Pública* | Formulario de login — redirige a `/` si hay token |
| `/register` | `Register` | Pública* | Formulario de registro — redirige a `/` si hay token |
| `/cart` | `Cart` | Pública | Carrito de compras — botón Pagar deshabilitado sin token |
| `/pizza/:id` | `Pizza` | Pública | Detalle de pizza con fetch a la API |
| `/profile` | `Profile` | **Privada** | Perfil — redirige a `/login` si no hay token |
| `/404` | `NotFound` | Pública | Página no encontrada con enlace a inicio |
| `*` | — | — | Redirige automáticamente a `/404` |

---

## 🔄 Flujo de navegación y autenticación (Hito 8)

```
UserProvider (token: null por defecto — autenticación real con JWT)
  └─► CartProvider
        └─► BrowserRouter
              └─► Navbar
                    ├─► token≠null → muestra: Home | Profile | 🛒 Total | [Logout]
                    └─► token=null → muestra: Home | Login | Register | 🛒 Total

UserContext — métodos:
  login(email, password)   → POST /api/auth/login   → guarda token + email en estado
  register(email, password)→ POST /api/auth/register→ guarda token + email en estado
  logout()                 → limpia token y email del estado
  getProfile()             → GET /api/auth/me        → retorna perfil del usuario autenticado

Rutas protegidas:
  /profile  → PrivateRoute  → si token=null redirige a /login
  /login    → PublicRoute   → si token≠null redirige a /
  /register → PublicRoute   → si token≠null redirige a /

Flujo login/register:
  Login/Register form → login()/register() en UserContext
    → fetch a /api/auth/login o /api/auth/register
    → guarda JWT token + email → navigate("/")

Flujo logout:
  Navbar [Logout] o Profile [Cerrar Sesión]
    → logout() → token=null → navigate("/login")

Flujo checkout:
  Cart [Pagar] → POST /api/checkouts con Authorization: Bearer <token>
    → éxito → muestra mensaje de compra exitosa
    → botón deshabilitado si no hay token
```

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
# --- Frontend (raíz del proyecto) ---
npm install
npm run dev        # http://localhost:5173/mamma-mia/

# Build y deploy a GitHub Pages
npm run build
npm run deploy

# --- Backend (en otra terminal) ---
cd backend
npm install
npm start          # http://localhost:5000
```

> Ambos servidores deben estar corriendo en paralelo para que Login, Register y el listado de pizzas funcionen correctamente en local.

---

## ⚠️ Consideraciones para GitHub Pages (próximos hitos)

Para que la app se vea correctamente en GitHub Pages y no aparezca en blanco, verificar estos 3 puntos antes de cada deploy:

### 1. `vite.config.js` — base del repositorio

```js
export default defineConfig({
  plugins: [react()],
  base: '/mamma-mia/',   // debe coincidir exactamente con el nombre del repo en GitHub
})
```

### 2. `App.jsx` — basename en BrowserRouter

```jsx
// ✅ Correcto — usa la variable BASE_URL de Vite
<BrowserRouter basename={import.meta.env.BASE_URL}>

// ❌ Incorrecto — sin basename, ninguna ruta coincide en GitHub Pages
<BrowserRouter>
```

> `import.meta.env.BASE_URL` toma automáticamente el valor de `base` en `vite.config.js`,
> tanto en desarrollo (`/mamma-mia/`) como en producción.

### 3. `gh-pages` instalado y secuencia de deploy

```bash
# Solo la primera vez (o si se clona el repo):
npm install --save-dev gh-pages

# Siempre antes de deploy: hacer build primero
npm run build
npm run deploy
```

> Después del deploy, esperar 1–2 minutos y recargar la URL de GitHub Pages.

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

### Hito 6 — Context API (10 pts)

| Criterio | Pts | Estado |
|---|---|---|
| `CartContext` con `CartProvider` que maneja el estado global del carrito | 2 | ✅ |
| Navbar consume `CartContext` y muestra el precio total actualizado | 2 | ✅ |
| Botón "Añadir" en `CardPizza` agrega productos al carrito vía `CartContext` | 2 | ✅ |
| Página `Cart` muestra productos del carrito, permite agregar y eliminar con `CartContext` | 2 | ✅ |
| Total de la compra calculado en `CartContext`, igual en `Cart` y en `Navbar` | 2 | ✅ |

### Hito 7 — React Router II (10 pts)

| Criterio | Pts | Estado |
|---|---|---|
| `useParams` en `Pizza.jsx` obtiene el id y realiza fetch a `GET /api/pizzas/:id` | 2 | ✅ |
| `UserContext` con estado `token` (default `true`) y método `logout` que lo pone en `false` | 2 | ✅ |
| Navbar usa `UserContext`: logout ejecuta `logout()`, muestra Profile/Logout o Login/Register según token | 2 | ✅ |
| `Cart.jsx` usa `UserContext`: botón "Pagar" deshabilitado cuando `token === false` | 1 | ✅ |
| Ruta `/profile` protegida (redirige a `/login` sin token); `/login` y `/register` redirigen a `/` con token | 3 | ✅ |

### Hito 8 — Autenticación real con JWT (10 pts)

| Criterio | Pts | Estado |
|---|---|---|
| `UserContext` implementa `login(email, password)` y `register(email, password)` consumiendo `/api/auth/login` y `/api/auth/register`, almacenando token y email en estado | 2 | ✅ |
| `UserContext` implementa `logout()` que elimina token y email del estado | 1 | ✅ |
| `UserContext` implementa `getProfile()` consumiendo `GET /api/auth/me` con token JWT | 1 | ✅ |
| `Login.jsx` y `Register.jsx` usan los métodos de `UserContext` directamente | 2 | ✅ |
| `Profile.jsx` muestra email del usuario autenticado y botón para cerrar sesión | 1 | ✅ |
| Botón logout del Navbar cierra la sesión del usuario | 1 | ✅ |
| `Cart.jsx` envía el carrito al backend consumiendo `POST /api/checkouts` con token JWT | 1 | ✅ |
| `Cart.jsx` muestra mensaje de éxito cuando se realiza la compra | 1 | ✅ |

---

*Desafío Latam — Full Stack JS G108*
