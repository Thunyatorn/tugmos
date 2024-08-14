import Head from "next/head";

import { ScoreTable } from "../components/ScoreTable";
import { ScoreTable2 } from "~/components/ScoreTable2";
import { Timer } from "~/components/Timer";
import { endDate } from "~/components/Timer";

export default function Home() {
  return (
    <>
      <Head>
        <title>TUGMOs | Live Scoreboard</title>
        <link rel="icon" href="/tugmos21.ico" />
      </Head>
      <div className="flex w-full flex-col items-center py-6">
        <h1 className="hidden text-center text-5xl font-bold md:flex dark:text-slate-300">
          TUGMOs 21st Live Scoreboard
        </h1>
        <h1 className="mx-4 flex text-center text-5xl font-bold md:hidden dark:text-slate-300">
          TUGMOs 21st Live Scoreboard
        </h1>
        <Timer />
        {/* <ScoreTable2 URL={process.env.NEXT_PUBLIC_TUGMOS21!} color={"yellow"} /> */}
        <ScoreTable2 URL={process.env.NEXT_PUBLIC_TUGMOS21!} color={"yellow"} />
      </div>
    </>
  );
}
