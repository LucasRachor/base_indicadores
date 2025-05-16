-- AlterTable
ALTER TABLE `jornada_colaboradores` MODIFY `atualizadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `usuario_setor` ADD COLUMN `nome` VARCHAR(191) NOT NULL DEFAULT '';
