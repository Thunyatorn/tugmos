import { ScoreCard, IScoreCard } from "./ScoreCard";

import React, { useState, useEffect } from "react";
import axios from "axios";

interface IContestant {
  name?: string;
  score?: number;
}

interface IScoreTable {
  URL: string;
  color: IScoreCard["color"];
}

export const ScoreTable = ({ URL, color }: IScoreTable) => {
  let default_contestant_content: IContestant[] = [];
  const error_value = 192038403233;
  for (let i = 1; i <= 10; ++i) {
    default_contestant_content.push({
      name: "",
      score: error_value,
    });
  }
  const [data, setData] = useState<IContestant[]>(default_contestant_content);

  useEffect(() => {
    axios.get(URL).then((res) => {
      setData(res.data.data);
    });

    const interval = setInterval(() => {
      axios.get(URL).then((res) => {
        setData(res.data.data);
      });
      console.log(data);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full justify-center">
      <div className="mt-14 flex w-3/4 flex-wrap justify-center gap-x-12 gap-y-10">
        {data.map((item, idx) => (
          <ScoreCard
            key={idx}
            name={item.name!}
            score={item.score!}
            is_skeleton={item.name === "" && item.score === error_value}
            color={color}
          />
        ))}
      </div>
    </div>
  );
};
