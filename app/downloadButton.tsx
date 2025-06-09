"use client";
import { JSX, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import MacIcon from "./macIcon";

import Link from "next/link";
import { cn } from "@/lib/utils";

type OS = "mac" | "windows" | "linux";

const DOWNLOADS: Record<
  OS,
  { label: string; href: string; icon: JSX.Element }
> = {
  mac: {
    label: "Download for macOS",
    href: "https://github.com/joshkotrous/tome/releases/latest/download/Tome-darwin-arm64.dmg",
    icon: <MacIcon className="size-5" />,
  },
  windows: {
    label: "Download for Windows",
    href: "https://github.com/joshkotrous/tome/releases/latest/download/Tome%20Setup.exe",
    icon: <MacIcon className="size-5" />,
  },
  linux: {
    label: "Download for Linux",
    href: "https://github.com/joshkotrous/tome/releases/latest/download/Tome-x86_64.AppImage",
    icon: <MacIcon className="size-5" />,
  },
};

export default function DownloadButton({
  size = "lg",
  className,
}: {
  size?: "sm" | "lg";
  className?: string;
}) {
  const [os, setOs] = useState<OS>("mac");

  useEffect(() => {
    const ua = window.navigator.userAgent;
    if (/Win/i.test(ua)) setOs("windows");
    else if (/Linux/i.test(ua)) setOs("linux");
    else setOs("mac");
  }, []);

  const { label, href, icon } = DOWNLOADS[os];

  return (
    <Link href={href} className="inline-block" download>
      {" "}
      {/* download attr = direct save */}
      <Button
        size={size}
        variant="secondary"
        className={cn("text-lg py-8 rounded-sm border gap-2", className)}
      >
        {label}
        {icon}
      </Button>
    </Link>
  );
}
