"use client";

import { track } from "@vercel/analytics";
import Link from "next/link";

export default function StarOnGithub({
  width = 60,
  height = 20,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <Link
      href="https://github.com/joshkotrous/tome"
      onClick={() => track(`Star on Github`)}
      target="_blank"
    >
      <iframe
        onClick={(e) => e.preventDefault()}
        src="https://ghbtns.com/github-btn.html?user=joshkotrous&repo=tome&type=star&size=medium"
        width={width}
        height={height}
        title="GitHub"
      ></iframe>
    </Link>
  );
}
