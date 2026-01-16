import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm Limeng, a creative and methodical software engineer based in Phnom Penh, Cambodia. With a strong foundation in graphic design and full-stack development, I specialize in crafting intuitive digital experiences that blend technical precision with visual elegance. My toolkit includes React, Next.js, TypeScript, and Tailwind CSS—technologies I use to build responsive, accessible, and authentic web interfaces.
              </p>
              <p>
                Driven by curiosity and clarity, I thrive on solving complex problems, refining UI details, and embedding real-world context—like mapping my home in Choam Chao 3—into my work. Whether I'm customizing minimalist gradients or troubleshooting Git workflows, I approach each challenge with persistence and pride.
              </p>
              <p>
                I believe great software isn't just functional—it's expressive. It reflects the people behind it and the communities it serves.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                “My mission is to build interfaces that feel personal, perform beautifully, and evolve with purpose.”
              </p>
            </div>
          </div>

          {/* Right Column – Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="group glass p-6 rounded-2xl animate-fade-in transition-all duration-300 hover:-translate-y-1 hover:glow-border"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div
                  className="
                    w-12 h-12 rounded-xl 
                    flex items-center justify-center mb-4
                    transition-all duration-300
                    bg-[color-mix(in_srgb,var(--color-primary)_12%,transparent)]
                    group-hover:bg-[color-mix(in_srgb,var(--color-primary)_22%,transparent)]
                  "
                >
                  <item.icon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
