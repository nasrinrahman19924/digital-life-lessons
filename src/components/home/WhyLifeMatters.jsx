import { Brain, Heart, BookOpen, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Improve Wisdom",
    description: "Learn from your mistakes and preserve knowledge.",
  },

  {
    icon: Heart,
    title: "Mindful Reflection",
    description: "Reflect on experiences and become emotionally stronger.",
  },

  {
    icon: BookOpen,
    title: "Never Forget Lessons",
    description: "Keep important moments documented forever.",
  },

  {
    icon: Sparkles,
    title: "Inspire Others",
    description: "Share your wisdom with the community.",
  },
];

const WhyLifeMatters = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Learning From Life Matters
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="border rounded-3xl p-8 hover:-translate-y-2 duration-300 shadow"
              >
                <Icon size={45} />

                <h3 className="text-2xl font-bold my-5">{item.title}</h3>

                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyLifeMatters;
