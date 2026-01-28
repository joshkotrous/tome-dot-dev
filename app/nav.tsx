"use client";

import Link from "next/link";
import Logo from "./logo";
import DownloadButton from "./downloadButton";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navOptions = [
  { title: "Features", url: "/#features" },
  { title: "Downloads", url: "/downloads" },
  { title: "Releases", url: "/releases" },
  { title: "Docs", url: "/#faq" },
  { title: "Support", url: "/support" },
];

export default function Nav() {
  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <div className="w-full relative px-4 py-3">
        <nav className="max-w-6xl mx-auto flex items-center justify-between backdrop-blur-xl bg-zinc-950/80 border border-white/[0.08] px-4 py-2.5 rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_2px_4px_rgba(0,0,0,0.4),0_12px_24px_rgba(0,0,0,0.4)]">
          <Link href="/" className="flex-shrink-0 transition-opacity hover:opacity-80">
            <Logo className="text-xl gap-2" logoClass="size-6" />
          </Link>
          
          <div className="items-center gap-1 hidden md:flex">
            {navOptions.map((i) => (
              <Link
                key={i.title}
                className="relative px-3 py-1.5 text-[13px] font-medium text-zinc-400 hover:text-white transition-colors duration-200 rounded-md hover:bg-white/[0.06]"
                href={i.url}
              >
                {i.title}
              </Link>
            ))}
          </div>
          
          <div className="items-center gap-3 hidden md:flex">
            <Link
              href="https://github.com/joshkotrous/tome"
              target="_blank"
              className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5"
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Star
            </Link>
            <div className="w-px h-4 bg-white/10" />
            <DownloadButton 
              className="!py-1.5 !px-3 !text-[13px] !font-medium !rounded-full !border !border-white/20 !bg-transparent !text-zinc-300 hover:!text-white hover:!border-white/40 hover:!bg-white/[0.06] !gap-1.5" 
              size="sm" 
            />
          </div>
          
          <div className="md:hidden flex items-center">
            <MobileMenu />
          </div>
        </nav>
      </div>
    </div>
  );
}

const panel = {
  hidden: { opacity: 0, y: -8, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.96,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="p-2 -mr-2 text-zinc-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.06]"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            className="fixed top-16 left-4 right-4 z-50 overflow-hidden bg-zinc-900 border border-white/[0.08] rounded-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_8px_40px_rgba(0,0,0,0.5)]"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={panel}
          >
            <div className="p-2">
              {navOptions.map((i) => (
                <Link
                  key={i.title}
                  onClick={() => setOpen(false)}
                  className="flex items-center px-4 py-3 text-[15px] font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors duration-200 rounded-xl"
                  href={i.url}
                >
                  {i.title}
                </Link>
              ))}
            </div>
            
            <div className="border-t border-white/[0.06] p-4 flex flex-col gap-3">
              <Link
                href="https://github.com/joshkotrous/tome"
                target="_blank"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-[14px] font-medium text-zinc-300 hover:text-white border border-white/[0.1] hover:border-white/[0.2] rounded-xl transition-all duration-200"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Star on GitHub
              </Link>
              <DownloadButton 
                className="!py-2.5 !px-4 !text-[14px] !font-medium !rounded-xl !border !border-white/20 !bg-transparent !text-zinc-300 hover:!text-white hover:!border-white/40 hover:!bg-white/[0.06] !gap-2 !w-full justify-center" 
                size="sm" 
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
