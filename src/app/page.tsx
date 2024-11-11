import Image from "next/image";
import svg_webapp from "@/public/webapp.svg";
import svg_skeletonBg from "@/public/skeleton_bg.svg";
import svg_bottombg from "@/public/bottomBG.svg";
import Link from "next/link";
import svg_github from "@/public/icons/github.svg";
import svg_gmail from "@/public/icons/gmail.svg";
import svg_telegram from "@/public/icons/telegram.svg";
import svg_facebook from "@/public/icons/facebook.svg";
import SignIn_btn from "@/components/SigninBtn";
import { geistMono, geistSans, roboto, sinera } from "./fontProvider";
import authOpts from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOpts);
  if (session?.user?.email) redirect("/admin");
  else
    return (
      <div className="flex select-none flex-col items-center justify-center">
        <div className="absolute top-0 max-h-[20rem] w-full overflow-hidden xl:min-h-[30rem]">
          <Image
            className="z-10 m-0 min-w-full animate-pulse p-0 opacity-20 transition-all delay-300 ease-in-out"
            src={svg_skeletonBg}
            alt=""
          />
        </div>
        <div className="flex min-h-[20rem] min-w-full flex-row bg-slate-800 shadow-2xl shadow-slate-500 xl:min-h-[30rem]">
          <div className="z-20 ml-[10dvh] mt-12 flex basis-2/3 flex-col p-5 text-left">
            <span className="bg-[url('../public/textbg.svg')] bg-clip-text text-6xl font-extrabold text-transparent xl:text-8xl">
              Dummy <br />
              E-Commerce
            </span>
          </div>
          <div className="z-20 mr-[10dvh] flex basis-1/3 flex-col items-center justify-start">
            <div className="flex h-full w-full flex-col items-end pt-5">
              <Image
                className="h-32 max-w-fit place-items-end xl:h-60"
                src={svg_webapp}
                alt=""
              />
              <span
                className={`${sinera.className} text-right text-3xl capitalize text-cyan-300`}
              >
                That gives you
                <br />
                Experience <br />
                of online shopping
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14 flex min-w-full flex-col justify-center">
          <Image
            className="absolute -z-10 mt-[80dvh] min-w-full opacity-15"
            src={svg_bottombg}
            alt=""
          />
          <div className="flex min-w-full flex-row items-center justify-center gap-[10dvw]">
            <SignIn_btn />

            <Link
              className="group/icon flex flex-col items-center justify-center rounded-md border border-amber-300 bg-orange-400 bg-gradient-to-t p-3 text-xl shadow-lg shadow-amber-200 transition-all hover:from-amber-400 hover:to-yellow-300 hover:shadow-xl hover:shadow-orange-400"
              href="/product"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-telescope stroke-white transition-all group-hover/icon:scale-125 group-hover/icon:stroke-orange-600"
              >
                <title>Magnify</title>
                <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" />
                <path d="m13.56 11.747 4.332-.924" />
                <path d="m16 21-3.105-6.21" />
                <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z" />
                <path d="m6.158 8.633 1.114 4.456" />
                <path d="m8 21 3.105-6.21" />
                <circle cx="12" cy="13" r="2" />
              </svg>

              <span className="font-mono font-[600] text-white transition-all group-hover/icon:text-orange-600">
                Explore
              </span>
            </Link>
          </div>
        </div>

        <div className="group/bulb mb-10 mt-20 flex w-[30rem] flex-col items-center justify-center rounded-xl bg-slate-200 bg-gradient-to-br from-orange-200 via-yellow-300 to-amber-400 bg-clip-padding text-black">
          <div className="flex w-full scale-[.993] flex-col items-center justify-center rounded-xl border-4 border-transparent bg-slate-200 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-lightbulb mb-5 mt-5 rounded-full stroke-black transition-all group-hover/bulb:scale-125 group-hover/bulb:stroke-amber-300"
            >
              <title>Description</title>
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
              <path d="M9 18h6" />
              <path d="M10 22h4" />
            </svg>
            <span
              className={`mb-5 px-5 text-justify font-serif font-medium ${geistSans.className}`}
            >
              This is project for CSE299 Course. In our project we will create a
              dummy ecommerce site, there we will provide feedbacks on some
              products by liking, complaining and so on. Our project will gather
              those feedbacks and run through the AI to make sentiment analysis
              of that product. We will also consider of the most liked comments
              when we collect data. AI will provide criticism and appreciation
              on products.
            </span>
          </div>
        </div>

        <div className="group/timeline mb-36 flex w-96 flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-cyan-500 via-sky-300 to-blue-400 transition-all">
          <div className="absolute z-30 min-h-[32rem] w-96 bg-black bg-opacity-0" />
          <div
            className={`flex w-full scale-[.993] flex-col justify-items-center gap-y-5 rounded-xl bg-slate-200 px-10 pb-5 text-center text-black transition-all ${geistMono.className}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-calendar-range mb-5 mt-5 w-full stroke-black transition-all group-hover/timeline:scale-125 group-hover/timeline:stroke-cyan-600"
            >
              <title>Timeline</title>
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M16 2v4" />
              <path d="M3 10h18" />
              <path d="M8 2v4" />
              <path d="M17 14h-6" />
              <path d="M13 18H7" />
              <path d="M7 14h.01" />
              <path d="M17 18h.01" />
            </svg>

            <span className="w-full text-center">
              <input
                type="checkbox"
                className="mr-3 scale-125 place-self-end accent-cyan-500"
                defaultChecked
              />
              UI Design and Implementation
            </span>
            <span className="w-full text-center">
              <input
                type="checkbox"
                className="mr-3 scale-125 place-self-end accent-cyan-500"
                defaultChecked
              />
              Backend Dev & Authentication
            </span>

            <span className="w-full text-center">
              <input
                type="checkbox"
                className="mr-3 scale-125 place-self-end accent-cyan-500"
                defaultChecked
              />
              Database Design & Backend Connection
            </span>

            <span className="w-full text-center">
              <input
                type="checkbox"
                className="mr-3 scale-125 place-self-end accent-cyan-500"
                defaultChecked
              />
              Jupyter Server & Model Identification
            </span>

            <span className="w-full text-center">
              <input
                type="checkbox"
                className="mr-3 scale-125 place-self-end accent-cyan-500"
                defaultChecked
              />
              Tokenizing and Sentiment Analysis
            </span>

            <span className="w-full text-center">
              <input
                type="checkbox"
                className="mr-3 scale-125 place-self-end accent-cyan-500"
                defaultChecked
              />
              Flask Backend Implementation
            </span>

            <span className="w-full text-center">
              <input
                type="checkbox"
                className="mr-3 scale-125 place-self-end accent-cyan-500"
                defaultChecked
              />
              Testing & Project Finishing
            </span>
          </div>
        </div>

        <div className="h-44 min-w-full bg-black">
          <div className="group flex h-44 w-full flex-col items-center border-t-2 border-double border-stone-700 bg-stone-700 pt-16 transition-all duration-500 hover:border-fuchsia-400">
            <div className="flex flex-row gap-36">
              <Link
                href={"https://www.facebook.com/profile.php?id=100015242293405"}
                target={
                  "https://www.facebook.com/profile.php?id=100015242293405"
                }
                className="flex h-16 w-16 flex-col items-center rounded-full hover:bg-blue-300"
              >
                <Image
                  src={svg_facebook}
                  height={50}
                  width={50}
                  alt=""
                  className="peer pt-2"
                />
                <p
                  className={`${roboto.className} -translate-y-10 opacity-0 transition-all group-hover:translate-y-2 group-hover:opacity-100 group-hover:delay-200 peer-hover:text-blue-400`}
                >
                  Facebook
                </p>
              </Link>
              <Link
                href="https://github.com/KS-Arafat/AI-Reviewer"
                target="_blank"
                className="flex h-16 w-16 flex-col items-center rounded-full hover:bg-white"
              >
                <Image
                  src={svg_github}
                  height={50}
                  width={50}
                  alt=""
                  className="peer pt-2"
                />
                <p
                  className={`${roboto.className} -translate-y-10 opacity-0 transition-all group-hover:translate-y-2 group-hover:opacity-100 group-hover:delay-100 peer-hover:text-white`}
                >
                  GitHub
                </p>
              </Link>
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=kazi.arafat01@northsouth.edu&su=Inquiry%20About%20Your%20Project"
                target="_blank"
                className="flex h-16 w-16 flex-col items-center rounded-full hover:bg-red-600"
              >
                <Image
                  src={svg_gmail}
                  height={50}
                  width={50}
                  alt=""
                  className="peer pt-2"
                />
                <p
                  className={`${roboto.className} -translate-y-10 opacity-0 transition-all group-hover:translate-y-2 group-hover:opacity-100 group-hover:delay-100 peer-hover:text-red-500`}
                >
                  Mail
                </p>
              </Link>
              <Link
                href="https://t.me/KS_Arafat"
                target="https://t.me/KS_Arafat"
                className="flex h-16 w-16 flex-col items-center rounded-full hover:bg-sky-500"
              >
                <Image
                  src={svg_telegram}
                  height={50}
                  width={50}
                  alt=""
                  className="peer pt-2"
                />
                <p
                  className={`${roboto.className} -translate-y-10 opacity-0 transition-all group-hover:translate-y-2 group-hover:opacity-100 group-hover:delay-200 peer-hover:text-sky-500`}
                >
                  Telegram
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}
