-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" VARCHAR(100) NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "birth" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);
