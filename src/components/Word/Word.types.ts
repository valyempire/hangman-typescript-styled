export interface WordProps {
  wordToGuess: string;
  formatLetter: (letter: string, index: number) => string;
}
