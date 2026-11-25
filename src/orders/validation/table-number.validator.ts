import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { TableNumberChecker } from './table-number.checker.js';

@ValidatorConstraint({ name: 'TableNumber', async: false })
export class TableNumberValidator implements ValidatorConstraintInterface {
  private readonly checker: TableNumberChecker = new TableNumberChecker();

  validate(value: unknown): boolean {
    return typeof value === 'number' && this.checker.isValid(value);
  }

  defaultMessage(): string {
    return 'Table number should be an integer from 1 to 30';
  }
}


