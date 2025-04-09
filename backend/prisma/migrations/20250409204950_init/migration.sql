/*
  Warnings:

  - You are about to drop the column `mes` on the `item` table. All the data in the column will be lost.
  - You are about to drop the column `setorId` on the `item` table. All the data in the column will be lost.
  - You are about to drop the column `valorFieam` on the `item` table. All the data in the column will be lost.
  - You are about to drop the column `valorIel` on the `item` table. All the data in the column will be lost.
  - You are about to drop the column `valorSenai` on the `item` table. All the data in the column will be lost.
  - You are about to drop the column `valorSesi` on the `item` table. All the data in the column will be lost.
  - The primary key for the `usuariosetor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `usuariosetor` table. All the data in the column will be lost.
  - Added the required column `setor_id` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `item` DROP FOREIGN KEY `item_setorId_fkey`;

-- DropForeignKey
ALTER TABLE `usuariosetor` DROP FOREIGN KEY `UsuarioSetor_setorId_fkey`;

-- DropForeignKey
ALTER TABLE `usuariosetor` DROP FOREIGN KEY `UsuarioSetor_usuarioId_fkey`;

-- DropIndex
DROP INDEX `item_setorId_fkey` ON `item`;

-- DropIndex
DROP INDEX `UsuarioSetor_usuarioId_setorId_key` ON `usuariosetor`;

-- AlterTable
ALTER TABLE `item` DROP COLUMN `mes`,
    DROP COLUMN `setorId`,
    DROP COLUMN `valorFieam`,
    DROP COLUMN `valorIel`,
    DROP COLUMN `valorSenai`,
    DROP COLUMN `valorSesi`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `setor_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `usuario` ADD COLUMN `setorId` INTEGER NULL;

-- AlterTable
ALTER TABLE `usuariosetor` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`usuarioId`, `setorId`);

-- CreateTable
CREATE TABLE `Instituicao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Instituicao_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Valor_Item` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `item_id` INTEGER NOT NULL,
    `instituicao_id` INTEGER NOT NULL,
    `mes` INTEGER NOT NULL,
    `valor` DECIMAL(10, 2) NULL DEFAULT 0.00,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Usuario_setorId_idx` ON `Usuario`(`setorId`);

-- AddForeignKey
ALTER TABLE `Item` ADD CONSTRAINT `Item_setor_id_fkey` FOREIGN KEY (`setor_id`) REFERENCES `Setor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_setorId_fkey` FOREIGN KEY (`setorId`) REFERENCES `Setor`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsuarioSetor` ADD CONSTRAINT `UsuarioSetor_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsuarioSetor` ADD CONSTRAINT `UsuarioSetor_setorId_fkey` FOREIGN KEY (`setorId`) REFERENCES `Setor`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Valor_Item` ADD CONSTRAINT `Valor_Item_item_id_fkey` FOREIGN KEY (`item_id`) REFERENCES `Item`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Valor_Item` ADD CONSTRAINT `Valor_Item_instituicao_id_fkey` FOREIGN KEY (`instituicao_id`) REFERENCES `Instituicao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `diasuteis` RENAME INDEX `DiasUteis_colaboradorId_fkey` TO `DiasUteis_colaboradorId_idx`;

-- RenameIndex
ALTER TABLE `diasuteis` RENAME INDEX `DiasUteis_setorId_fkey` TO `DiasUteis_setorId_idx`;

-- RenameIndex
ALTER TABLE `historico` RENAME INDEX `Historico_itemId_fkey` TO `Historico_itemId_idx`;

-- RenameIndex
ALTER TABLE `historico` RENAME INDEX `Historico_setorId_fkey` TO `Historico_setorId_idx`;

-- RenameIndex
ALTER TABLE `historico` RENAME INDEX `Historico_usuarioId_fkey` TO `Historico_usuarioId_idx`;

-- RenameIndex
ALTER TABLE `usuario` RENAME INDEX `Usuario_perfilId_fkey` TO `Usuario_perfilId_idx`;

-- RenameIndex
ALTER TABLE `usuariosetor` RENAME INDEX `UsuarioSetor_setorId_fkey` TO `UsuarioSetor_setorId_idx`;
