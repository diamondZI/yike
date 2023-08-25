-- CreateTable
CREATE TABLE `wine_cet4_word` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cet4_word` VARCHAR(255) NULL,
    `cet4_phonetic` VARCHAR(255) NULL,
    `cet4_translate` TEXT NULL,
    `cet4_distortion` TEXT NULL,
    `cet4_phrase` TEXT NULL,
    `cet4_samples` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `sex` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `birthday_Date` DATETIME(3) NULL,
    `state` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
