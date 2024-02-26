/*
  Warnings:

  - A unique constraint covering the columns `[setting_id]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "Setting" AS ENUM ('DEFAULT', 'USERCUSTOM');

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "setting_id" TEXT;

-- CreateTable
CREATE TABLE "UserSetting" (
    "id" UUID NOT NULL,
    "setting_code" TEXT NOT NULL,
    "is_default" "Setting" NOT NULL DEFAULT 'DEFAULT',

    CONSTRAINT "UserSetting_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserSetting_setting_code_key" ON "UserSetting"("setting_code");

-- CreateIndex
CREATE UNIQUE INDEX "Users_setting_id_key" ON "Users"("setting_id");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_setting_id_fkey" FOREIGN KEY ("setting_id") REFERENCES "UserSetting"("setting_code") ON DELETE SET NULL ON UPDATE CASCADE;
