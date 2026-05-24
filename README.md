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
│   │   ├── Navbar.jsx              # Barra de navegación — muestra total del carrito
│   │   ├── Header.jsx              # Hero con imagen de fondo, título y descripción
│   │   ├── CardPizza.jsx           # Tarjeta de pizza con botón "Añadir al carrito"
│   │   └── Footer.jsx              # Pie de página
│   ├── context/
│   │   └── CartContext.jsx         # Context API: estado global del carrito
│   ├── pages/
│   │   ├── Home.jsx                # Página principal con las pizzas (ruta /)
│   │   ├── Login.jsx               # Formulario de login (ruta /login)
│   │   ├── Register.jsx            # Formulario de registro (ruta /register)
│   │   ├── Cart.jsx                # Carrito de compras con tabla, cantidad y total
│   │   ├── Pizza.jsx               # Detalle de pizza (ruta /pizza/:id)
│   │   ├── Profile.jsx             # Perfil de usuario (ruta /profile)
│   │   └── NotFound.jsx            # Página 404 (ruta /404)
│   ├── utils/
│   │   └── formatPrice.js          # Helper formato de precios CLP
│   ├── App.jsx                     # Raíz: CartProvider + BrowserRouter + Routes
│   └── main.jsx
├── vite.config.js
└── package.json
```

---

## 🗺️ Rutas disponibles (Hito 6)

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

## 🔄 Flujo de navegación y carrito (Hito 6)

```
CartProvider (estado global del carrito)
  └─► BrowserRouter
        └─► Navbar (siempre visible — muestra total actualizado en tiempo real)
              ├─► /           →  Home
              │     └─► CardPizza → "Añadir 🛒" → agrega al carrito
              │     └─► CardPizza → "Ver Más »" → /pizza/:id
              ├─► /login      →  Login
              ├─► /register   →  Register
              ├─► /profile    →  Profile
              └─► /cart       →  Carrito
                    ├─► tabla con items, cantidad y subtotal por pizza
                    ├─► botón [+] → incrementa cantidad
                    ├─► botón [-] → decrementa / elimina item
                    └─► Total = mismo valor que Navbar
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

---

*Desafío Latam — Full Stack JS G108*
