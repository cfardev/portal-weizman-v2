# Portal Weizman v2

Portal web moderno construido con Next.js 16, diseñado para gestionar el acceso y la información del portal Weizman.

## 🚀 Stack Tecnológico

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Lenguaje**: TypeScript
- **Base de Datos**: MySQL/MariaDB con [Prisma](https://www.prisma.io/)
- **Autenticación**: [Better Auth](https://www.better-auth.com/)
- **Internacionalización**: Sistema personalizado con cookies y contexto React
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Componentes UI**: [shadcn/ui](https://ui.shadcn.com/)
- **Linter**: [Biome](https://biomejs.dev/)
- **Testing**: [Vitest](https://vitest.dev/)
- **Gestor de Paquetes**: pnpm

## 📋 Prerrequisitos

- Node.js 18+ 
- pnpm 8+
- MySQL/MariaDB
- Git

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd portal-weizman-v2
```

2. Instala las dependencias:
```bash
pnpm install
```

3. Configura las variables de entorno:
Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
# Base de datos
DATABASE_URL="mysql://usuario:password@localhost:3306/nombre_db"

# Better Auth
BETTER_AUTH_SECRET="tu-secret-key-super-segura-aqui"
BETTER_AUTH_URL="http://localhost:3000"

# Next.js
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

4. Configura la base de datos:
```bash
# Genera el cliente de Prisma
pnpm prisma:generate

# Aplica el esquema a la base de datos
pnpm prisma:push

# O crea una migración
pnpm prisma:migrate
```

5. Inicia el servidor de desarrollo:
```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📜 Scripts Disponibles

- `pnpm dev` - Inicia el servidor de desarrollo
- `pnpm build` - Construye la aplicación para producción
- `pnpm start` - Inicia el servidor de producción
- `pnpm lint` - Ejecuta Biome para verificar y formatear el código
- `pnpm test` - Ejecuta los tests con Vitest
- `pnpm prisma:generate` - Genera el cliente de Prisma
- `pnpm prisma:push` - Aplica el esquema de Prisma a la base de datos
- `pnpm prisma:migrate` - Crea y aplica migraciones de Prisma

## 📁 Estructura del Proyecto

```
portal-weizman-v2/
├── src/
│   ├── app/              # Rutas y páginas (App Router)
│   │   ├── api/         # API routes
│   ├── components/      # Componentes React
│   │   └── ui/          # Componentes shadcn/ui
│   ├── contexts/        # Contextos de React
│   ├── lib/             # Utilidades y configuraciones
│   │   ├── auth.ts      # Configuración de Better Auth
│   │   ├── prisma.ts    # Cliente de Prisma
│   │   └── i18n.ts      # Configuración de i18n
│   └── locales/         # Archivos de traducción
├── prisma/
│   └── schema.prisma    # Esquema de la base de datos
├── generated/
│   └── prisma/          # Cliente de Prisma generado
└── public/              # Archivos estáticos
```

## 🌍 Internacionalización

El proyecto soporta múltiples idiomas (español e inglés por defecto). Las traducciones se encuentran en `src/locales/`. El idioma se gestiona mediante cookies y el contexto `LocaleContext`.

Para agregar un nuevo idioma:
1. Crea un archivo JSON en `src/locales/` (ej: `fr.json`)
2. Agrega el locale en `src/lib/i18n.ts`

## 🔐 Autenticación

La autenticación está implementada con Better Auth y utiliza email/password. Las rutas protegidas deben verificar la sesión del usuario.

## 🎨 Componentes UI

El proyecto utiliza shadcn/ui para los componentes. Para agregar un nuevo componente:

```bash
pnpm dlx shadcn@latest add <component_name>
```

**Importante**: No sobrescribas componentes existentes al instalar otros.

## 🧪 Testing

Los tests se ejecutan con Vitest. Los archivos de test deben estar en `src/__test__/` o junto a los archivos con extensión `.test.ts` o `.test.tsx`.

```bash
pnpm test
```

## 📝 Linting y Formateo

El proyecto utiliza Biome para linting y formateo. Ejecuta:

```bash
pnpm lint
```

## 🗄️ Base de Datos

El esquema de la base de datos se define en `prisma/schema.prisma`. Después de modificar el esquema:

1. Genera el cliente: `pnpm prisma:generate`
2. Crea una migración: `pnpm prisma:migrate`
3. O aplica directamente: `pnpm prisma:push` (solo desarrollo)

## 📚 Recursos

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Prisma](https://www.prisma.io/docs)
- [Documentación de Better Auth](https://www.better-auth.com/docs)
- [Documentación de shadcn/ui](https://ui.shadcn.com/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)

## 📄 Licencia

Este proyecto es privado y de uso interno.
