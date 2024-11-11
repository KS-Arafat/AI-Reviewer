"use client";

import { useEffect, useState } from "react";
import { Progress } from "./ui/progress";
import { roboto } from "@/app/fontProvider";

import { LabelList, Pie, PieChart } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const chartConfig = {
  visitors: {
    label: "Sentiment",
  },
  Positive: {
    label: "Positive",
    color: "white",
  },
  Negative: {
    label: "Negative",
    color: "white",
  },
} satisfies ChartConfig;

const Analyzer = ({ PID }: { PID: number }) => {
  const [progress, setProgress] = useState(60);
  const [analyzing, startAnalyzing] = useState(false);
  const [sentiment, setSentiment] = useState({ pos: 0, neg: 0 });
  useEffect(() => {
    const fetchData = async () => {
      startAnalyzing(true);

      try {
        const headersList = {
          Accept: "*/*",
          "Content-Type": "application/json",
        };

        const bodyContent = JSON.stringify({
          PID: PID,
        });

        const response = await fetch("http://localhost:5000/analyze", {
          method: "POST",
          body: bodyContent,
          headers: headersList,
        });

        const data: { pos: number; neg: number } = await response.json();
        setSentiment({ pos: data.pos, neg: data.neg });
        let currentProgress = progress;

        const interval = setInterval(() => {
          if (currentProgress < 100) {
            setProgress((prev) => prev + 1);
            currentProgress += 1;
          } else {
            clearInterval(interval);
          }
        }, 200);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setProgress(100);
        startAnalyzing(false);
      }
    };

    if (analyzing) {
      fetchData();
    }
  });
  const chartData = [
    { browser: "Positive", visitors: sentiment.pos, fill: "blue" },
    { browser: "Negative", visitors: sentiment.neg, fill: "red" },
  ];

  return (
    <div className="flex w-1/3 flex-col items-center justify-center gap-5">
      <button
        className="w-40 text-pretty rounded-lg border-b border-violet-200 bg-indigo-300 p-3 font-bold shadow-sm drop-shadow-xl transition-all hover:bg-indigo-500 hover:text-fuchsia-100 hover:shadow-2xl hover:shadow-indigo-300"
        type="button"
        onClick={() => startAnalyzing(true)}
      >
        Analyze Comments
      </button>

      {analyzing ? (
        <div className="w-full opacity-100 transition-all ease-in">
          <span className={`${roboto.className} text-xl text-indigo-500`}>
            Analyzing{progress >= 100 ? " Done" : " ..."}
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
                className="lucide lucide-square-check-big stroke-indigo-500"
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
                className="lucide lucide-refresh-cw h-fit animate-spin stroke-indigo-500"
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
        <Card className="flex flex-col">
          <CardHeader className="items-center pb-0">
            <CardTitle>Sentiment Pie Chart</CardTitle>
            <CardDescription>
              Neg: {sentiment.neg} <br /> Pos: {sentiment.pos}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px] [&_.recharts-text]:fill-background"
            >
              <PieChart>
                <ChartTooltip
                  content={<ChartTooltipContent nameKey="visitors" hideLabel />}
                />
                <Pie
                  className="min-w-max text-white"
                  data={chartData}
                  dataKey="visitors"
                >
                  <LabelList
                    dataKey="browser"
                    className="fill-background"
                    stroke="none"
                    fontSize={12}
                    formatter={(value: keyof typeof chartConfig) =>
                      chartConfig[value]?.label
                    }
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
};

export default Analyzer;
