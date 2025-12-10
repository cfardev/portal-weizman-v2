/**
 * Seed script para crear el usuario SuperAdministrador
 * 
 * IMPORTANTE: Antes de ejecutar este seed, asegúrate de:
 * 1. Regenerar el cliente Prisma: pnpm prisma:generate
 * 2. Sincronizar la base de datos: pnpm prisma:push (o pnpm prisma:migrate)
 */
import { hashPassword } from "better-auth/crypto";
import { prisma } from "../src/lib/prisma";
import { Role } from "../generated/prisma/enums";

async function main() {
  console.log("🌱 Seeding database...");

  // Crear usuario SuperAdministrador
  const superAdminEmail = "admin@weizman.cr";
  const superAdminPassword = "Admin123!";

  // Verificar si el usuario ya existe
  const existingUser = await prisma.user.findUnique({
    where: { email: superAdminEmail },
    include: { userRoles: true },
  });

  if (existingUser) {
    console.log("✅ Usuario SuperAdministrador ya existe");
    
    // Verificar si ya tiene el rol
    const hasSuperAdminRole = existingUser.userRoles.some(
      (ur) => ur.role === Role.SuperAdministrador
    );

    if (!hasSuperAdminRole) {
      await prisma.userRole.create({
        data: {
          userId: existingUser.id,
          role: Role.SuperAdministrador,
        },
      });
      console.log("✅ Rol SuperAdministrador asignado al usuario existente");
    } else {
      console.log("✅ Usuario ya tiene el rol SuperAdministrador");
    }
  } else {
    // Hashear la contraseña
    const hashedPassword = await hashPassword(superAdminPassword);

    // Crear el usuario con el rol
    const user = await prisma.user.create({
      data: {
        email: superAdminEmail,
        password: hashedPassword,
        userRoles: {
          create: {
            role: Role.SuperAdministrador,
          },
        },
      },
    });

    console.log("✅ Usuario SuperAdministrador creado:");
    console.log(`   Email: ${superAdminEmail}`);
    console.log(`   Password: ${superAdminPassword}`);
    console.log(`   ID: ${user.id}`);
  }

  console.log("✨ Seeding completed!");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });