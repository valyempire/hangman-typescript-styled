/**
 * Imports styled
 */
import { Container } from "./Keyboard.styled";
/**
 * Imports types
 */
import { KeyboardProps } from "./Keyboard.types";

/**
 * Displays the component
 */
export const Keyboard: React.FC<KeyboardProps> = (props) => {
  const { onClick, lettersPressed } = props;

  const nameletters = "abcdefghijklmnopqrstuvwxyz";

  return (
    <Container>
      {nameletters.split("").map((letter, index) => (
        <button
          onClick={() => onClick(letter)}
          key={index}
          disabled={lettersPressed.includes(letter)}
        >
          {letter}
        </button>
      ))}
    </Container>
  );
};
