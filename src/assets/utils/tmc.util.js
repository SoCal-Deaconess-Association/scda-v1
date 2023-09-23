export const TMC_SIGNATURE_STYLE =
  'font-weight: bold;  color: white; background-color: #ec9957; border: 4px solid  white; padding: 15px';

/**
 * Displays a signature for the main developer - me :)
 *
 * @returns Console Log Output.
 */
export const displaySignature = () =>
  console.log(
    '%c ♪  Developed and Designed by Tristan Chilvers  ♪',
    TMC_SIGNATURE_STYLE,
  );
