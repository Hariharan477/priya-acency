import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, Briefcase, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: TrendingUp,
    title: "High ROI Business",
    description: "Solar industry is growing 25%+ annually. Excellent profit margins.",
  },
  {
    icon: Users,
    title: "Complete Training",
    description: "Technical & sales training to kickstart your solar business.",
  },
  {
    icon: Briefcase,
    title: "Marketing Support",
    description: "Lead generation, branding materials & digital marketing assistance.",
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description: "Dedicated relationship manager and technical helpdesk.",
  },
];

export function FranchiseSection() {
  return (
    <section className="py-20 gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-background rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-background rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-background/20 text-primary-foreground text-sm font-medium rounded-full mb-4">
            Business Opportunity
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Start Your Solar Business Today
          </h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
            Join India's fastest-growing solar network. Low investment, high returns, 
            and complete support to build your successful solar business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-background/10 backdrop-blur-sm p-6 rounded-2xl border border-background/20 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-background/20 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <Link to="/franchise">
              Become a Franchise Partner
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <p className="text-primary-foreground/70 text-sm mt-4">
            Investment starts from ₹2 Lakhs. Zero royalty fees.
          </p>
        </div>
      </div>
    </section>
  );
}
