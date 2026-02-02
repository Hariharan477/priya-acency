import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { TrendingUp, Users, Briefcase, HeadphonesIcon, CheckCircle, ArrowRight, IndianRupee, BookOpen, Wrench, Megaphone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  {
    icon: TrendingUp,
    title: "High Profit Margins",
    description: "Solar industry is growing 25%+ annually. Excellent returns with margins of 15-25% per project.",
  },
  {
    icon: IndianRupee,
    title: "Low Investment",
    description: "Start with just ₹2-5 Lakhs. No franchise fees or monthly royalties. Keep 100% of your profits.",
  },
  {
    icon: BookOpen,
    title: "Complete Training",
    description: "Comprehensive technical and sales training program. Learn everything from site survey to installation.",
  },
  {
    icon: Megaphone,
    title: "Marketing Support",
    description: "Lead generation, digital marketing support, and branded marketing materials provided.",
  },
  {
    icon: Wrench,
    title: "Technical Backup",
    description: "Access to our engineering team for system design, installation support, and troubleshooting.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Personal relationship manager and 24/7 helpdesk for all your business needs.",
  },
];

const steps = [
  {
    number: "1",
    title: "Apply Online",
    description: "Fill out the franchise application form with your details and investment capacity.",
  },
  {
    number: "2",
    title: "Meet & Discuss",
    description: "Our team will connect with you to discuss the opportunity and answer your questions.",
  },
  {
    number: "3",
    title: "Get Started",
    description: "Complete onboarding, receive training, and start your solar business journey.",
  },
];

const Franchise = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application Submitted!",
        description: "Our team will contact you within 24 hours.",
      });
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-background rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-background rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-background/20 text-primary-foreground text-sm font-medium rounded-full mb-4">
              Business Opportunity
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Start Your Solar Business Today
            </h1>
            <p className="text-primary-foreground/90 text-lg mb-8">
              Join India's fastest-growing solar network. Low investment, high returns, 
              complete support. Be part of the solar revolution.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <p className="font-heading text-3xl font-bold text-primary-foreground">₹2 Lakhs</p>
                <p className="text-primary-foreground/70 text-sm">Starting Investment</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-3xl font-bold text-primary-foreground">15-25%</p>
                <p className="text-primary-foreground/70 text-sm">Profit Margins</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-3xl font-bold text-primary-foreground">0%</p>
                <p className="text-primary-foreground/70 text-sm">Royalty Fees</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Why Partner With Us"
            title="Benefits of Solar Franchise"
            description="Everything you need to build a successful solar business"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-card p-8 rounded-2xl border border-border hover-lift"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Franchise Package"
            title="What You Get"
            description="Complete support to launch and grow your solar business"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h4 className="font-heading text-xl font-semibold text-foreground mb-6">Training & Knowledge</h4>
              <div className="space-y-3">
                {[
                  "5-day comprehensive technical training",
                  "Sales and customer handling training",
                  "Site survey and assessment training",
                  "System design software training",
                  "Installation best practices",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h4 className="font-heading text-xl font-semibold text-foreground mb-6">Business Support</h4>
              <div className="space-y-3">
                {[
                  "Branded marketing materials",
                  "Lead generation support",
                  "CRM software access",
                  "Technical helpdesk",
                  "Installation team support",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="How to Join"
            title="3 Simple Steps to Start"
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="text-center relative">
                <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
                  <span className="font-heading text-3xl font-bold text-primary-foreground">{step.number}</span>
                </div>
                <h4 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h4>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
                {index < 2 && (
                  <ArrowRight className="hidden md:block absolute top-10 -right-4 w-8 h-8 text-primary" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-muted" id="apply">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <SectionHeading
              badge="Apply Now"
              title="Franchise Application"
              description="Fill out the form below and our team will get in touch within 24 hours"
            />

            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl border border-border">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                  <Input placeholder="Your full name" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                  <Input placeholder="917358897955" type="tel" required />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                  <Input placeholder="your@email.com" type="email" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">City *</label>
                  <Input placeholder="Your city" required />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">Investment Capacity</label>
                <Input placeholder="e.g., ₹5 Lakhs" />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">Message (Optional)</label>
                <Textarea placeholder="Tell us about your background and interest in solar business..." rows={4} />
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Application"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Franchise;
