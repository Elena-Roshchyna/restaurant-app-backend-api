export class TableNumberChecker {
  private readonly maxTable: number = 50; // в ресторане 50 столов

  isValid(tableNumber: number): boolean {
    return (
      Number.isInteger(tableNumber) &&
      tableNumber >= 1 &&
      tableNumber <= this.maxTable
    );
  }
}
