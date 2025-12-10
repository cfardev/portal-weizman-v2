# Permisos por Rol

Este documento describe los permisos asignados a cada rol en el sistema, basado en la configuración del sistema legacy.

## Índice de Permisos

- [matricula](#matricula) - Acceso al módulo de matrícula
- [cargo](#cargo) - Acceso al módulo de cargos automáticos
- [reporte](#reporte) - Acceso a reportes
- [estadisticas](#estadisticas) - Acceso a estadísticas
- [listado](#listado) - Acceso a listados
- [cajas](#cajas) - Acceso al módulo de cajas
- [actualizarDatos](#actualizardatos) - Permiso para actualizar datos de estudiantes
- [actualizarDatosGenerales](#actualizardatosgenerales) - Actualizar datos generales
- [actualizarDatosNutricion](#actualizardatosnutricion) - Actualizar datos de nutrición
- [actualizarDatosSalud](#actualizardatossalud) - Actualizar datos de salud
- [actualizarDatosRegistro](#actualizardatosregistro) - Actualizar datos de registro
- [verDatosGenerales](#verdatosgenerales) - Ver datos generales
- [verDatosNutricion](#verdatosnutricion) - Ver datos de nutrición
- [verDatosSalud](#verdatossalud) - Ver datos de salud
- [verDatosRegistro](#verdatosregistro) - Ver datos de registro
- [nueva-matricula](#nueva-matricula) - Crear nueva matrícula
- [cambiar-estado-pago](#cambiar-estado-pago) - Cambiar estado de pago
- [cambiar-estado-contrato](#cambiar-estado-contrato) - Cambiar estado de contrato
- [cambiar-estado-matricula](#cambiar-estado-matricula) - Cambiar estado de matrícula
- [bbdd-completa](#bbdd-completa) - Acceso a base de datos completa

---

## Permisos por Rol

### SuperAdministrador
**Descripción**: Super administrador con acceso completo a todas las funcionalidades del sistema

**Permisos**:
- ✅ `matricula` - Acceso al módulo de matrícula
- ✅ `cargo` - Acceso al módulo de cargos automáticos
- ✅ `reporte` - Acceso a reportes
- ✅ `estadisticas` - Acceso a estadísticas
- ✅ `listado` - Acceso a listados
- ✅ `cajas` - Acceso al módulo de cajas
- ✅ `actualizarDatos` - Actualizar datos de estudiantes
- ✅ `actualizarDatosGenerales` - Actualizar datos generales
- ✅ `actualizarDatosNutricion` - Actualizar datos de nutrición
- ✅ `actualizarDatosSalud` - Actualizar datos de salud
- ✅ `actualizarDatosRegistro` - Actualizar datos de registro
- ✅ `verDatosGenerales` - Ver datos generales
- ✅ `verDatosNutricion` - Ver datos de nutrición
- ✅ `verDatosSalud` - Ver datos de salud
- ✅ `verDatosRegistro` - Ver datos de registro
- ✅ `nueva-matricula` - Crear nueva matrícula
- ✅ `cambiar-estado-pago` - Cambiar estado de pago
- ✅ `cambiar-estado-contrato` - Cambiar estado de contrato
- ✅ `cambiar-estado-matricula` - Cambiar estado de matrícula
- ✅ `bbdd-completa` - Acceso a base de datos completa
- ✅ `matriculaEstado` - Cambiar estado de matrícula (si está habilitado)

**Nota**: Este rol tiene acceso a TODOS los permisos del sistema, incluyendo cualquier permiso futuro que se agregue.

---

### Encargado
**Descripción**: Padre o tutor de un alumno

**Permisos**:
- ✅ `matricula` - Acceso al módulo de matrícula
- ✅ `cargo` - Acceso al módulo de cargos automáticos

---

### CoordinadoraGAN
**Descripción**: Coordinadora GAN

**Permisos**:
- ✅ `matricula` - Acceso al módulo de matrícula
- ✅ `reporte` - Acceso a reportes
- ✅ `estadisticas` - Acceso a estadísticas
- ✅ `listado` - Acceso a listados
- ✅ `verDatosGenerales` - Ver datos generales
- ✅ `verDatosNutricion` - Ver datos de nutrición
- ✅ `verDatosSalud` - Ver datos de salud
- ✅ `verDatosRegistro` - Ver datos de registro

---

### CoordinadoraPEP
**Descripción**: Coordinadora PEP

**Permisos**:
- ✅ `matricula` - Acceso al módulo de matrícula
- ✅ `reporte` - Acceso a reportes
- ✅ `estadisticas` - Acceso a estadísticas
- ✅ `listado` - Acceso a listados
- ✅ `verDatosGenerales` - Ver datos generales
- ✅ `verDatosNutricion` - Ver datos de nutrición
- ✅ `verDatosSalud` - Ver datos de salud
- ✅ `verDatosRegistro` - Ver datos de registro

---

### CoordinadoraPAI
**Descripción**: Coordinadora PAI

**Permisos**:
- ✅ `matricula` - Acceso al módulo de matrícula
- ✅ `reporte` - Acceso a reportes
- ✅ `estadisticas` - Acceso a estadísticas
- ✅ `listado` - Acceso a listados
- ✅ `verDatosGenerales` - Ver datos generales
- ✅ `verDatosNutricion` - Ver datos de nutrición
- ✅ `verDatosSalud` - Ver datos de salud
- ✅ `verDatosRegistro` - Ver datos de registro

---

### CoordinadoraDP
**Descripción**: Coordinadora DP

**Permisos**:
- ✅ `matricula` - Acceso al módulo de matrícula
- ✅ `reporte` - Acceso a reportes
- ✅ `estadisticas` - Acceso a estadísticas
- ✅ `listado` - Acceso a listados
- ✅ `verDatosGenerales` - Ver datos generales
- ✅ `verDatosNutricion` - Ver datos de nutrición
- ✅ `verDatosSalud` - Ver datos de salud
- ✅ `verDatosRegistro` - Ver datos de registro

---

### DirectoraGeneral
**Descripción**: Directora general

**Permisos**:
- ✅ `matricula` - Acceso al módulo de matrícula
- ✅ `reporte` - Acceso a reportes
- ✅ `estadisticas` - Acceso a estadísticas
- ✅ `listado` - Acceso a listados
- ✅ `verDatosGenerales` - Ver datos generales
- ✅ `verDatosNutricion` - Ver datos de nutrición
- ✅ `verDatosSalud` - Ver datos de salud

---

### DirectorFinanciero
**Descripción**: Director Financiero

**Permisos**:
- ✅ `matricula` - Acceso al módulo de matrícula
- ✅ `reporte` - Acceso a reportes
- ✅ `estadisticas` - Acceso a estadísticas
- ✅ `listado` - Acceso a listados
- ✅ `cajas` - Acceso al módulo de cajas
- ✅ `verDatosGenerales` - Ver datos generales
- ✅ `verDatosNutricion` - Ver datos de nutrición
- ✅ `verDatosSalud` - Ver datos de salud
- ✅ `verDatosRegistro` - Ver datos de registro
- ✅ `cambiar-estado-pago` - Cambiar estado de pago
- ✅ `bbdd-completa` - Acceso a base de datos completa

---

### AsistenteDireccion
**Descripción**: Asistente Dirección

**Permisos**:
- ✅ `matricula` - Acceso al módulo de matrícula
- ✅ `reporte` - Acceso a reportes
- ✅ `estadisticas` - Acceso a estadísticas
- ✅ `listado` - Acceso a listados
- ✅ `actualizarDatos` - Actualizar datos de estudiantes
- ✅ `actualizarDatosGenerales` - Actualizar datos generales
- ✅ `actualizarDatosNutricion` - Actualizar datos de nutrición
- ✅ `actualizarDatosSalud` - Actualizar datos de salud
- ✅ `actualizarDatosRegistro` - Actualizar datos de registro
- ✅ `verDatosGenerales` - Ver datos generales
- ✅ `verDatosNutricion` - Ver datos de nutrición
- ✅ `verDatosSalud` - Ver datos de salud
- ✅ `verDatosRegistro` - Ver datos de registro
- ✅ `nueva-matricula` - Crear nueva matrícula
- ✅ `cambiar-estado-contrato` - Cambiar estado de contrato
- ✅ `bbdd-completa` - Acceso a base de datos completa

---

### Cajas
**Descripción**: Cajas

**Permisos**:
- ✅ `matricula` - Acceso al módulo de matrícula
- ✅ `reporte` - Acceso a reportes
- ✅ `estadisticas` - Acceso a estadísticas
- ✅ `listado` - Acceso a listados
- ✅ `cajas` - Acceso al módulo de cajas
- ✅ `verDatosGenerales` - Ver datos generales
- ✅ `cambiar-estado-pago` - Cambiar estado de pago

---

### Contabilidad
**Descripción**: Contabilidad

**Permisos**:
- ✅ `matricula` - Acceso al módulo de matrícula
- ✅ `reporte` - Acceso a reportes
- ✅ `estadisticas` - Acceso a estadísticas
- ✅ `listado` - Acceso a listados
- ✅ `cajas` - Acceso al módulo de cajas
- ✅ `verDatosGenerales` - Ver datos generales
- ✅ `cambiar-estado-pago` - Cambiar estado de pago

---

### Proveeduria
**Descripción**: Proveeduría

**Permisos**:
- ✅ `matricula` - Acceso al módulo de matrícula
- ✅ `reporte` - Acceso a reportes
- ✅ `estadisticas` - Acceso a estadísticas
- ✅ `listado` - Acceso a listados
- ✅ `verDatosGenerales` - Ver datos generales
- ✅ `verDatosNutricion` - Ver datos de nutrición
- ✅ `verDatosSalud` - Ver datos de salud

---

### Enfermeria
**Descripción**: Enfermería

**Permisos**:
- ✅ `matricula` - Acceso al módulo de matrícula
- ✅ `reporte` - Acceso a reportes
- ✅ `actualizarDatos` - Actualizar datos de estudiantes
- ✅ `actualizarDatosNutricion` - Actualizar datos de nutrición
- ✅ `actualizarDatosSalud` - Actualizar datos de salud
- ✅ `verDatosGenerales` - Ver datos generales
- ✅ `verDatosNutricion` - Ver datos de nutrición
- ✅ `verDatosSalud` - Ver datos de salud

---

### Informatica
**Descripción**: Informática

**Permisos**:
- ✅ `matricula` - Acceso al módulo de matrícula
- ✅ `reporte` - Acceso a reportes
- ✅ `estadisticas` - Acceso a estadísticas
- ✅ `listado` - Acceso a listados
- ✅ `actualizarDatos` - Actualizar datos de estudiantes
- ✅ `actualizarDatosGenerales` - Actualizar datos generales
- ✅ `actualizarDatosNutricion` - Actualizar datos de nutrición
- ✅ `actualizarDatosSalud` - Actualizar datos de salud
- ✅ `actualizarDatosRegistro` - Actualizar datos de registro
- ✅ `verDatosGenerales` - Ver datos generales
- ✅ `verDatosNutricion` - Ver datos de nutrición
- ✅ `verDatosSalud` - Ver datos de salud
- ✅ `verDatosRegistro` - Ver datos de registro
- ✅ `nueva-matricula` - Crear nueva matrícula
- ✅ `cambiar-estado-pago` - Cambiar estado de pago
- ✅ `cambiar-estado-contrato` - Cambiar estado de contrato
- ✅ `cambiar-estado-matricula` - Cambiar estado de matrícula
- ✅ `bbdd-completa` - Acceso a base de datos completa

---

### Comedor
**Descripción**: Comedor

**Permisos**:
- ✅ `matricula` - Acceso al módulo de matrícula
- ✅ `reporte` - Acceso a reportes
- ✅ `verDatosNutricion` - Ver datos de nutrición
- ✅ `verDatosSalud` - Ver datos de salud

---

### Comunicaciones
**Descripción**: Comunicaciones

**Permisos**:
- ✅ `matricula` - Acceso al módulo de matrícula
- ✅ `reporte` - Acceso a reportes
- ✅ `estadisticas` - Acceso a estadísticas
- ✅ `listado` - Acceso a listados
- ✅ `verDatosGenerales` - Ver datos generales

---

### Biblioteca
**Descripción**: Biblioteca

**Permisos**:
- ✅ `matricula` - Acceso al módulo de matrícula
- ✅ `reporte` - Acceso a reportes
- ✅ `estadisticas` - Acceso a estadísticas
- ✅ `listado` - Acceso a listados
- ✅ `verDatosGenerales` - Ver datos generales

---

### CoordinacionBienestarEscolar
**Descripción**: Coordinación Bienestar Escolar

**Permisos**:
- ✅ `matricula` - Acceso al módulo de matrícula
- ✅ `listado` - Acceso a listados
- ✅ `verDatosGenerales` - Ver datos generales
- ✅ `verDatosNutricion` - Ver datos de nutrición
- ✅ `verDatosSalud` - Ver datos de salud

---

### Recepcion
**Descripción**: Recepción

**Permisos**:
- ✅ `cambiar-estado-contrato` - Cambiar estado de contrato
- ✅ `bbdd-completa` - Acceso a base de datos completa

---

### Polpo
**Descripción**: Desarrollo Polpo

**Permisos**:
- ✅ `cajas` - Acceso al módulo de cajas
- ✅ `cambiar-estado-matricula` - Cambiar estado de matrícula

---

## Resumen de Permisos por Funcionalidad

### matricula
Acceso al módulo de matrícula. Permite ver y gestionar matrículas.

**Roles con acceso**:
- SuperAdministrador
- Encargado
- CoordinadoraGAN
- CoordinadoraPEP
- CoordinadoraPAI
- CoordinadoraDP
- DirectoraGeneral
- DirectorFinanciero
- AsistenteDireccion
- Cajas
- Contabilidad
- Proveeduria
- Enfermeria
- Informatica
- Comedor
- Comunicaciones
- Biblioteca
- CoordinacionBienestarEscolar

---

### cargo
Acceso al módulo de cargos automáticos. Permite gestionar cargos automáticos.

**Roles con acceso**:
- SuperAdministrador
- Encargado

---

### reporte
Acceso a reportes del sistema.

**Roles con acceso**:
- SuperAdministrador
- CoordinadoraGAN
- CoordinadoraPEP
- CoordinadoraPAI
- CoordinadoraDP
- DirectoraGeneral
- DirectorFinanciero
- AsistenteDireccion
- Cajas
- Contabilidad
- Proveeduria
- Enfermeria
- Informatica
- Comedor
- Comunicaciones
- Biblioteca

---

### estadisticas
Acceso a estadísticas del sistema.

**Roles con acceso**:
- SuperAdministrador
- CoordinadoraGAN
- CoordinadoraPEP
- CoordinadoraPAI
- CoordinadoraDP
- DirectoraGeneral
- DirectorFinanciero
- AsistenteDireccion
- Cajas
- Contabilidad
- Proveeduria
- Informatica
- Comunicaciones
- Biblioteca

---

### listado
Acceso a listados de estudiantes y otros datos.

**Roles con acceso**:
- SuperAdministrador
- CoordinadoraGAN
- CoordinadoraPEP
- CoordinadoraPAI
- CoordinadoraDP
- DirectoraGeneral
- DirectorFinanciero
- AsistenteDireccion
- Cajas
- Contabilidad
- Proveeduria
- Informatica
- Comunicaciones
- Biblioteca
- CoordinacionBienestarEscolar

---

### cajas
Acceso al módulo de cajas para gestión financiera.

**Roles con acceso**:
- SuperAdministrador
- Polpo
- Cajas
- Contabilidad
- DirectorFinanciero

---

### actualizarDatos
Permiso general para actualizar datos de estudiantes.

**Roles con acceso**:
- SuperAdministrador
- AsistenteDireccion
- Informatica
- Enfermeria

---

### actualizarDatosGenerales
Actualizar datos generales de estudiantes.

**Roles con acceso**:
- SuperAdministrador
- AsistenteDireccion
- Informatica

---

### actualizarDatosNutricion
Actualizar datos de nutrición de estudiantes.

**Roles con acceso**:
- SuperAdministrador
- AsistenteDireccion
- Informatica
- Enfermeria

---

### actualizarDatosSalud
Actualizar datos de salud de estudiantes.

**Roles con acceso**:
- SuperAdministrador
- AsistenteDireccion
- Informatica
- Enfermeria

---

### actualizarDatosRegistro
Actualizar datos de registro de estudiantes.

**Roles con acceso**:
- SuperAdministrador
- AsistenteDireccion
- Informatica

---

### verDatosGenerales
Ver datos generales de estudiantes.

**Roles con acceso**:
- SuperAdministrador
- CoordinadoraGAN
- CoordinadoraPEP
- CoordinadoraPAI
- CoordinadoraDP
- DirectoraGeneral
- DirectorFinanciero
- AsistenteDireccion
- Cajas
- Contabilidad
- Proveeduria
- Enfermeria
- Informatica
- Comunicaciones
- Biblioteca
- CoordinacionBienestarEscolar

---

### verDatosNutricion
Ver datos de nutrición de estudiantes.

**Roles con acceso**:
- SuperAdministrador
- CoordinadoraGAN
- CoordinadoraPEP
- CoordinadoraPAI
- CoordinadoraDP
- DirectoraGeneral
- DirectorFinanciero
- AsistenteDireccion
- Proveeduria
- Enfermeria
- Informatica
- Comedor
- CoordinacionBienestarEscolar

---

### verDatosSalud
Ver datos de salud de estudiantes.

**Roles con acceso**:
- SuperAdministrador
- CoordinadoraGAN
- CoordinadoraPEP
- CoordinadoraPAI
- CoordinadoraDP
- DirectoraGeneral
- DirectorFinanciero
- AsistenteDireccion
- Proveeduria
- Enfermeria
- Informatica
- Comedor
- CoordinacionBienestarEscolar

---

### verDatosRegistro
Ver datos de registro de estudiantes.

**Roles con acceso**:
- SuperAdministrador
- AsistenteDireccion
- Informatica
- CoordinadoraGAN
- CoordinadoraPEP
- CoordinadoraPAI
- CoordinadoraDP
- DirectorFinanciero

---

### nueva-matricula
Crear nuevas matrículas en el sistema.

**Roles con acceso**:
- SuperAdministrador
- AsistenteDireccion
- Informatica

---

### cambiar-estado-pago
Cambiar el estado de pago de matrículas.

**Roles con acceso**:
- SuperAdministrador
- DirectorFinanciero
- Contabilidad
- Informatica
- Cajas

---

### cambiar-estado-contrato
Cambiar el estado de contrato de matrículas.

**Roles con acceso**:
- SuperAdministrador
- AsistenteDireccion
- Recepcion
- Informatica

---

### cambiar-estado-matricula
Cambiar el estado de matrícula.

**Roles con acceso**:
- SuperAdministrador
- Informatica
- Polpo

---

### bbdd-completa
Acceso completo a la base de datos.

**Roles con acceso**:
- SuperAdministrador
- AsistenteDireccion
- Informatica
- DirectorFinanciero
- Recepcion

---

## Notas

- El permiso `matriculaEstado` no tiene roles asignados actualmente (array vacío).
- Los roles están definidos como un enum estático en el schema de Prisma.
- Los permisos se almacenan en la tabla `permissions` y se relacionan con roles a través de `role_permissions`.
- Esta documentación está basada en el sistema legacy y debe ser actualizada si se realizan cambios en los permisos.

