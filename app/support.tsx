import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GoIssueOpened } from "react-icons/go";

export default function SupportSection() {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Support</h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Get stuck or have a feature request? Let us know how we can help.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex justify-center items-center">
          <Link href="https://github.com/joshkotrous/tome/issues/new">
            <Button
              variant="secondary"
              size="lg"
              className="font-semibold border text-base"
            >
              <GoIssueOpened /> Open an issue on Github
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
