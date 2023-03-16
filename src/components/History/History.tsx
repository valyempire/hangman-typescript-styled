import React from "react";

/**
 * Imports types
 */
import { HistoryProps } from "./History.types";

/**
 * Imports styles
 */
import { Container, Title, Display } from "./History.styled";

/**
 * Displays the component
 */
export const History: React.FC<HistoryProps> = (props) => {
  const { history } = props;

  return (
    <Container className="history">
      <Title className="title-history">History:</Title>
      <Display className="styled">
        {history.map((historyItem: any, index: number) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <div> Word: {historyItem.wordToGuess}</div>
            <div> Mistakes: {historyItem.numberOfMistakes}</div>
            <div> Winner: {historyItem.isWinner ? "yes" : "no"}</div>
          </div>
        ))}
      </Display>
    </Container>
  );
};
