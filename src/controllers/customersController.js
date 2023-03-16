import { validationResult } from "express-validator";
import CustomerRepository from "../repositories/customersRepository.js";

const customerRepository = new CustomerRepository();

class CustomerController {
  static listCustomers = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const customers = await customerRepository.list(req.query);
    res.status(200).json(customers);
  };

  static createCustomer = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    try {
      const createdCustomer = await customerRepository.create(req.body);
      res.status(201).json(createdCustomer);
    } catch (err) {
      next(err);
    }
  };
}

export default CustomerController;
