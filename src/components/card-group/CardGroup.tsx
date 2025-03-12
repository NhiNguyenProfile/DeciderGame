import React, { useState, useMemo } from "react";
import SwipeCard from "../card/Card";
import { Decision } from "../../pages/GamePlay";

interface CardGroupProps {
  decisions: Decision[];
  onSwipe?: (
    direction: string,
    currentDecision: Decision,
    nextDecision: Decision,
    isWin: boolean
  ) => void;
}

const CardGroup: React.FC<CardGroupProps> = ({ decisions, onSwipe }) => {
  const [cardList, setCardList] = useState(decisions);

  const handleSwipe = (
    direction: string,
    decision: Decision,
    index: number
  ) => {
    const nextDecision = cardList[index - 1] ?? decision;
    setCardList((prev) => prev.filter((_, i) => i !== index));
    onSwipe?.(direction, decision, nextDecision, cardList.length == 1);
  };

  const renderedCards = useMemo(
    () =>
      cardList.map((decision, index) => (
        <SwipeCard
          key={decision.id}
          decision={decision}
          onSwipe={(direction) => handleSwipe(direction, decision, index)}
        />
      )),
    [cardList, onSwipe]
  );

  return <>{renderedCards}</>;
};

export default CardGroup;
