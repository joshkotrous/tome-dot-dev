"use client";

import { GitBranch, ArrowRight, Sparkles, Database, Zap, Shield, Brain, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./logo";
import DownloadButton from "./downloadButton";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GoIssueOpened } from "react-icons/go";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div className="relative">
      {/* Ambient lighting using smooth radial gradients */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 20%, rgba(255,255,255,0.03), transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 30%, rgba(255,255,255,0.02), transparent 50%),
            radial-gradient(ellipse 70% 50% at 40% 80%, rgba(255,255,255,0.025), transparent 50%)
          `,
        }}
      />

      {/* Grid pattern overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <main className="relative overflow-auto">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div variants={fadeIn} className="mb-8">
              <Link
                href="https://github.com/joshkotrous/tome"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-sm text-zinc-400 hover:text-white hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
              >
                <GitBranch className="size-4" />
                <span>100% Open Source</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </motion.div>

            {/* Logo */}
            <motion.div variants={fadeIn} className="mb-8 flex justify-center">
              <Logo className="text-4xl lg:text-5xl gap-3" logoClass="size-12 lg:size-14" />
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={fadeIn}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              <span className="bg-gradient-to-b from-white via-white to-zinc-500 text-transparent bg-clip-text">
                Never Write SQL Again
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeIn}
              className="text-lg lg:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              The AI-native database client that translates natural language into perfect queries. 
              Ask questions in plain English and get instant results.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeIn} className="flex flex-col items-center gap-4">
              <DownloadButton showViewDownloads />
            </motion.div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="mt-20 w-full max-w-6xl mx-auto px-6"
          >
            <div className="relative group">
              {/* Glow effect using radial gradient */}
              <div 
                className="absolute -inset-px rounded-xl opacity-50 group-hover:opacity-70 transition-opacity duration-700"
                style={{
                  background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.15), transparent 70%)',
                }}
              />
              
              <div className="relative rounded-xl overflow-hidden border border-white/[0.1] bg-zinc-950/80 shadow-[0_0_80px_-20px_rgba(255,255,255,0.1)]">
                <Image
                  src="/tome.webp"
                  alt="Tome database client interface"
                  width={1400}
                  height={900}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Social proof / stats strip */}
        <section className="py-16 border-y border-white/[0.04]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">3+</div>
                <div className="text-sm text-zinc-500">Database Engines Supported</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-sm text-zinc-500">Local & Private</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">2 Modes</div>
                <div className="text-sm text-zinc-500">Agent & Editor</div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature showcase 1 - Editor Mode */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeIn}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-zinc-300 text-sm mb-6">
                  <Sparkles className="size-4" />
                  Editor Mode
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Like Cursor, but for your Database
                </h2>
                <p className="text-lg text-zinc-400 leading-relaxed mb-6">
                  Interface with your database like you would in Cursor - with full database context. 
                  Write queries with AI assistance that understands your schema.
                </p>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-center gap-3">
                    <div className="size-1.5 rounded-full bg-white" />
                    Intelligent autocomplete with schema awareness
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="size-1.5 rounded-full bg-white" />
                    Inline AI suggestions as you type
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="size-1.5 rounded-full bg-white" />
                    Full control over generated queries
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={fadeIn} className="relative group">
                <div 
                  className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.1), transparent 60%)',
                  }}
                />
                <div className="relative rounded-xl overflow-hidden border border-white/[0.08] bg-zinc-950/50 group-hover:border-white/[0.12] transition-colors duration-500">
                  <video
                    src="/editor-agent.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Feature showcase 2 - Agent Mode */}
        <section className="py-32 px-6 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeIn} className="relative group lg:order-2">
                <div 
                  className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.1), transparent 60%)',
                  }}
                />
                <div className="relative rounded-xl overflow-hidden border border-white/[0.08] bg-zinc-950/50 group-hover:border-white/[0.12] transition-colors duration-500">
                  <video
                    src="/demo.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-zinc-300 text-sm mb-6">
                  <Zap className="size-4" />
                  Agent Mode
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Ask Questions, Get Instant Data
                </h2>
                <p className="text-lg text-zinc-400 leading-relaxed mb-6">
                  Skip the SQL entirely. Just ask questions in plain English and get answers 
                  in the time it takes to think of the question.
                </p>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-center gap-3">
                    <div className="size-1.5 rounded-full bg-white" />
                    Natural language to SQL translation
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="size-1.5 rounded-full bg-white" />
                    Automatic query optimization
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="size-1.5 rounded-full bg-white" />
                    Results formatted for readability
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Feature showcase 3 - Semantic Indexing */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeIn}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-zinc-300 text-sm mb-6">
                  <Brain className="size-4" />
                  Semantic Indexing
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Full Database Context, Always
                </h2>
                <p className="text-lg text-zinc-400 leading-relaxed mb-6">
                  Tome automatically builds a semantic index of your schema, so it always 
                  understands your database in context. No configuration needed.
                </p>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-center gap-3">
                    <div className="size-1.5 rounded-full bg-white" />
                    Automatic schema understanding
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="size-1.5 rounded-full bg-white" />
                    Relationship detection
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="size-1.5 rounded-full bg-white" />
                    Intelligent column suggestions
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={fadeIn} className="relative group">
                <div 
                  className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.1), transparent 60%)',
                  }}
                />
                <div className="relative rounded-xl overflow-hidden border border-white/[0.08] bg-zinc-950/50 group-hover:border-white/[0.12] transition-colors duration-500">
                  <video
                    src="/semantic-gen.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-32 px-6 border-t border-white/[0.04]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.h2 variants={fadeIn} className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Everything you need
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-zinc-400 max-w-2xl mx-auto">
                Powerful features that make working with databases a joy, not a chore.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: <Brain className="size-5" />,
                  title: "Natural Language Queries",
                  description: "Ask questions in plain English and get accurate SQL queries instantly.",
                },
                {
                  icon: <Zap className="size-5" />,
                  title: "Lightning Fast",
                  description: "Get results in milliseconds with our optimized query engine.",
                },
                {
                  icon: <Shield className="size-5" />,
                  title: "Secure by Design",
                  description: "Local-first architecture. Your data never leaves your machine.",
                },
                {
                  icon: <Clock className="size-5" />,
                  title: "Query History",
                  description: "Track and revisit all your past queries with full context.",
                },
                {
                  icon: <Database className="size-5" />,
                  title: "Multi-Database Support",
                  description: "PostgreSQL, MySQL, SQLite and more with a single interface.",
                },
                {
                  icon: <Sparkles className="size-5" />,
                  title: "Bring Your Own Key",
                  description: "Connect your OpenAI or Anthropic API key for full control.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="group relative p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300"
                >
                  <div className="size-10 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-white/[0.08] transition-all duration-300 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-32 px-6 border-t border-white/[0.04]">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.h2 variants={fadeIn} className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-zinc-400">
                Everything you need to know about Tome.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <Accordion type="single" collapsible className="w-full space-y-4">
                {[
                  {
                    question: "Which databases does Tome support?",
                    answer: "Tome supports popular SQL databases including PostgreSQL, MySQL, and SQLite. It's designed to be lightweight and compatible with both local and remote databases, with new engines added based on community input.",
                  },
                  {
                    question: "Is my data secure with Tome?",
                    answer: "Yes. Tome is local-first—your data stays on your device unless you choose to connect to a remote source. Query results and schema metadata are processed locally, and nothing is sent to the cloud unless explicitly enabled by you. All sensitive credentials are encrypted and stored locally on your machine.",
                  },
                  {
                    question: "Can I use Tome if I already know SQL?",
                    answer: "Definitely. SQL experts love Tome for its speed and fluidity. You can write, edit, and run raw SQL anytime. Tome's AI suggestions are fully transparent and editable, and they adapt to your personal style over time.",
                  },
                  {
                    question: "Can I bring my own API key?",
                    answer: "Yes. You can connect your own OpenAI or Anthropic key.",
                  },
                ].map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-white/[0.06] rounded-xl px-6 bg-white/[0.01] data-[state=open]:bg-white/[0.03] transition-colors"
                  >
                    <AccordionTrigger className="text-left text-base font-medium text-white hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-zinc-400 pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Support / CTA Section */}
        <section className="py-32 px-6 border-t border-white/[0.04]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.h2 variants={fadeIn} className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Get Started Today
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto">
                Download Tome and experience a better way to work with databases.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <DownloadButton />
                <Link
                  href="https://github.com/joshkotrous/tome/issues/new"
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2 border-white/10 bg-transparent hover:bg-white/[0.05] hover:border-white/20 text-zinc-300 hover:text-white transition-all"
                  >
                    <GoIssueOpened className="size-4" />
                    Open an Issue
                  </Button>
                </Link>
              </motion.div>

              <motion.div variants={fadeIn} className="flex items-center justify-center gap-6 text-sm text-zinc-500">
                <Link
                  href="https://github.com/joshkotrous/tome"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </Link>
                <span className="text-zinc-700">•</span>
                <Link href="/releases" className="hover:text-white transition-colors">
                  Releases
                </Link>
                <span className="text-zinc-700">•</span>
                <Link href="/support" className="hover:text-white transition-colors">
                  Support
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-white/[0.04]">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <Logo className="text-base gap-2" logoClass="size-5" />
            </div>
            <div className="text-sm text-zinc-600">
              Built with care. Open source forever.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
