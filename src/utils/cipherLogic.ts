/** 
 * Applies the Caesar Cipher algorithm to encrypt/decrypt text
 */
export const applyCaesarCipher = (
    text: string,
    shift: number,
    operation: 'encrypt' | 'decrypt'
): string => {
    // normalize shift value to be between 0 and 25
    shift = shift % 26;
    if (shift < 0) shift += 26;

    // for decryption, use the inverse shift (26 - shift)
    if (operation === 'decrypt'){
        shift = (26 - shift) % 26;
    }

    return text
        .split('')
        .map((char) =>{
            // check if character is a letter
            if (/[a-zA-Z]/.test(char)) {
                const isUpperCase = char === char.toUpperCase();
                const base = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
                const charCode = char.charCodeAt(0);

                // apply shift
                const shiftedCharCode = ((charCode - base + shift) % 26) + base;
                return String.fromCharCode(shiftedCharCode);
            }

            // return non-alphabetic characters unchanged
            return char;
        })
        .join('');
};

/** 
 * Generates a visualization of character mapping for the current shift
 */
export const generateAlphabetMapping = (shift: number): { original: string; shifted: string} => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // calculate shifted alphabet for encryption
    const shiftedAlphabet = alphabet
        .split('')
        .map((char) => {
            const charCode = char.charCodeAt(0);
            const shiftedCharCode = ((charCode - 65 + shift) % 26) + 65;
            return String.fromCharCode(shiftedCharCode);
        })
        .join('');

        return {
            original: alphabet,
            shifted: shiftedAlphabet,
        };
};