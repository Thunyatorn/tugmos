import Head from "next/head";
import Link from "next/link";

import { ScoreTable } from "../components/ScoreTable";

export default function Home() {
  return (
    <>
      <Head>
        <title>TUGMOs | Live Scoreboard</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className="flex min-h-screen w-full flex-col items-center py-10">
        <h1 className="text-5xl font-bold dark:text-slate-300">TUGMOs</h1>
        <div className="mt-14 flex w-3/4 flex-col items-center justify-center gap-y-10">
          {/* <Link
            href="/tugmos20"
            className="flex w-1/4 items-center justify-center rounded-xl bg-gradient-to-r from-violet-400 to-purple-300 p-8 text-3xl font-semibold text-slate-950 hover:brightness-90"
          >
            TUGMOs 20<sup>th</sup>
          </Link> */}
          <Link
            href="/tugmos21"
            className="flex w-1/4 items-center justify-center rounded-xl bg-gradient-to-r from-yellow-200 to-orange-200 p-8 text-3xl font-semibold text-slate-950 hover:brightness-90"
          >
            TUGMOs 21<sup>st</sup>
          </Link>
        </div>
      </div>
    </>
  );
}
