"use client";

import Link from "next/link";
import { DOWNLOADS } from "../downloadButton";

export default function DownloadsPage() {
  return (
    <div className="relative size-full overflow-hidden flex flex-col gap-6 items-center justify-center text-white">
      <div className="space-y-4 z-40">
        <div className="mx-auto text-center space-y-3">
          <h2 className="text-4xl font-bold">Downloads</h2>
          <h3 className="text-zinc-400">Choose your platform to download</h3>
        </div>
        <div className="space-y-3">
          {Object.entries(DOWNLOADS).map(([os, download]) => (
            <div
              key={os}
              className="p-4 px-6 border rounded-sm bg-zinc-900 hover:bg-zinc-900/75 transition-all"
            >
              <Link
                href={download.href}
                className="flex gap-4 justify-between items-center font-medium text-lg"
              >
                {download.label}
                {download.icon}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-80  w-full h-96 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,1)_40%,rgba(255,255,255,0.00)_100%))] animate-pulse [animation-duration:10s]   to-transparent rounded-full blur-[100px]"></div>
    </div>
  );
}
