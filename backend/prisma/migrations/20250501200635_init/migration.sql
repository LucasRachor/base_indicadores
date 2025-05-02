-- DropForeignKey
ALTER TABLE `valor_item` DROP FOREIGN KEY `Valor_Item_instituicao_id_fkey`;

-- DropForeignKey
ALTER TABLE `valor_item` DROP FOREIGN KEY `Valor_Item_item_id_fkey`;

-- CreateTable
CREATE TABLE `JornadaColaboradores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `colaboradorId` INTEGER NOT NULL,
    `ano` INTEGER NOT NULL,
    `mes` INTEGER NOT NULL,
    `dia` INTEGER NOT NULL,
    `valor` VARCHAR(191) NOT NULL DEFAULT '08:00',
    `motivo` VARCHAR(191) NULL,
    `criadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizadoEm` DATETIME(3) NOT NULL,

    UNIQUE INDEX `JornadaColaboradores_colaboradorId_ano_mes_dia_key`(`colaboradorId`, `ano`, `mes`, `dia`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `valor_item` ADD CONSTRAINT `valor_item_item_id_fkey` FOREIGN KEY (`item_id`) REFERENCES `Item`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `valor_item` ADD CONSTRAINT `valor_item_instituicao_id_fkey` FOREIGN KEY (`instituicao_id`) REFERENCES `Instituicao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `JornadaColaboradores` ADD CONSTRAINT `JornadaColaboradores_colaboradorId_fkey` FOREIGN KEY (`colaboradorId`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
