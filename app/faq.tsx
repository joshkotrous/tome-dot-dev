import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Which databases does Tome support?",
    answer:
      "Tome supports popular SQL databases including PostgreSQL, MySQL, and SQLite. It's designed to be lightweight and compatible with both local and remote databases, with new engines added based on community input.",
  },
  {
    question: "Is my data secure with Tome?",
    answer:
      "Yes. Tome is local-first—your data stays on your device unless you choose to connect to a remote source. Query results and schema metadata are processed locally, and nothing is sent to the cloud unless explicitly enabled by you. All sensitive credentials are encrypted and stored locally on your machine",
  },
  {
    question: "Can I use Tome if I already know SQL?",
    answer:
      "Definitely. SQL experts love Tome for its speed and fluidity. You can write, edit, and run raw SQL anytime. Tome's AI suggestions are fully transparent and editable, and they adapt to your personal style over time.",
  },
  {
    question: "Can I bring my own API key?",
    answer: "Yes. You can connect your own OpenAI or Anthropic key.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Everything you need to know about Tome and how it can help you work
            with databases.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
