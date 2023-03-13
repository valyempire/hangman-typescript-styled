import "./Keyboard.css";
import { KeyboardProps } from "./Keyboard.types";

export const Keyboard: React.FC<KeyboardProps> = (props) => {
  const { onClick } = props;

  const nameletters = "abcdefghijklmnopqrstuvwxyz";

  return (
    <div className="keyboard">
      {nameletters.split("").map((letter, index) => (
        <button
          onClick={() => onClick(letter)}
          className="keyboard"
          key={index}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};
