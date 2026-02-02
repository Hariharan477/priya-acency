import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTASection } from "@/components/home/CTASection";
import { StatsSection } from "@/components/home/StatsSection";
import { CheckCircle, Target, Eye, Award, Users, Shield, Leaf } from "lucide-react";
import installationTeam from "@/assets/installation-team.jpg";
import commercialSolar from "@/assets/commercial-solar.jpg";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every project, using only the best materials and practices.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Our customers are at the heart of everything we do. Your satisfaction is our priority.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We believe in transparent dealings and honest communication at every step.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We're committed to making India greener, one solar installation at a time.",
  },
];

const milestones = [
  { year: "2009", title: "Company Founded", description: "Started with a vision to make solar accessible" },
  { year: "2012", title: "First 100 Installations", description: "Milestone of 100 residential projects" },
  { year: "2015", title: "Commercial Expansion", description: "Entered commercial & industrial segment" },
  { year: "2018", title: "Franchise Launch", description: "Started pan-India franchise network" },
  { year: "2021", title: "500MW Installed", description: "Crossed 500MW total installation capacity" },
  { year: "2024", title: "100+ Cities", description: "Expanded presence across 100+ Indian cities" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Powering India's Solar Revolution
            </h1>
            <p className="text-muted-foreground text-lg">
              For over 15 years, SolarPower India has been at the forefront of India's 
              renewable energy transition, delivering quality solar solutions to thousands 
              of homes and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                badge="Our Story"
                title="Building a Sustainable Future"
                centered={false}
              />
              <div className="space-y-6 text-muted-foreground">
                <p>
                  SolarPower India was founded in 2009 with a simple yet powerful mission: 
                  to make clean, renewable solar energy accessible to every Indian household 
                  and business. What started as a small team of passionate engineers has grown 
                  into one of India's most trusted solar EPC companies.
                </p>
                <p>
                  Today, we have successfully installed over 10,000 solar systems across 100+ 
                  cities in India, from small residential rooftops to large industrial power 
                  plants. Our commitment to quality, customer service, and sustainable practices 
                  has earned us the trust of thousands of customers.
                </p>
                <p>
                  We are MNRE empaneled and work with all major government subsidy schemes to 
                  ensure our customers get maximum benefits. Our Tier-1 solar panels come with 
                  25-year performance warranties, backed by our dedicated service team.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={installationTeam}
                alt="Our installation team"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg hidden md:block">
                <p className="font-heading text-4xl font-bold">10,000+</p>
                <p className="text-sm">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 md:p-12 rounded-2xl border border-border">
              <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To accelerate India's transition to clean energy by providing affordable, 
                high-quality solar solutions that empower individuals and businesses to 
                reduce their carbon footprint while saving on energy costs.
              </p>
            </div>
            <div className="bg-card p-8 md:p-12 rounded-2xl border border-border">
              <div className="w-16 h-16 rounded-xl gradient-secondary flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be India's most trusted solar energy company, leading the nation towards 
                a sustainable future where every rooftop harnesses the power of the sun, 
                creating energy independence and environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Solar */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={commercialSolar}
                alt="Commercial solar installation"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading
                badge="Why Solar"
                title="The Future is Solar"
                centered={false}
              />
              <div className="space-y-4">
                {[
                  "India receives 300+ sunny days per year - ideal for solar energy",
                  "Government subsidies up to 40% for residential solar installations",
                  "Solar panels last 25+ years with minimal maintenance",
                  "Reduce electricity bills by up to 90%",
                  "Protect yourself from rising electricity tariffs",
                  "Contribute to India's clean energy goals",
                  "Increase property value with solar installation",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Values"
            title="What We Stand For"
            description="Our core values guide everything we do"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card p-8 rounded-2xl border border-border text-center hover-lift"
              >
                <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Journey"
            title="Milestones We're Proud Of"
          />
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-border md:-translate-x-1/2" />
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center gap-8 mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} hidden md:block`}>
                    <div className="bg-card p-6 rounded-xl border border-border">
                      <p className="text-primary font-bold text-lg">{milestone.year}</p>
                      <h4 className="font-heading font-semibold text-foreground mb-1">{milestone.title}</h4>
                      <p className="text-muted-foreground text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full gradient-primary md:-translate-x-1/2 z-10" />
                  <div className="flex-1 ml-12 md:ml-0 md:hidden">
                    <div className="bg-card p-6 rounded-xl border border-border">
                      <p className="text-primary font-bold text-lg">{milestone.year}</p>
                      <h4 className="font-heading font-semibold text-foreground mb-1">{milestone.title}</h4>
                      <p className="text-muted-foreground text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
      <CTASection />
    </Layout>
  );
};

export default About;
