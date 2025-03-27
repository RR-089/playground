import { Transform } from 'class-transformer';

type Query = 'string' | 'int' | 'float' | 'json';

export function ParseQuery(type: Query): PropertyDecorator {
  return Transform(({ value }) => {
    if (!value) {
      return null;
    }

    switch (type) {
      case 'int':
        return parseInt(value, 10);
      case 'float':
        return parseFloat(value);
      case 'json':
        try {
          return JSON.parse(value);
        } catch {
          return value;
        }
      default:
        return value;
    }
  });
}
