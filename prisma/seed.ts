import { hashPassword } from "better-auth/crypto";
import { prisma } from "../src/lib/prisma";
import { Role } from "../generated/prisma/enums";
import * as crypto from "node:crypto";

async function main() {
  console.log("🌱 Seeding database...");

  // Eliminar todos los usuarios existentes y sus relaciones
  console.log("🗑️  Eliminando usuarios existentes...");
  await prisma.account.deleteMany({});
  await prisma.user.deleteMany({});
  console.log("✅ Usuarios eliminados");

  // Crear usuario SuperAdministrador
  const superAdminEmail = "admin@weizman.cr";
  const superAdminPassword = "Admin123!";

  // Hashear la contraseña
  const hashedPassword = await hashPassword(superAdminPassword);

  // Crear el usuario
  const user = await prisma.user.create({
    data: {
      email: superAdminEmail,
      emailVerified: true,
      name: "Super Administrador",
      role: Role.SuperAdministrador,
    },
  });

  // Crear la cuenta con la contraseña hasheada
  await prisma.account.create({
    data: {
      id: crypto.randomUUID(),
      userId: user.id,
      accountId: superAdminEmail,
      providerId: "credential",
      password: hashedPassword,
    },
  });

  console.log("✅ Usuario SuperAdministrador creado:");
  console.log(`   Email: ${superAdminEmail}`);
  console.log(`   Password: ${superAdminPassword}`);
  console.log(`   ID: ${user.id}`);

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