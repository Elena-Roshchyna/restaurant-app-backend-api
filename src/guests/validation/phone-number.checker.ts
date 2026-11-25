export class PhoneNumberChecker {


isValid(phone: string): boolean {
  return /^\+\d{10,15}$/.test(phone);
 }
}
