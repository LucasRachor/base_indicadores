/*
  Warnings:

  - You are about to drop the column `setorId` on the `usuario` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `usuario` DROP FOREIGN KEY `Usuario_setorId_fkey`;

-- DropIndex
DROP INDEX `Perfil_nome_key` ON `perfil`;

-- DropIndex
DROP INDEX `Setor_nome_key` ON `setor`;

-- DropIndex
DROP INDEX `Usuario_nome_key` ON `usuario`;

-- DropIndex
DROP INDEX `Usuario_setorId_fkey` ON `usuario`;

-- AlterTable
ALTER TABLE `usuario` DROP COLUMN `setorId`;

-- CreateTable
CREATE TABLE `UsuarioSetor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuarioId` INTEGER NOT NULL,
    `setorId` INTEGER NOT NULL,

    UNIQUE INDEX `UsuarioSetor_usuarioId_setorId_key`(`usuarioId`, `setorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UsuarioSetor` ADD CONSTRAINT `UsuarioSetor_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsuarioSetor` ADD CONSTRAINT `UsuarioSetor_setorId_fkey` FOREIGN KEY (`setorId`) REFERENCES `Setor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
