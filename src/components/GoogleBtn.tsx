"use client";

import { geistMono } from "@/app/fontProvider";
import { signIn } from "next-auth/react";

const GoolgeAuth = async () => {
  try {
    await signIn("google", {
      redirect: false,
      callbackUrl: "/admin",
    });
  } catch (error) {
    console.error(error);
  }
};

const GoogleBtn = () => {
  return (
    <button
      className={`mt-14 flex max-h-12 min-w-[90%] flex-row items-center justify-center space-x-6 rounded-lg bg-gradient-to-tl from-sky-500 via-cyan-500 to-blue-500 py-2 text-2xl font-semibold text-cyan-200 shadow-sm shadow-sky-700 transition-all hover:min-w-[95%] hover:shadow-lg hover:shadow-sky-400 ${geistMono.className} group/g mb-20 border-blue-100 hover:border-b-2 hover:bg-gradient-to-br`}
      type="button"
      onClick={GoolgeAuth}
    >
      <span className="flex min-w-full flex-row items-center justify-center px-5 tracking-widest">
        <span className="opacity-0 transition-all group-hover/g:opacity-100">
          Continue With
        </span>
        <G_svg className="ml-2 w-10 -translate-x-[4.3rem] transition-all group-hover/g:w-7 group-hover/g:translate-x-0" />
        <span className="opacity-0 transition-all group-hover/g:opacity-100">
          oogle
        </span>
      </span>
    </button>
  );
};

export default GoogleBtn;

const G_svg = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="100"
    height="100"
    viewBox="0 0 48 48"
    className={className ? className : ""}
  >
    <title>Google</title>
    <path
      fill="#FFC107"
      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
    />
    <path
      fill="#FF3D00"
      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
    />
    <path
      fill="#4CAF50"
      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
    />
    <path
      fill="#1976D2"
      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
    />
  </svg>
);
