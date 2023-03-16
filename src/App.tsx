/**
 * Imports styles
 */
// import "./App.css";

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
    <AppContainer className="App">
      <Game />
    </AppContainer>
  );
};
