import Head from "next/head";
import { Timer } from "../components/Timer";

export default function Home() {
  return (
    <>
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen w-full items-center justify-center text-5xl text-slate-50">
        {/* <Timer /> */}
      </div>
    </>
  );
}
