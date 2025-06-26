"use client";

import { track } from "@vercel/analytics";

export default function StarOnGithub({
  width = 60,
  height = 20,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <iframe
      onClick={() => track(`Star on Github`)}
      src="https://ghbtns.com/github-btn.html?user=joshkotrous&repo=tome&type=star&size=medium"
      width={width}
      height={height}
      title="GitHub"
    ></iframe>
  );
}
