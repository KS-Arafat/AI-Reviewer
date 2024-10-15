"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";

const SignIn_btn = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [haveAccount, setAccount] = useState<boolean>(true);
  const FormHandler = async (e: FormEvent) => {
    e.preventDefault();

    const target = e.target as HTMLElement;
    const email = (target.querySelector("#email") as HTMLInputElement)?.value;
    const password = (target.querySelector("#password") as HTMLInputElement)
      ?.value;
    const repassword = (target.querySelector("#repassword") as HTMLInputElement)
      ?.value;

    console.log(email, password, repassword);
    const request_body = JSON.stringify(
      haveAccount
        ? {
            email: email,
            pwd: password,
            account: haveAccount,
          }
        : {
            email: email,
            pwd: password,
            repwd: repassword,
            account: haveAccount,
          },
    );
    const response = await fetch("/api/auth", {
      method: "post",
      body: request_body,
    });
    const data = await response.json();
    if (data.status === 400) alert("Bad Request");
    else if (data.status === 201) alert("Sign Up Successful");
    else if (data.status === 404) alert("User Not Found");
    else if (data.status === 200) router.push("/admin");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button
          className="group/icon flex flex-col items-center justify-center rounded-md border border-teal-300 bg-emerald-500 bg-gradient-to-t p-3 text-xl shadow-lg shadow-green-300 transition-all hover:from-teal-400 hover:to-emerald-300 hover:shadow-xl hover:shadow-teal-400"
          type="button"
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
            className="lucide lucide-circle-user-round stroke-white transition-all group-hover/icon:scale-125 group-hover/icon:stroke-teal-600"
          >
            <title>Sign In</title>
            <path d="M18 20a6 6 0 0 0-12 0" />
            <circle cx="12" cy="10" r="4" />
            <circle cx="12" cy="12" r="10" />
          </svg>
          <span className="font-mono font-[600] text-white transition-all group-hover/icon:text-teal-600">
            Sign In
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="bg-slate-400" aria-describedby="info">
        <DialogTitle>
          <span
            id="info"
            className="to bg-gradient-to-tr from-cyan-300 via-emerald-300 to-amber-300 bg-clip-text text-transparent"
          >
            {"Sign In/Up"}
          </span>
        </DialogTitle>
        <DialogHeader>
          <div className="flex min-w-full flex-col items-center justify-center">
            <span className="bg-gradient-to-br from-blue-200 via-sky-300 to-cyan-200 bg-clip-text text-2xl font-semibold text-transparent">
              Welcome
            </span>
          </div>
        </DialogHeader>
        <form
          className="flex min-w-72 flex-col items-center justify-start gap-2 gap-y-5 text-lg"
          onSubmit={FormHandler}
        >
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              className="border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 disabled:bg-blue-gray-50 peer h-full w-full cursor-default rounded-md border border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-sky-300 focus:border-t-transparent focus:shadow-lg focus:shadow-cyan-200 focus:outline-0 disabled:border-0"
              placeholder=" "
              name="email"
              id="email"
            />
            <label
              className="before:content[' '] after:content[' '] text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200 peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full cursor-default select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-sky-200 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-sky-300 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-sky-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent"
              htmlFor="email"
            >
              Email
            </label>
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              className="border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 disabled:bg-blue-gray-50 peer h-full w-full cursor-default rounded-md border border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-extrabold outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-sky-300 focus:border-t-transparent focus:shadow-lg focus:shadow-cyan-200 focus:outline-0 disabled:border-0"
              type="password"
              placeholder=" "
              name="password"
              id="password"
            />
            <label
              className="before:content[' '] after:content[' '] text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200 peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full cursor-default select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-sky-200 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-sky-300 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-sky-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent"
              htmlFor="password"
            >
              Password
            </label>
          </div>

          {!haveAccount ? (
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                className="border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 disabled:bg-blue-gray-50 peer h-full w-full cursor-default rounded-md border border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-extrabold outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-sky-300 focus:border-t-transparent focus:shadow-lg focus:shadow-cyan-200 focus:outline-0 disabled:border-0"
                type="password"
                placeholder=" "
                name="repassword"
                id="repassword"
              />
              <label
                className="before:content[' '] after:content[' '] text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200 peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full cursor-default select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-sky-200 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-sky-300 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-sky-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent"
                htmlFor="password"
              >
                Retype Password
              </label>
            </div>
          ) : null}

          <div>
            <button
              type="submit"
              className="text-md mt-5 flex w-full justify-center rounded-md border-b border-cyan-100 bg-indigo-500 p-8 px-3 py-1.5 font-semibold leading-6 text-white shadow-sm transition-all hover:bg-indigo-500 hover:text-indigo-800 hover:shadow-lg hover:shadow-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
            >
              {haveAccount ? "Sign in" : "Sign up"}
            </button>
          </div>
          <button
            className="text-sm font-bold text-blue-200 transition-all hover:underline"
            type="button"
            onClick={() => setAccount(!haveAccount)}
          >
            {haveAccount
              ? "Don't Have An Account?"
              : "Already have an Account?"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default SignIn_btn;
