"use client";

import { useEffect, useState } from "react";
import { Progress } from "./ui/progress";
import { roboto } from "@/app/fontProvider";

const Summarizer = () => {
  const [progress, setProgress] = useState(60);
  const [summarizing, startSummarizing] = useState<boolean>(false);

  useEffect(() => {
    console.log(progress);
    let timer: NodeJS.Timeout;
    if (progress < 100 && summarizing) {
      timer = setTimeout(() => setProgress(progress + 1), 200);
    } else return () => clearTimeout(timer);
  }, [progress, summarizing]);
  return (
    <div className="flex w-1/3 flex-col items-center justify-center gap-5">
      <button
        className="w-40 text-pretty rounded-lg border-b border-amber-200 bg-orange-300 p-3 font-bold shadow-sm drop-shadow-xl transition-all hover:bg-orange-500 hover:text-amber-100 hover:shadow-2xl hover:shadow-orange-300"
        type="button"
        onClick={() => startSummarizing(true)}
      >
        Summarize Comments
      </button>
      {summarizing ? (
        <div className="w-full opacity-100 transition-all ease-in">
          <span className={`${roboto.className} text-xl text-amber-500`}>
            Summarizing{progress >= 100 ? " Done" : " ..."}
          </span>
          <div className="flex w-full flex-row gap-3">
            {progress >= 100 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-square-check-big stroke-orange-400"
              >
                <title>Done</title>
                <path d="M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5" />
                <path d="m9 11 3 3L22 4" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-refresh-cw h-fit animate-spin stroke-orange-400"
              >
                <title>Loading</title>
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                <path d="M8 16H3v5" />
              </svg>
            )}
            <Progress value={progress} className="mt-1 w-[90%] bg-slate-500" />
          </div>
        </div>
      ) : null}
      {progress >= 100 ? (
        <div className="h-fit w-full rounded-lg border border-yellow-300 bg-amber-200 p-5 drop-shadow-lg">
          <span className="border-b border-orange-400 font-mono text-xl text-orange-500">
            Summarized Result
          </span>
          <div className="mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            fugit dolor odio eum molestias delectus dolore doloremque cupiditate
            accusantium, atque eaque vero explicabo iusto cum veritatis
            consectetur natus voluptate in!
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Summarizer;
