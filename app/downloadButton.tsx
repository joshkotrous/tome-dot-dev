"use client";
import { JSX, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaLinux, FaWindows } from "react-icons/fa";

import MacIcon from "./macIcon";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { track } from "@vercel/analytics";

type OS = "mac" | "windows" | "linux" | "macIntel";

export const DOWNLOADS: Record<
  OS,
  { label: string; href: string; icon: JSX.Element }
> = {
  mac: {
    label: "Download for macOS (arm)",
    href: "https://github.com/joshkotrous/tome/releases/latest/download/tome-mac-arm64.dmg",
    icon: <MacIcon className="size-5" />,
  },
  macIntel: {
    label: "Download for macOS (intel)",
    href: "https://github.com/joshkotrous/tome/releases/latest/download/tome-mac-x64.dmg",
    icon: <MacIcon className="size-5" />,
  },
  windows: {
    label: "Download for Windows",
    href: "https://github.com/joshkotrous/tome/releases/latest/download/tome-win-x64.exe",
    icon: <FaWindows className="size-5" />,
  },
  linux: {
    label: "Download for Linux",
    href: "https://github.com/joshkotrous/tome/releases/latest/download/tome-linux-x86_64.AppImage",
    icon: <FaLinux className="size-5" />,
  },
};

export default function DownloadButton({
  size = "lg",
  className,
  showViewDownloads = false,
  osOverride,
}: {
  size?: "sm" | "lg";
  className?: string;
  showViewDownloads?: boolean;
  osOverride?: OS;
}) {
  const [os, setOs] = useState<OS>(osOverride ?? "mac");

  useEffect(() => {
    if (!osOverride) {
      const ua = window.navigator.userAgent;
      if (/Win/i.test(ua)) setOs("windows");
      else if (/Linux/i.test(ua)) setOs("linux");
      else setOs("mac");
    }
  }, []);

  const { label, href, icon } = DOWNLOADS[os];

  return (
    <div className="flex flex-col items-center gap-3">
      <Link
        onClick={() => track(`Main Download Link - ${os}`)}
        href={href}
        className="inline-block group"
        download
      >
        <Button
          size={size}
          className={cn(
            "relative text-base font-medium py-6 px-6 rounded-xl gap-2.5 bg-white text-zinc-900 hover:bg-zinc-100 shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.2),0_8px_16px_rgba(0,0,0,0.4)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_4px_8px_rgba(0,0,0,0.3),0_16px_32px_rgba(0,0,0,0.5)] transition-all duration-300",
            className
          )}
        >
          {label}
          {icon}
        </Button>
      </Link>
      {showViewDownloads && (
        <Link
          href="/downloads"
          className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-200"
        >
          View all downloads →
        </Link>
      )}
    </div>
  );
}
