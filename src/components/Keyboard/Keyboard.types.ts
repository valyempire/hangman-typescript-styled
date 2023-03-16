/**
 * Defines the component props interface
 */
export interface KeyboardProps {
  onClick: (letter: string) => void;
  lettersPressed: string[];
}
