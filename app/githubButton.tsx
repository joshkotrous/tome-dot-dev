"use client";

import GitHubButton from "react-github-btn";

export default function StarOnGithubButton() {
  return (
    <GitHubButton
      href="https://github.com/joshkotrous/tome"
      data-color-scheme="no-preference: light; light: light; dark: dark;"
      data-size="large"
      data-show-count="true"
      aria-label="Star joshkotrous/tome on GitHub"
    >
      Star on Github
    </GitHubButton>
  );
}
