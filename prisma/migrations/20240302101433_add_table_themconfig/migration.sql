-- CreateTable
CREATE TABLE "ThemeConfig" (
    "id" UUID NOT NULL,
    "theme_code" TEXT NOT NULL,
    "bg_color" VARCHAR(255),
    "logo" VARCHAR(255),
    "userSettingId" UUID,

    CONSTRAINT "ThemeConfig_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ThemeConfig_theme_code_key" ON "ThemeConfig"("theme_code");

-- AddForeignKey
ALTER TABLE "ThemeConfig" ADD CONSTRAINT "ThemeConfig_userSettingId_fkey" FOREIGN KEY ("userSettingId") REFERENCES "UserSetting"("id") ON DELETE SET NULL ON UPDATE CASCADE;
