"use client";

import Link from "next/link";
import { DOWNLOADS } from "../downloadButton";

export default function DownloadsPage() {
  return (
    <div className="size-full flex flex-col gap-6 items-center justify-center text-white">
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
  );
}
