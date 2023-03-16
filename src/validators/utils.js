const cpfDigitsMultipliers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export const validateDate = (value) => !isNaN(Date.parse(value));

export const validateCpf = (cpf) => {
  if (cpf.length != 11) {
    return false;
  }

  let expectedCpf = cpf.slice(0, 9);

  for (let i = 0; i < 2; i++) {
    let sum = 0;

    for (let j = expectedCpf.length - 1, k = 0; j >= 0; j--, k++) {
      const digit = expectedCpf[j];
      const multiplier = cpfDigitsMultipliers[k];

      sum += Number(digit) * multiplier;
    }

    const remainder = sum % 11;

    expectedCpf += remainder < 2 ? 0 : 11 - remainder;
  }

  return cpf === expectedCpf;
};
