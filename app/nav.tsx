"use client";

import Link from "next/link";
import Logo from "./logo";
import DownloadButton from "./downloadButton";
import { Menu } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <div className="w-full relative p-3">
        <div className="grid grid-cols-2 md:grid-cols-3 items-center border-2 bg-zinc-950 shadow-[0_8px_14px_-12px_rgba(255,255,255,0.1)] shadow-white p-4 rounded-md">
          <Logo className="text-3xl gap-2.5" logoClass="size-8" />
          <div className=" items-center justify-center gap-4 hidden md:flex ">
            <Link
              className="text-zinc-400 hover:text-white transition-all"
              href="#features"
            >
              Features
            </Link>
            <Link
              className="text-zinc-400 hover:text-white transition-all"
              href="#faq"
            >
              FAQ
            </Link>
            <Link
              className="text-zinc-400 hover:text-white transition-all"
              href="#faq"
            >
              Docs
            </Link>
          </div>
          <div className="justify-end gap-2 hidden md:flex">
            <div className="scale-120 relative top-1.5">
              <iframe
                src="https://ghbtns.com/github-btn.html?user=joshkotrous&repo=tome&type=star&size=medium"
                width="60"
                height="20"
                title="GitHub"
              ></iframe>
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
              className="overflow-hidden h-full bg-zinc-950 border-2 rounded-md flex flex-col text-3xl gap-2 p-4 items-end"
              variants={panel}
            >
              <Link
                onClick={() => setOpen((prev) => !prev)}
                className="text-zinc-400 hover:text-white transition-colors"
                href="#features"
              >
                Features
              </Link>
              <div className="h-0.5 bg-zinc-800 w-full"></div>
              <Link
                onClick={() => setOpen((prev) => !prev)}
                className="text-zinc-400 hover:text-white transition-colors"
                href="#faq"
              >
                FAQ
              </Link>
              <div className="h-0.5 bg-zinc-800 w-full"></div>

              <Link
                onClick={() => setOpen((prev) => !prev)}
                className="text-zinc-400 hover:text-white transition-colors"
                href="#docs"
              >
                Docs
              </Link>
              <div className="h-0.5 bg-zinc-800 w-full"></div>
              <div className="flex items-center gap-2">
                <div className="scale-120 relative top-1">
                  <iframe
                    src="https://ghbtns.com/github-btn.html?user=joshkotrous&repo=tome&type=star&size=medium"
                    width="60"
                    height="20"
                    title="GitHub"
                  ></iframe>
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
