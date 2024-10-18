"use client";
import { mistergrape } from "@/app/fontProvider";
import { Glasses, LogOut, Mail } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";

const ProfileDropDown = ({ email }: { email: string }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <div className="absolute right-0 flex w-24 max-w-fit flex-col items-center justify-center px-4 py-3">
      <button
        type="button"
        onClick={() => setOpen(!isOpen)}
        className={`flex h-14 w-14 flex-col items-center justify-center text-center text-4xl font-bold ${mistergrape.className} peer/drop select-none rounded-full border-2 border-transparent bg-sky-700 pr-2 pt-2 text-white shadow-xl drop-shadow-sm transition-all hover:border-white hover:bg-sky-200 hover:text-cyan-700 hover:shadow-sky-200 hover:drop-shadow-none`}
      >
        {email[0].toLocaleUpperCase()}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 70, x: -55 }}
            animate={{ opacity: 1, y: 110, x: -55 }}
            exit={{ opacity: 0, y: 125, x: -55 }}
            transition={{ duration: 0.3 }}
            className="absolute mt-4 w-48 translate-x-10 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
          >
            <div className="py-1">
              <div className="text-md flex select-none items-center bg-gray-100 from-gray-700 via-slate-400 to-stone-300 px-4 py-2 font-bold">
                <Mail className="mr-3 h-5 w-5" />
                {email.split("@")[0]}
              </div>
              <Link
                href={"/product"}
                className="text-md flex select-none items-center px-4 py-2 font-bold text-gray-700 transition-all hover:bg-gradient-to-tr hover:from-emerald-300 hover:via-green-300 hover:to-lime-200"
              >
                <Glasses className="mr-3 h-5 w-5" />
                Explore
              </Link>
              <button
                type="button"
                onClick={() => signOut()}
                className="text-md flex min-w-full select-none items-center px-4 py-2 font-bold text-gray-700 transition-colors hover:bg-gradient-to-tr hover:from-rose-300 hover:via-red-300 hover:to-amber-200"
              >
                <LogOut className="mr-3 h-5 w-5" />
                Sign out
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileDropDown;
