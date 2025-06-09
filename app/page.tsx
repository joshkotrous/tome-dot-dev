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
        <div className="relative overflow-hidden h-screen w-screen flex justify-center items-center">
          <div className=" relative z-40  justify-center flex flex-col gap-4 items-center p-3 overflow-hidden">
            <Logo />
            <h2 className="text-4xl text-center font-bold bg-gradient-to-b from-white to-zinc-400 text-transparent bg-clip-text">
              Never Write SQL Again
            </h2>
            <h3 className="text-center text-zinc-400 max-w-xl font-medium">
              The AI-native database client that translates natural language
              into perfect queries. Ask questions in plain English and get
              instant results.
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
          <div className="absolute bottom-0 md:-bottom-24 lg:-bottom-96 pointer-events-none backdrop-blur-sm">
            <Image
              height={1200}
              width={1200}
              alt="screenshot"
              className="skew-x-8  scale-[130%] rounded-md border -rotate-10 z-0 shadow-2xl shadow-white"
              src="/tome.webp"
            />
          </div>
        </div>

        <div className="container mx-auto py-20 px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ask Questions → Get Instant Data
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Skip the SQL - get answers in the time it takes to think of the
              question
            </p>
          </div>

          <video
            src="/demo.webm"
            autoPlay
            loop
            muted
            playsInline
            className="mx-auto shadow-lg rounded-md border-2"
          />
        </div>
        <FeaturesSection />
        <FAQSection />
      </main>
    </div>
  );
}
