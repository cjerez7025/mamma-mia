# 🍕 Pizzería Mamma Mía

Proyecto incremental desarrollado con **React + Vite.js** como parte del curso Full Stack JavaScript en Desafío Latam (G108).

🌐 **Demo en vivo:** [https://cjerez7025.github.io/mamma-mia/](https://cjerez7025.github.io/mamma-mia/)

---

## 🚀 Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| React 19 | Librería principal de UI |
| Vite.js | Bundler y servidor de desarrollo |
| Bootstrap 5 | Estilos base |
| react-bootstrap | Componentes UI (Navbar, Form, Alert, Button) |
| gh-pages | Despliegue en GitHub Pages |

---

## 📁 Estructura del proyecto

```
mamma-mia/
├── src/
│   ├── assets/
│   │   └── Header.jpg              # Imagen de fondo del hero
│   ├── components/
│   │   ├── Navbar.jsx              # Barra de navegación dinámica (token, total)
│   │   ├── Header.jsx              # Hero con imagen de fondo, título y descripción
│   │   ├── Home.jsx                # Página principal con las 3 pizzas
│   │   ├── CardPizza.jsx           # Tarjeta de pizza (recibe props)
│   │   ├── Footer.jsx              # Pie de página
│   │   ├── LoginPage.jsx           # Formulario de login con validaciones (Hito 2)
│   │   └── RegisterPage.jsx        # Formulario de registro con validaciones (Hito 2)
│   ├── utils/
│   │   └── formatPrice.js          # Helper formato de precios CLP
│   ├── App.jsx                     # Raíz: controla navegación con useState
│   └── main.jsx
├── vite.config.js
└── package.json
```

---

## 🔄 Flujo de navegación (Hito 2)

```
Inicio
  └─► LoginPage
        ├─► credenciales válidas  ──► Home (pizzas)
        │                               └─► Logout ──► LoginPage
        └─► "¿No tienes cuenta?" ──► RegisterPage
                                          └─► registro exitoso ──► LoginPage
```

### Lógica de páginas — App.jsx
```
page = "login"    →  muestra LoginPage
page = "register" →  muestra RegisterPage  
page = "home"     →  muestra Home con las pizzas
```

### Lógica token — Navbar
```
token = false  →  muestra 🔐 Login y 🔐 Register
token = true   →  muestra 🔓 Profile y 🔒 Logout
🍕 Home y 🛒 Total  →  siempre visibles
```

### Validaciones formularios
```
LoginPage:
  ✓ Campos obligatorios (email + password)
  ✓ Password mínimo 6 caracteres
  ✓ Éxito → navega a Home

RegisterPage:
  ✓ Campos obligatorios (email + password + confirmPassword)
  ✓ Password mínimo 6 caracteres
  ✓ Password === ConfirmPassword
  ✓ Éxito → redirige a Login tras 1.5 seg
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
| Navbar.jsx con 6 opciones de navegación | 2 | ✅ |
| Home y Total siempre visibles (independiente del token) | 2 | ✅ |
| CardPizza.jsx con props: name, price, ingredients, img | 2 | ✅ |
| Footer.jsx con derechos reservados | 1 | ✅ |

### Hito 2 — Estado de componentes y eventos (10 pts)

| Criterio | Pts | Estado |
|---|---|---|
| RegisterPage con email, password, confirmPassword + validaciones + mensaje éxito | 5 | ✅ |
| LoginPage con email, password + validaciones + mensaje éxito | 5 | ✅ |

---

## 📌 Próximos hitos

- **Hito 3** — React Router (navegación real entre rutas)
- **Hito 4** — Context API (estado global: carrito, autenticación)
- **Hito 5** — Integración con APIs externas

---

*Desafío Latam — Full Stack JS G108*
