-- CreateTable
CREATE TABLE `offices` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `office_id` INTEGER NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `offices_office_id_key`(`office_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employees` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `employee_id` INTEGER NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `job_title` VARCHAR(191) NOT NULL,
    `salary` INTEGER NOT NULL,
    `reports_to_id` INTEGER NOT NULL,
    `office_id` INTEGER NOT NULL,

    UNIQUE INDEX `employees_employee_id_key`(`employee_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `employees` ADD CONSTRAINT `employees_office_id_fkey` FOREIGN KEY (`office_id`) REFERENCES `offices`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
