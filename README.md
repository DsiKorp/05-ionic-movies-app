# Ionic Movies App

Una aplicación móvil nativa multiplataforma (iOS/Android) para explorar, buscar y guardar películas. Desarrollada con **Ionic Framework v8**, **Angular 20** y **The Movie Database (TMDb) API**.

![Ionic](https://img.shields.io/badge/Ionic-v8-blue)
![Angular](https://img.shields.io/badge/Angular-20-red)
![Capacitor](https://img.shields.io/badge/Capacitor-8.3.1-blueviolet)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Tabla de Contenidos

- [Características](#características)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Librerías Principales](#librerías-principales)
- [Funcionalidades](#funcionalidades)
- [API Reference](#api-reference)

## ✨ Características

### 🎬 Exploración de Películas
- **Películas en Destaque**: Descubre películas lanzadas en el mes actual
- **Películas Populares**: Navega por las películas más populares con paginación infinita
- **Detalles Completos**: Visualiza sinopsis, calificaciones, duración y géneros
- **Actores y Créditos**: Información detallada de elenco y equipo de producción

### 🔍 Búsqueda Avanzada
- Búsqueda en tiempo real de películas
- Sugerencias rápidas para películas populares
- Resultados instantáneos con actualizaciones dinámicas

### ❤️ Gestor de Favoritos
- Guardar películas como favoritas (almacenamiento local)
- Ver todas las películas favoritas
- Organizar favoritos por género
- Sincronización automática de datos

### 📱 Interfaz Moderna
- Interfaz reactiva con Ionic Components
- Carruseles interactivos con Swiper
- Diseño responsivo adaptable a cualquier pantalla
- Indicadores de carga y feedback visual

### 🌐 Multiplataforma
- Compatible con iOS (mediante Capacitor)
- Compatible con Android (mediante Capacitor)
- Experiencia web completa

## 🔧 Requisitos Previos

Antes de instalar, asegúrate de tener instalado:

- **Node.js** >= 18.x ([Descargar](https://nodejs.org/))
- **npm** >= 9.x o **yarn** >= 3.x
- **Ionic CLI** >= 7.x
- **Angular CLI** >= 20.x

Para compilar aplicaciones nativas:
- **Xcode** (para iOS)
- **Android Studio** (para Android)

## 📦 Instalación

### 1. Clonar el Repositorio

```bash
git clone <url-repositorio>
cd 05-ionic-movies-app
```

### 2. Instalar Dependencias

```bash
npm install
# o si prefieres yarn
yarn install
```

### 3. Instalar Ionic CLI (si no lo tienes)

```bash
npm install -g @ionic/cli
```

## ⚙️ Configuración

### Configurar API Key de TMDb

La aplicación utiliza **The Movie Database (TMDb) API**. Para hacerla funcionar, necesitas:

1. **Obtener una API Key**:
   - Ve a [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)
   - Crea una cuenta o inicia sesión
   - Solicita una API Key

2. **Configurar la API Key**:

   Edita el archivo `src/environments/environment.ts`:

   ```typescript
   export const environment = {
     production: false,
     apiKey: 'TU_API_KEY_AQUI',  // 👈 Reemplaza con tu clave real
     urlApi: 'https://api.themoviedb.org/3',
     urlImg: 'https://image.tmdb.org/t/p'
   };
   ```

   **Ejemplo con API Key ficticia:**
   ```typescript
   export const environment = {
     production: false,
     apiKey: 'apikey',
     urlApi: 'https://api.themoviedb.org/3',
     urlImg: 'https://image.tmdb.org/t/p'
   };
   ```

   Para producción, actualiza `src/environments/environment.prod.ts`:

   ```typescript
   export const environment = {
     production: true,
     apiKey: 'TU_API_KEY_PRODUCCION',
     urlApi: 'https://api.themoviedb.org/3',
     urlImg: 'https://image.tmdb.org/t/p'
   };
   ```

### Configurar Variables de Entorno (Alternativa Segura)

Para mayor seguridad, puedes usar variables de entorno:

1. Crea un archivo `.env` en la raíz del proyecto:
   ```
   TMDB_API_KEY=tu_api_key_aqui
   ```

2. Instala `dotenv`:
   ```bash
   npm install dotenv --save-dev
   ```

3. Actualiza `src/environments/environment.ts`:
   ```typescript
   export const environment = {
     production: false,
     apiKey: process.env['TMDB_API_KEY'] || '',
     urlApi: 'https://api.themoviedb.org/3',
     urlImg: 'https://image.tmdb.org/t/p'
   };
   ```

## 🚀 Uso

### Desarrollo Web

Inicia el servidor de desarrollo:

```bash
npm start
# o
ionic serve
```

Abre tu navegador en: `http://localhost:4200`

### Construir para Producción

```bash
npm run build
# o
ionic build --prod
```

### Compilar para iOS

```bash
ionic build
npx cap add ios
npx cap open ios
```

### Compilar para Android

```bash
ionic build
npx cap add android
npx cap open android
```

### Otros Comandos

```bash
# Ejecutar linting
npm run lint

# Ejecutar pruebas
npm test

# Observar cambios en tiempo real
npm run watch
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/          # Componentes reutilizables
│   │   ├── detail/          # Modal de detalles de película
│   │   ├── grid/            # Grid de películas
│   │   ├── header/          # Header personalizado
│   │   └── slideshow-*/     # Componentes de carruseles
│   ├── interfaces/          # Modelos TypeScript
│   │   ├── MovieResponse.ts # Respuesta API de películas
│   │   ├── MovieDetail.ts   # Detalles de película
│   │   ├── Genres.ts        # Géneros
│   │   ├── Actors.ts        # Actores
│   │   └── MoviesByGenre.ts # Películas agrupadas por género
│   ├── services/            # Servicios de lógica de negocio
│   │   ├── movies.service.ts      # Comunicación con TMDb API
│   │   └── data-local-service.ts  # Almacenamiento local de favoritos
│   ├── pipes/               # Pipes personalizados
│   ├── tab1/                # Página de inicio (Películas recientes/populares)
│   ├── tab2/                # Página de búsqueda
│   ├── tab3/                # Página de favoritos
│   ├── tabs/                # Layout principal con tabs
│   └── app.module.ts        # Módulo principal
├── assets/                  # Recursos estáticos
├── environments/            # Configuración por entorno
│   ├── environment.ts       # Desarrollo
│   └── environment.prod.ts  # Producción
├── theme/                   # Estilos globales y variables SCSS
├── index.html               # Archivo HTML principal
├── main.ts                  # Punto de entrada
└── styles.scss              # Estilos globales

www/                         # Archivos compilados (generados)
```

## 📚 Librerías Principales

### Framework y Core
| Librería | Versión | Propósito |
|----------|---------|----------|
| **@angular/core** | ^20.0.0 | Framework core de Angular |
| **@ionic/angular** | ^8.8.4 | Componentes Ionic para Angular |
| **TypeScript** | ~5.9.0 | Lenguaje de programación |

### API y HTTP
| Librería | Versión | Propósito |
|----------|---------|----------|
| **@angular/common/http** | ^20.0.0 | Cliente HTTP para peticiones API |
| **rxjs** | ~7.8.0 | Programación reactiva |

### Almacenamiento
| Librería | Versión | Propósito |
|----------|---------|----------|
| **@ionic/storage** | ^4.0.0 | Almacenamiento local (SQLite) |
| **@ionic/storage-angular** | ^4.0.0 | Integración con Angular |
| **cordova-sqlite-storage** | ^7.0.0 | Motor SQLite para Cordova |

### UI y Componentes
| Librería | Versión | Propósito |
|----------|---------|----------|
| **swiper** | ^12.1.3 | Carruseles y sliders táctiles |
| **ionicons** | ^7.0.0 | Iconos para interfaces |

### Funcionalidades Nativas
| Librería | Versión | Propósito |
|----------|---------|----------|
| **@capacitor/core** | 8.3.1 | Puente JavaScript-nativo |
| **@capacitor/app** | 8.1.0 | Control de aplicación nativa |
| **@capacitor/keyboard** | 8.0.3 | Control de teclado |
| **@capacitor/status-bar** | 8.0.2 | Control de barra de estado |
| **@capacitor/haptics** | 8.0.2 | Retroalimentación háptica |

### Testing
| Librería | Versión | Propósito |
|----------|---------|----------|
| **jasmine-core** | ~5.1.0 | Framework de testing |
| **karma** | ~6.4.0 | Test runner |

## 🎯 Funcionalidades Detalladas

### Tab 1: Inicio
- **Carrusel de Películas en Destaque**: Muestra películas lanzadas en el mes actual
- **Lista de Películas Populares**: Paginación infinita que carga más películas al desplazarse
- **Tap en película**: Abre modal con detalles completos

**Endpoints utilizados:**
- `GET /discover/movie` - Películas recientes y populares
- `GET /movie/{id}` - Detalles de película
- `GET /movie/{id}/credits` - Actores y créditos

### Tab 2: Búsqueda
- **Buscador en tiempo real**: Escribe para buscar películas
- **Sugerencias rápidas**: Click en ideas predefinidas para búsquedas rápidas
- **Resultados dinámicos**: Actualización instantánea de resultados
- **Modal de detalles**: Tap en resultado para ver información completa

**Endpoints utilizados:**
- `GET /search/movie` - Búsqueda de películas

### Tab 3: Favoritos
- **Lista de favoritos**: Visualiza todas tus películas guardadas
- **Agrupación por género**: Organiza automáticamente favoritos por categoría
- **Gestión de favoritos**: Añade/elimina de la lista de favoritos
- **Almacenamiento persistente**: Se mantiene entre sesiones

**Almacenamiento:**
- Utiliza SQLite via Ionic Storage
- Persistencia de datos completamente offline

## 🔌 API Reference

### MoviesService

Servicio que gestiona todas las peticiones a TMDb API:

```typescript
// Películas en destaque del mes actual
getFeature(): Observable<MovieResponse>

// Películas populares con paginación
getPopular(): Observable<MovieResponse>

// Detalles completos de una película
getMovieDetails(id: number): Observable<MovieDetail>

// Actores y créditos
getActors(id: number): Observable<any>

// Búsqueda de películas
searchMovie(searchText: string): Observable<MovieResponse>

// Cargar géneros disponibles
loadGenres(): Promise<Genre[]>
```

### DataLocalService

Servicio de almacenamiento local para favoritos:

```typescript
// Guardar o remover película de favoritos
saveMovie(movie: MovieDetail): Promise<void>

// Cargar películas favoritas
loadFavorites(): Promise<MovieDetail[]>

// Verificar si película está en favoritos
existMovie(id: number): Promise<boolean>

// Mostrar notificación toast
presentToast(message: string): Promise<void>
```

## 🎨 Personalizaciones

### Modificar Tema de Colores

Edita `src/theme/variables.scss`:

```scss
// Variables de Ionic
--ion-color-primary: #3880ff;
--ion-color-secondary: #3dc9dc;
--ion-color-danger: #f04141;
```

### Agregar Nuevos Idiomas

En `src/app/services/movies.service.ts`, modifica:

```typescript
private language = 'es'; // Cambia a español, francés, etc.
```

### Cambiar Género de Películas

En los endpoints, puedes filtrar por género usando:

```typescript
{
  with_genres: '35' // IDs de géneros TMDb
}
```

## 🐛 Troubleshooting

### Error: "API Key inválida"
- Verifica que la API Key sea correcta en `environment.ts`
- Asegúrate de haber activado la API en la consola de TMDb

### Las imágenes no se cargan
- Verifica que `urlImg` en `environment.ts` sea correcto
- Asegúrate de que la conexión a internet sea estable

### Favoritos no se guardan
- Verifica permisos de almacenamiento en Android
- Para iOS, asegúrate de que Capacitor esté correctamente configurado

### Error en Capacitor
```bash
# Sincroniza cambios
npx cap sync

# Reconstruye el proyecto
ionic build
npx cap copy
```

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver archivo `LICENSE` para más detalles.

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Soporte

Para reportar bugs o solicitar features, abre un issue en el repositorio.

## 🙌 Agradecimientos

- [The Movie Database (TMDb)](https://www.themoviedb.org/) por la excelente API
- [Ionic Framework](https://ionicframework.com/) por los componentes
- [Angular](https://angular.io/) por el framework

---

**Desarrollado con ❤️ usando Ionic + Angular**
