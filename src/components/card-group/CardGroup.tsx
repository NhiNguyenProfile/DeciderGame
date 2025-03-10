import React, { useMemo } from "react";
import SwipeCard from "../card/Card";
import { Decision } from "../../pages/GamePlay";
import { ARRAY_LENGTH } from "../../data/decisions";

interface CardGroupProps {
  decisions: Decision[];
  onSwipe?: (
    direction: string,
    currentDecision: Decision,
    nextDecision: Decision
  ) => void;
}

const CardGroup: React.FC<CardGroupProps> = ({ decisions, onSwipe }) => {
  const renderedCards = useMemo(
    () =>
      decisions.map((decision, index) => {
        return (
          <SwipeCard
            key={index}
            decision={decision}
            onSwipe={(direction) => {
              if (index == ARRAY_LENGTH) {
                const nextDecision = decisions[index - 2] ?? decision;
                onSwipe?.(direction, decision, nextDecision);
              } else {
                const nextDecision = decisions[index - 1] ?? decision;
                onSwipe?.(direction, decision, nextDecision);
              }
            }}
          />
        );
      }),
    [decisions, onSwipe]
  );

  return <>{renderedCards}</>;
};

export default CardGroup;
