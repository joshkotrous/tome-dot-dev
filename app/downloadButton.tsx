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
    <div className="flex flex-col items-center gap-2">
      <Link
        onClick={() => track(`Main Download Link - ${os}`)}
        href={href}
        className="inline-block"
        download
      >
        {" "}
        {/* download attr = direct save */}
        <Button
          size={size}
          variant="secondary"
          className={cn(
            "text-lg py-8 rounded-sm border gap-2 hover:bg-zinc-900",
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
          className="text-zinc-300 hover:text-white transition-all"
        >
          View Downloads
        </Link>
      )}
    </div>
  );
}
