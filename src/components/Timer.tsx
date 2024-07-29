import { TIMEOUT } from "dns";
import { useEffect, useState } from "react";

const numberToTime = (val: number) => {
  return val >= 10 ? val.toString() : "0" + val.toString();
};

const dateToTime = (hours: number, minutes: number, seconds: number) => {
  if ((hours == 1 && minutes >= 30) || hours > 1) return "01 : 30 : 00";
  if (hours <= 0 && minutes <= 0 && seconds <= 0) return "00 : 00 : 00";
  return (
    numberToTime(hours) +
    " : " +
    numberToTime(minutes) +
    " : " +
    numberToTime(seconds)
  );
};

const startDate = new Date("2024-08-14T07:45:00.000Z");
const endDate = new Date("2024-08-14T09:15:00.000Z");

export const Timer = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const now = new Date();
    setTime(~~((endDate.getTime() - now.getTime()) / 1000));
    const interval = setInterval(() => {
      const now = new Date();
      setTime(~~((endDate.getTime() - now.getTime()) / 1000));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  let nowTime = time;
  const seconds = nowTime % 60;
  nowTime = ~~(nowTime / 60);
  const minutes = nowTime % 60;
  nowTime = ~~(nowTime / 60);
  const hours = nowTime;
  return (
    <div className="flex items-center justify-center py-24 text-9xl text-slate-50">
      {dateToTime(hours, minutes, seconds)}
    </div>
  );
};
