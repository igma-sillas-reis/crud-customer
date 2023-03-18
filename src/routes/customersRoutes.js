import express from "express";
import CustomerController from "../controllers/customersController.js";
import CustomerValidators from "../validators/customersValidators.js";

const router = express.Router();

router
  .get(
    "/",
    CustomerValidators.listCustomersValidator,
    CustomerController.listCustomers
  )
  .post(
    "/",
    CustomerValidators.createCustomerValidator,
    CustomerController.createCustomer
  );

export default router;
