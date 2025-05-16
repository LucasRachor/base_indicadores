/*
  Warnings:

  - Added the required column `setor` to the `jornada_colaboradores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `jornada_colaboradores` ADD COLUMN `setor` VARCHAR(191) NOT NULL;
