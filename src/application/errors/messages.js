exports.fieldRequired = (key) => `The ${key} field is required`;

exports.typeError = (key, expectType) =>
  `The ${key} field should be ${expectType} type`;

exports.lengthError = (key, length) =>
  `The ${key} field must be ${length} characters`;