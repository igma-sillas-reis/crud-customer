import { PrismaClient, Prisma } from "@prisma/client";
import { UniqueCpfException } from "../exceptions/customersExceptions.js";

class CustomerRepository {
  constructor() {
    this.prisma = new PrismaClient();
    this.model = this.prisma.Customer;
  }

  async create({ name, cpf, birth }) {
    try {
      return await this.model.create({
        data: { name, cpf, birth: new Date(birth) },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2002"
      ) {
        throw new UniqueCpfException();
      }
      throw error;
    } finally {
      await this.prisma.$disconnect();
    }
  }

  async list({ name = "", cpf = "", limit = 10, page = 1 }) {
    const filters = {};

    if (name) {
      filters.name = { equals: name, mode: "insensitive" };
    }
    if (cpf) {
      filters.cpf = cpf;
    }

    return await this.model.findMany({
      skip: limit * (page - 1),
      take: limit,
      where: filters,
    });
  }
}

export default CustomerRepository;
