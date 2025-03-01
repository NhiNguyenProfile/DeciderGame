import { Progress } from "antd";
import { GiPistolGun } from "react-icons/gi";
import { IoManSharp } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { PiPlantFill } from "react-icons/pi";
import { Effect, MAX } from "../../pages/GamePlay";

export const VerticalProgressBar = ({ percentage }: { percentage: Effect }) => {
  return (
    <div className="w-full flex justify-around bg-teal-600 py-3 mb-5">
      <div className="flex flex-col justify-center items-center gap-4">
        <div
          style={{
            height: 65,
            width: 65,
            display: "flex",
            alignItems: "center",
          }}
          className="-rotate-90"
        >
          <Progress
            percent={((percentage.economy || 0) * 100) / MAX}
            percentPosition={{ align: "center", type: "outer" }}
            size={[20, 15]}
            strokeColor={
              ((percentage.economy || 0) * 100) / MAX <= 50
                ? "#c4082a"
                : "white"
            }
            showInfo={false}
          />
        </div>
        <MdOutlineAttachMoney className="text-xl text-white" />
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div
          style={{
            height: 65,
            width: 65,
            display: "flex",
            alignItems: "center",
          }}
          className="-rotate-90"
        >
          <Progress
            percent={((percentage.environment || 0) * 100) / MAX}
            percentPosition={{ align: "center", type: "outer" }}
            size={[20, 15]}
            strokeColor={
              ((percentage.environment || 0) * 100) / MAX <= 50
                ? "#c4082a"
                : "white"
            }
            showInfo={false}
          />
        </div>
        <PiPlantFill className="text-xl text-white" />
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div
          style={{
            height: 65,
            width: 65,
            display: "flex",
            alignItems: "center",
          }}
          className="-rotate-90"
        >
          <Progress
            percent={((percentage.human || 0) * 100) / MAX}
            percentPosition={{ align: "center", type: "outer" }}
            size={[20, 15]}
            strokeColor={
              ((percentage.human || 0) * 100) / MAX <= 50 ? "#c4082a" : "white"
            }
            showInfo={false}
          />
        </div>
        <IoManSharp className="text-xl text-white" />
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div
          style={{
            height: 65,
            width: 65,
            display: "flex",
            alignItems: "center",
          }}
          className="-rotate-90"
        >
          <Progress
            percent={((percentage.army || 0) * 100) / MAX}
            percentPosition={{ align: "center", type: "outer" }}
            size={[20, 15]}
            strokeColor={
              ((percentage.army || 0) * 100) / MAX <= 50 ? "#c4082a" : "white"
            }
            showInfo={false}
          />
        </div>
        <GiPistolGun className="text-xl text-white" />
      </div>
    </div>
  );
};
