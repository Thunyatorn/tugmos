import { ScoreGauge } from "./ScoreGauge";
import { cva, VariantProps } from "class-variance-authority";

const card = cva("flex flex-col rounded-lg border p-4 shadow-md", {
  variants: {
    color: {
      purple:
        "border-purple-700 bg-purple-100 text-purple-950 dark:bg-purple-200 [&>p]:text-purple-700",
      yellow:
        "border-yellow-700 bg-yellow-200 text-orange-600 dark:bg-yellow-200 [&>p]:text-orange-500",
    },
  },
  defaultVariants: {
    color: "purple",
  },
});

export interface IScoreCard extends VariantProps<typeof card> {
  name: string;
  score: number;
  is_skeleton: boolean;
  className?: string;
}

export const ScoreCard2 = ({
  name,
  score,
  is_skeleton,
  color,
  className,
}: IScoreCard) => {
  return (
    <div className={card({ color: color, className })}>
      {!is_skeleton ? (
        <h2 className="text-center text-xl font-semibold">{name}</h2>
      ) : (
        <div className="flex justify-center">
          <div className="mt-3 h-8 w-full animate-pulse rounded-md bg-gray-50" />
        </div>
      )}
      <ScoreGauge score={!is_skeleton ? score : 0} color={color} />
      {!is_skeleton ? (
        <p className="mt-3 text-center text-xl">{score} point(s)</p>
      ) : (
        <div className="flex justify-center">
          <div className="mt-3 h-6 w-1/4 animate-pulse rounded-md bg-gray-50" />
        </div>
      )}
    </div>
  );
};
