import { cva } from "class-variance-authority";
import { IScoreCard } from "./ScoreCard";
import { Inter_Tight } from "next/font/google";

const full_score: number = 25 * 20;

const gauge = cva("absolute h-1.5 rounded-full", {
  variants: {
    color: {
      purple: "bg-purple-500",
      // yellow: "bg-yellow-500",
      yellow: "bg-black",
    },
  },
  defaultVariants: {
    color: "purple",
  },
});

interface IScoreGauge {
  score: number;
  color?: IScoreCard["color"];
}

export const ScoreGauge = ({ score, color }: IScoreGauge) => {
  return (
    <div className="relative mt-3">
      <div className="absolute h-1.5 w-full rounded-full bg-gray-50" />
      <div
        className={gauge({ color: color })}
        style={{
          width: `${(Math.min(score, full_score) / full_score) * 100}%`,
          // background: redToGreen(score / full_score),
        }}
      />
    </div>
  );
};
