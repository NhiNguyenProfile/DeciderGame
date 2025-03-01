import React from "react";
import TinderCard from "react-tinder-card";
import { Decision } from "../../pages/GamePlay";

interface SwipeCardProps {
  decision: Decision;
  onSwipe?: (direction: string) => void;
}

const characterImages: Record<string, string[]> = {
  "Bộ trưởng Kinh tế": ["/assets/business.png", "bg-slate-100", "bg-slate-900"],
  "Tướng Quân đội": ["/assets/soldier.png", "bg-lime-100", "bg-lime-500"],
  "Nhà môi trường học": [
    "/assets/environment.png",
    "bg-amber-100",
    "bg-amber-600",
  ],
  "Lãnh đạo dân sự": ["/assets/judge.png", "bg-violet-50", "bg-violet-600"],
  "Bộ trưởng Y tế": ["/assets/health.png", "bg-cyan-100", "bg-cyan-600"],
  "Bộ trưởng Giáo dục": [
    "/assets/teacher.png",
    "bg-indigo-100",
    "bg-indigo-600",
  ],
  "Nhà khoa học": ["/assets/chemistry.png", "bg-pink-100", "bg-pink-600"],
  "Cố vấn Chính phủ": ["/assets/lawyer.png", "bg-blue-100", "bg-blue-600"],
};

const SwipeCard: React.FC<SwipeCardProps> = ({ decision, onSwipe }) => {
  return (
    <TinderCard
      className={`absolute w-full h-full ${
        characterImages[decision.character][1] || ""
      } rounded-xl flex flex-col items-center justify-end text-xl font-bold`}
      preventSwipe={["up", "down"]}
      onSwipe={onSwipe}
    >
      <p
        className={`text-sm max-w-xl mb-16 font-normal ${
          characterImages[decision.character][2] || ""
        } text-white p-2 px-5 rounded-full`}
      >
        {decision.character}
      </p>
      <img
        src={characterImages[decision.character][0] || "/assets/default.png"}
        alt={decision.character}
        className="w-56"
      />
    </TinderCard>
  );
};

export default SwipeCard;
