/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `Setor` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Setor_nome_key` ON `Setor`(`nome`);
