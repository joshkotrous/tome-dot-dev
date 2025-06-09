import { GitBranch } from "lucide-react";
import Image from "next/image";
import Logo from "./logo";
import FeaturesSection from "./features";
import FAQSection from "./faq";
import DownloadButton from "./downloadButton";

export default function Home() {
  return (
    <div className="">
      <main className="overflow-auto size-full">
        <div className="relative z-40 h-screen w-screen justify-center flex flex-col gap-4 items-center">
          <Logo />
          <h2 className="text-4xl font-bold bg-gradient-to-b from-white to-zinc-400 text-transparent bg-clip-text">
            Never Write SQL Again
          </h2>
          <h3 className="text-center text-zinc-400 w-xl">
            The AI-native database client that translates natural language into
            perfect queries. Ask questions in plain English and get instant
            results.
          </h3>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <GitBranch className="size-4" />
              100% Open Source
            </div>
            <div className="scale-120">
              <iframe
                src="https://ghbtns.com/github-btn.html?user=joshkotrous&repo=tome&type=star&count=true&size=medium"
                width="80"
                height="20"
                title="GitHub"
              ></iframe>
            </div>
            {/* <StarOnGithubButton /> */}
          </div>
          <DownloadButton />
        </div>
        <div className="absolute inset-0 pointer-events-none backdrop-blur-sm [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [--tw-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] overflow-hidden">
          <Image
            height={1400}
            width={1400}
            alt="screenshot"
            className="absolute scale-[130%] -bottom-36 left-10 skew-x-8 -rotate-10 z-0"
            src="/tome.png"
          />
        </div>
        <FeaturesSection />
        <FAQSection />
      </main>
    </div>
  );
}
