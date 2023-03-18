import { body, query } from "express-validator";

class Validators {
  static paginationValidator = [
    query("page", "'page' must be an integer greater than 0")
      .optional()
      .toInt()
      .isInt({ min: 1 }),
    query("limit", "'limit' must be an integer greater than 0")
      .optional()
      .toInt()
      .isInt({ min: 1 }),
  ];
}

export default Validators;
