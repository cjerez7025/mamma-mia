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
│   │   ├── Navbar.jsx              # Navbar condicional según token (login/logout)
│   │   ├── Header.jsx              # Hero con imagen de fondo, título y descripción
│   │   ├── CardPizza.jsx           # Tarjeta de pizza con botón "Añadir al carrito"
│   │   ├── ProtectedRoute.jsx      # PrivateRoute y PublicRoute para rutas protegidas
│   │   └── Footer.jsx              # Pie de página
│   ├── context/
│   │   ├── CartContext.jsx         # Context API: estado global del carrito
│   │   └── UserContext.jsx         # Context API: token de sesión + logout
│   ├── pages/
│   │   ├── Home.jsx                # Página principal con las pizzas (ruta /)
│   │   ├── Login.jsx               # Formulario de login — ruta pública
│   │   ├── Register.jsx            # Formulario de registro — ruta pública
│   │   ├── Cart.jsx                # Carrito con tabla, cantidades y botón Pagar
│   │   ├── Pizza.jsx               # Detalle de pizza con fetch a la API
│   │   ├── Profile.jsx             # Perfil — ruta privada, botón logout
│   │   └── NotFound.jsx            # Página 404 (ruta /404)
│   ├── utils/
│   │   └── formatPrice.js          # Helper formato de precios CLP
│   ├── App.jsx                     # Raíz: UserProvider + CartProvider + rutas protegidas
│   └── main.jsx
├── vite.config.js
└── package.json
```

---

## 🗺️ Rutas disponibles (Hito 7)

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

## 🔄 Flujo de navegación y autenticación (Hito 7)

```
UserProvider (token: true por defecto)
  └─► CartProvider
        └─► BrowserRouter
              └─► Navbar
                    ├─► token=true  → muestra: Home | Profile | 🛒 Total | [Logout]
                    └─► token=false → muestra: Home | Login | Register | 🛒 Total

Rutas protegidas:
  /profile  → PrivateRoute  → si token=false redirige a /login
  /login    → PublicRoute   → si token=true  redirige a /
  /register → PublicRoute   → si token=true  redirige a /

Flujo logout:
  Navbar [Logout] o Profile [Cerrar Sesión]
    → logout() → token=false → navigate("/login")
    → Navbar cambia a Login/Register
    → /profile queda bloqueado

Flujo /pizza/:id:
  CardPizza "Ver Más »" → /pizza/:id
    → useParams() obtiene id
    → fetch("http://localhost:5000/api/pizzas/{id}")
    → muestra datos de la API
    → botón "Añadir al carrito 🛒"
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
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev        # http://localhost:5173/mamma-mia/

# Build de producción
npm run build

# Publicar en GitHub Pages
npm run deploy
```

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

---

*Desafío Latam — Full Stack JS G108*
