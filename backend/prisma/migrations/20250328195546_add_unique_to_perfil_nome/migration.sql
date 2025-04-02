/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `Perfil` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Perfil_nome_key` ON `Perfil`(`nome`);
