import { Link } from "react-router-dom";
import { ArrowRight, Award, Shield, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import installationTeam from "@/assets/installation-team.jpg";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Top-tier solar panels with 25+ years warranty",
  },
  {
    icon: Shield,
    title: "Certified Experts",
    description: "MNRE approved installation team",
  },
  {
    icon: Clock,
    title: "Quick Installation",
    description: "Project completion in 7-15 days",
  },
  {
    icon: Users,
    title: "24/7 Support",
    description: "Dedicated customer service team",
  },
];

export function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={installationTeam}
              alt="Solar installation team at work"
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg hidden md:block">
              <p className="font-heading text-4xl font-bold">15+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <SectionHeading
              badge="About Us"
              title="India's Trusted Solar Energy Partner"
              centered={false}
            />
            <p className="text-muted-foreground text-lg mb-6">
              SolarPower India is a leading solar EPC company committed to making 
              clean energy accessible to every Indian home and business. With over 
              15 years of experience, we have successfully installed more than 
              10,000 solar systems across the country.
            </p>
            <p className="text-muted-foreground mb-8">
              Our mission is to accelerate India's transition to sustainable energy 
              by providing high-quality, affordable solar solutions backed by 
              exceptional service and support.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
