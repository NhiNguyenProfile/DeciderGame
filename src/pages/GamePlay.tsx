import React, { useState, useEffect } from "react";
import { getEventsForYear } from "../utils/logic";
import SwipeCard from "../components/card/Card";
import { decisions } from "../data/decisions";
import { VerticalProgressBar } from "../components/progress-bar/ProgressBar";
import { TypeAnimation } from "react-type-animation";
import * as motion from "motion/react-client";

export interface Effect {
  economy?: number;
  environment?: number;
  human?: number;
  army?: number;
}

export interface Choice {
  answer: string;
  effect: Effect;
}

export interface Decision {
  id: number;
  message: string;
  character: string;
  left: Choice;
  right: Choice;
}

const YEARS = 6;
const EVENTS_PER_YEAR = 5;
export const MAX = 30;

const SwipeGame: React.FC = () => {
  const [year, setYear] = useState<number>(1);
  const [stats, setStats] = useState<Effect>({
    economy: MAX,
    environment: MAX,
    army: MAX,
    human: MAX,
  });
  const [events, setEvents] = useState<Decision[]>(decisions);
  const [message, setMessage] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  //   useEffect(() => {
  //     if (events[currentIndex]) {
  //       setMessage(events[currentIndex].message);
  //     }
  //   }, [currentIndex, events]);

  //   const handleSwipe = (direction: "left" | "right", index: number) => {
  //     const event = events[index];
  //     if (!event) return;

  //     const chosenEffect =
  //       direction === "left" ? event.left.effect : event.right.effect;

  //     const newStats: Effect = {
  //       economy: (stats.economy ?? 0) + (chosenEffect.economy ?? 0),
  //       environment: (stats.environment ?? 0) + (chosenEffect.environment ?? 0),
  //       army: (stats.army ?? 0) + (chosenEffect.army ?? 0),
  //       human: (stats.human ?? 0) + (chosenEffect.human ?? 0),
  //     };
  //     setStats(newStats);

  //     if (index === events.length - 1) {
  //       console.log("Game Over");
  //       if (
  //         newStats.economy! > 0 &&
  //         newStats.environment! > 0 &&
  //         newStats.army! > 0 &&
  //         newStats.human! > 0
  //       ) {
  //         // alert("🎉 Happy Ending!");
  //       } else {
  //         alert("💀 Game Over!");
  //       }
  //     } else {
  //       setCurrentIndex(index + 1);
  //       if ((index + 1) % EVENTS_PER_YEAR === 0) {
  //         setYear(year + 1);
  //       }
  //     }
  //   };

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <VerticalProgressBar percentage={stats} />
      <p className="text-md font-medium my-5 bg-stone-700 text-white p-2 px-5">
        {year} Năm cầm quyền{" "}
      </p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.5,
          scale: { type: "spring", visualDuration: 0.2 },
        }}
      >
        <p className="text-base font-normal h-fit px-5 pb-5">
          {decisions[1].message}
        </p>
      </motion.div>
      <div className="relative w-64 h-[350px]">
        {decisions.slice(currentIndex).map((decision, index) => (
          <SwipeCard key={index} decision={decisions[index]} />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-8 my-8 font-normal text-md px-5">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 1,
            scale: { type: "spring", visualDuration: 0.4 },
          }}
        >
          <p className="col-span-1 ">{decisions[1].left.answer}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 1.5,
            scale: { type: "spring", visualDuration: 0.4 },
          }}
        >
          <p className="col-span-1">{decisions[1].right.answer}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default SwipeGame;
