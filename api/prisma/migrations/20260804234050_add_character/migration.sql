-- CreateTable
CREATE TABLE "Character" (
    "id" TEXT NOT NULL,
    "externalId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "crew" TEXT,
    "fruit" TEXT,
    "imageUrl" TEXT,
    "description" TEXT,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Character_externalId_key" ON "Character"("externalId");
