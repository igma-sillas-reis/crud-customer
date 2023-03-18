import ApiException from "./apiException.js";

export class UniqueCpfException extends ApiException {
  constructor() {
    super("cpf in use", 409);
  }
}
