import { Brain, Zap, Shield, Clock, Database, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Natural Language Queries",
    description:
      "Ask questions in plain English and get accurate SQL queries and results instantly.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lightning Fast",
    description:
      "Get results in milliseconds with our optimized query engine and AI processing.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Secure by Design",
    description:
      "Enterprise-grade security with role-based access control and data encryption.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Query History",
    description:
      "Track and revisit all your past queries with full context and results.",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Multi-Database Support",
    description:
      "Connect to PostgreSQL, MySQL, SQL Server, MongoDB, and more with a single interface.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "AI-Powered Insights",
    description:
      "Automatic data analysis and visualization suggestions based on your queries.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Tome combines the power of AI with database expertise to create the
            most intuitive database client ever built.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 hover:shadow-md hover:bg-zinc-900 transition-all"
            >
              <div className="bg-zinc-800 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-zinc-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
