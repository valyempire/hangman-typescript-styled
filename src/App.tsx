/**
 * Imports styles
 */
import { AppContainer } from "./App.styled";

/**
 * Imports components
 */
import { Game } from "./components/Game/Game";

/**
 * Displays the component
 */
export const App: React.FC = () => {
  return (
    <AppContainer>
      <Game />
    </AppContainer>
  );
};
