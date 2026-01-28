"use client";

import Link from "next/link";
import Logo from "./logo";
import DownloadButton from "./downloadButton";
import { Menu } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StarOnGithub from "./starOnGithubButton";

const navOptions = [
  { title: "Downloads", url: "/downloads" },
  { title: "Releases", url: "/releases" },
  { title: "Features", url: "/#features" },
  { title: "FAQ", url: "/#faq" },
  { title: "Docs", url: "/#faq" },
  { title: "Support", url: "/support" },
];

export default function Nav() {
  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <div className="w-full relative p-3">
        <div className="grid grid-cols-2 md:grid-cols-3 items-center border-2 bg-zinc-950 shadow-[0_8px_14px_-12px_rgba(255,255,255,0.1)] shadow-white p-4 rounded-md">
          <Link href="/">
            <Logo className="text-3xl gap-2.5" logoClass="size-8" />
          </Link>
          <div className=" items-center justify-center gap-4 hidden md:flex ">
            {navOptions.map((i) => (
              <Link
                key={i.title}
                className="text-zinc-400 hover:text-white transition-colors"
                href={i.url}
              >
                {i.title}
              </Link>
            ))}
          </div>
          <div className="justify-end gap-2 hidden md:flex">
            <div className="scale-120 relative top-1.5">
              <StarOnGithub />
            </div>
            <DownloadButton className="p-2 h-fit text-xs p-1" size="sm" />
          </div>
          <div className="md:hidden flex justify-end">
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const panel = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "100%",
    opacity: 1,
    transition: { duration: 0.35, ease: "easeInOut" },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.25, ease: "easeInOut" },
  },
};

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Menu
        onClick={() => setOpen((prev) => !prev)}
        className="text-zinc-400 hover:text-white cursor-pointer transition-colors"
      />

      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 top-20 left-0 p-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={backdrop}
          >
            <motion.div
              className="overflow-hidden h-full bg-zinc-950 border-2 rounded-md flex flex-col text-3xl p-4 items-end"
              variants={panel}
            >
              {navOptions.map((i) => (
                <Link
                  key={i.title}
                  onClick={() => setOpen((prev) => !prev)}
                  className="text-zinc-400 hover:text-white transition-colors border-b-2 py-3.5 w-full text-end hover:border-white"
                  href={i.url}
                >
                  {i.title}
                </Link>
              ))}
              <div className="flex items-center gap-2 py-2">
                <div className="scale-120 relative top-1">
                  <StarOnGithub height={20} width={20} />
                </div>
                <DownloadButton className="p-2 h-fit text-xs p-1" size="sm" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
