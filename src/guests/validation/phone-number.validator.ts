import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { PhoneNumberChecker } from './phone-number.checker.js';

@ValidatorConstraint({ name: 'PhoneNumber', async: false })
export class PhoneNumberValidator implements ValidatorConstraintInterface {
  private readonly checker: PhoneNumberChecker = new PhoneNumberChecker();

  validate(value: unknown): boolean {
    return typeof value === 'string' && this.checker.isValid(value);
  }

  defaultMessage(): string {
    return 'Phone should start with + and contain from 10 to 15 digits';
  }
}


