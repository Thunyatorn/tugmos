import Head from "next/head";

import { ScoreTable } from "../components/ScoreTable";
import { Timer } from "~/components/Timer";
import { ScoreTable2 } from "~/components/ScoreTable2";

export default function Home() {
  return (
    <>
      <Head>
        <title>TUGMOs | Live Scoreboard</title>
        <link rel="icon" href="/tugmos21.ico" />
      </Head>
      <div className="flex w-full flex-col items-center py-6">
        <h1 className="text-5xl font-bold dark:text-slate-300">
          TUGMOs 21th Live Scoreboard
        </h1>
        <Timer />
        <ScoreTable2 URL={process.env.NEXT_PUBLIC_TUGMOS21!} color={"yellow"} />
      </div>
    </>
  );
}
