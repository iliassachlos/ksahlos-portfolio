/**
 * Check if email value is valid
 * @param email
 * @returns boolean (true if its valid, false if its not)
 */
export function emailValidation(email: string) {
    const emailRegex: RegExp = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    return emailRegex.test(email);
}
