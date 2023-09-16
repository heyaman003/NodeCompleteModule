function typeCheck(obj) {
    get(target, key) 
      const value = Reflect.get(target, key);
      const expectedType = key.split('_').pop();
      if (expectedType === 'int') {
        if (typeof value !== 'number' || !Number.isInteger(value)) {
          throw new Error(`Property '${key}' must be an integer.`);
        }
      } else if (expectedType === 'string') {
        if (typeof value !== 'string') {
          throw new Error(`Property '${key}' must be a string.`);
        }
      } else if (expectedType === 'float') {
        if (typeof value !== 'number' || isNaN(value)) {
          throw new Error(`Property '${key}' must be a float.`);
        }
      } else if (expectedType === 'bool') {
        if (typeof value !== 'boolean') {
          throw new Error(`Property '${key}' must be a boolean.`);
        }
      }
      return value;
    }

const obj_2 = {
  employed_bool: 9, // Corrected to use a boolean value
};

typeCheck(obj_2); // Throws an error now, as it should
