import { query, body } from "express-validator";
import { validateDate, validateCpf } from "./utils.js";
import Validators from "./validators.js";

class CustomerValidators extends Validators {
  static listCustomersValidator = [
    ...super.paginationValidator,
    query("name").optional().trim(),
    query("cpf")
      .optional()
      .trim()
      .customSanitizer((value) => value.replace(/[\-.]/g, "")),
  ];

  static createCustomerValidator = [
    body("name", "'name' must be a non empty string")
      .isString()
      .trim()
      .notEmpty(),
    body("birth", "'birth' must be a valid 'YYYY-MM-DD' formated date")
      .trim()
      .custom(validateDate)
      .customSanitizer((value) => new Date(value)),
    body("cpf", "'cpf' is invalid")
      .trim()
      .customSanitizer((value) => value.replace(/[\-.]/g, ""))
      .custom(validateCpf),
  ];
}

export default CustomerValidators;
