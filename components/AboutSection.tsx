"use client";
import { Users2, Users } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Sub-component for displaying stats with count animation
function StatItem({ icon: Icon, value, suffix, label }: {
  icon: any;
  value: number;
  suffix: string;
  label: string;
}) {
  const { ref, inView } = useInView({ triggerOnce: true });
  
  return (
    <div
      ref={ref}
      className="bg-card p-6 rounded-xl shadow-lg text-center transform transition duration-300 hover:scale-105"
    >
      <Icon className="h-10 w-10 mx-auto mb-3 text-primary" />
      <h3 className="font-bold text-2xl">
        {inView ? <CountUp end={value} duration={2} suffix={suffix} /> : "0"}
      </h3>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
}

function StatsGrid() {
  const stats = [
    { icon: Users, value: 5000, suffix: "+", label: "Happy Clients" },
    { icon: Users2, value: 15, suffix: "+", label: "Expert Stylists" },
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      {stats.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
    </div>
  );
}

// Main AboutSection Component
export default function AboutSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <header className="text-center mb-14">
          <h1 className="text-4xl font-bold mb-5">About StyleHub</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Your premier destination for exceptional hair care and styling services.
          </p>
        </header>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Story Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded in 2020, StyleHub has grown to become a leading name in premium hair care services.
              Our commitment to excellence and customer satisfaction sets us apart.
            </p>
          </div>

          {/* Stats Section */}
          <StatsGrid />
        </div>
      </div>
    </section>
  );
}
