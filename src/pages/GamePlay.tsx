import React, { useEffect, useState } from "react";
import { ARRAY_LENGTH, decisions } from "../data/decisions";
import { VerticalProgressBar } from "../components/progress-bar/ProgressBar";
import * as motion from "motion/react-client";
import CardGroup from "../components/card-group/CardGroup";
import { Button } from "antd";

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
export const MAX = 50;

const SwipeGame: React.FC = () => {
  const [year] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isOpenOver, setIsOpenOver] = useState<boolean>(false);
  const [isOpenWin, setIsOpenWin] = useState<boolean>(false);
  const [stats, setStats] = useState<Effect>({
    economy: MAX,
    environment: MAX,
    army: MAX,
    human: MAX,
  });
  const [event, setEvent] = useState<Decision>(decisions[ARRAY_LENGTH - 1]);

  const onSwipe = (
    direction: string,
    currentDecision: Decision,
    nextDecision: Decision,
    isWin: boolean
  ) => {
    if (!isWin) {
      if (direction === "left") {
        setStats({
          human:
            (stats.human || MAX) + (currentDecision.left.effect.human || 0) >=
            MAX
              ? MAX
              : (stats.human || MAX) + (currentDecision.left.effect.human || 0),
          army:
            (stats.army || MAX) + (currentDecision.left.effect.army || 0) >= MAX
              ? MAX
              : (stats.army || MAX) + (currentDecision.left.effect.army || 0),
          economy:
            (stats.economy || MAX) +
              (currentDecision.left.effect.economy || 0) >=
            MAX
              ? MAX
              : (stats.economy || MAX) +
                (currentDecision.left.effect.economy || 0),
          environment:
            (stats.environment || MAX) +
              (currentDecision.left.effect.environment || 0) >=
            MAX
              ? MAX
              : (stats.environment || MAX) +
                (currentDecision.left.effect.environment || 0),
        });
      } else if (direction === "right") {
        setStats({
          human:
            (stats.human || MAX) + (currentDecision.right.effect.human || 0) >=
            MAX
              ? MAX
              : (stats.human || MAX) +
                (currentDecision.right.effect.human || 0),
          army:
            (stats.army || MAX) + (currentDecision.right.effect.army || 0) >=
            MAX
              ? MAX
              : (stats.army || MAX) + (currentDecision.right.effect.army || 0),
          economy:
            (stats.economy || MAX) +
              (currentDecision.right.effect.economy || 0) >=
            MAX
              ? MAX
              : (stats.economy || MAX) +
                (currentDecision.right.effect.economy || 0),
          environment:
            (stats.environment || MAX) +
              (currentDecision.right.effect.environment || 0) >=
            MAX
              ? MAX
              : (stats.environment || MAX) +
                (currentDecision.right.effect.environment || 0),
        });
      }

      setEvent(nextDecision);
    } else {
      setIsOpenWin(true);
    }
  };

  useEffect(() => {
    if (
      stats.army! <= 0 ||
      stats.economy! <= 0 ||
      stats.environment! <= 0 ||
      stats.human! <= 0
    ) {
      setIsOpenOver(true);
    }
  });

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
        <p className="text-base font-normal h-fit px-5 pb-5">{event.message}</p>
      </motion.div>
      <div className="relative w-64 h-[350px]">
        <CardGroup onSwipe={onSwipe} decisions={decisions} />
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
          <p className="col-span-1 ">{event.left.answer}</p>
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
          <p className="col-span-1">{event.right.answer}</p>
        </motion.div>
      </div>
      <div
        id="overlay"
        className={
          "fixed top-0 left-0 right-0 bottom-0 bg-[#140a00F2] grid grid-rows-12 z-50 " +
          (isOpen ? "block" : "hidden")
        }
      >
        <div className="row-span-2 flex justify-center items-center">
          <h3 className="text-white font-bold text-2xl">BỐI CẢNH</h3>
        </div>
        <div className="row-span-8 overflow-y-scroll px-10">
          <p className="text-white text-justify font-medium">
            Chào mừng! <br /> <br />
            Từ hôm nay, bạn nắm giữ vị trí lãnh đạo cao nhất, chịu trách nhiệm
            điều hành và định hướng đất nước. Mọi quyết định sẽ ảnh hưởng đến
            nền kinh tế, môi trường, an ninh quốc gia và{" "}
            <span className="font-black">SỰ TÍN NHIỆM</span> của người dân.{" "}
            <br /> <br />
            Liệu bạn sẽ đưa đất nước đến thịnh vượng hay đối mặt với những thách
            thức khó lường? <br />
            <br />
            Hãy lựa chọn và viết nên tương lai cho quốc gia!
          </p>
        </div>
        <div className="row-span-2 flex justify-between px-10">
          <Button
            className="h-10! bg-neutral-900! text-white!"
            onClick={() => setIsOpen(false)}
          >
            Tương lai của tôi
          </Button>
          <Button className="h-10!" onClick={() => setIsOpen(false)}>
            Sẵn sàng
          </Button>
        </div>
      </div>
      <div
        id="overlay"
        className={
          "fixed top-0 left-0 right-0 bottom-0 bg-[#140a00F2] flex flex-col justify-center gap-10 z-50 p-7 " +
          (isOpenOver ? "block" : "hidden")
        }
      >
        <h3 className="text-white font-bold text-5xl">THẤT BẠI</h3>
        <Button className="h-10!" onClick={() => window.location.reload()}>
          Thử lại
        </Button>
      </div>
      <div
        id="overlay"
        className={
          "fixed top-0 left-0 right-0 bottom-0 bg-[#140a00F2] flex flex-col justify-center gap-10 z-50 p-7 " +
          (isOpenWin ? "block" : "hidden")
        }
      >
        <h3 className="text-white font-bold text-5xl">THÀNH CÔNG</h3>
        <p className="text-white font-medium">
          Bạn có nhận ra hầu hết trong các sự kiện, bạn đều có "cơ hội" để THAM
          NHŨNG, bạn đã lựa chọn ánh sáng? Hay bóng tối?{" "}
        </p>
        <Button className="h-10!" onClick={() => window.location.reload()}>
          Chơi lại
        </Button>
      </div>
    </div>
  );
};

export default SwipeGame;
