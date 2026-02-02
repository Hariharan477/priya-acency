import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Benefits of Solar Energy in India: A Complete Guide",
    excerpt: "Discover why solar energy is the smartest investment for Indian homes and businesses. From cost savings to environmental benefits, learn everything about going solar.",
    category: "Solar Basics",
    author: "Priya Sharma",
    date: "January 15, 2024",
    readTime: "5 min read",
    image: "/placeholder.svg",
    slug: "benefits-of-solar-energy-india",
  },
  {
    id: 2,
    title: "Government Solar Subsidies 2024: How to Avail PM Surya Ghar",
    excerpt: "Complete guide to solar subsidies in India. Learn about PM Surya Ghar scheme, state subsidies, and how to get up to 40% subsidy on your solar installation.",
    category: "Subsidies & Policies",
    author: "Rajesh Kumar",
    date: "January 10, 2024",
    readTime: "8 min read",
    image: "/placeholder.svg",
    slug: "government-solar-subsidies-2024",
  },
  {
    id: 3,
    title: "On-Grid vs Off-Grid Solar: Which is Right for You?",
    excerpt: "Confused between on-grid and off-grid solar systems? This comprehensive comparison will help you choose the best option for your energy needs.",
    category: "Solar Basics",
    author: "Amit Patel",
    date: "January 5, 2024",
    readTime: "6 min read",
    image: "/placeholder.svg",
    slug: "on-grid-vs-off-grid-solar",
  },
  {
    id: 4,
    title: "Why Invest in Solar Business: Franchise Opportunity Guide",
    excerpt: "Solar industry is booming in India. Learn why starting a solar franchise could be your best business decision and how to get started.",
    category: "Business",
    author: "Sunita Reddy",
    date: "December 28, 2023",
    readTime: "7 min read",
    image: "/placeholder.svg",
    slug: "invest-solar-business-franchise",
  },
  {
    id: 5,
    title: "Solar Panel Maintenance: Tips for Maximum Efficiency",
    excerpt: "Keep your solar panels running at peak performance with these simple maintenance tips. Learn how to clean and maintain your solar system.",
    category: "Maintenance",
    author: "Mohammed Ali",
    date: "December 20, 2023",
    readTime: "4 min read",
    image: "/placeholder.svg",
    slug: "solar-panel-maintenance-tips",
  },
  {
    id: 6,
    title: "Net Metering Explained: Earn from Your Solar System",
    excerpt: "Understanding net metering policy in India. Learn how you can sell excess solar power back to the grid and maximize your savings.",
    category: "Subsidies & Policies",
    author: "Priya Sharma",
    date: "December 15, 2023",
    readTime: "5 min read",
    image: "/placeholder.svg",
    slug: "net-metering-explained",
  },
];

const categories = ["All", "Solar Basics", "Subsidies & Policies", "Business", "Maintenance"];

const Blog = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Our Blog
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Solar Energy Insights
            </h1>
            <p className="text-muted-foreground text-lg">
              Stay updated with the latest news, tips, and guides about solar energy, 
              government policies, and sustainable living.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full font-medium bg-muted text-muted-foreground hover:bg-accent transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-12">
            <div className="grid lg:grid-cols-2 gap-8 bg-card rounded-2xl overflow-hidden border border-border">
              <div className="aspect-video lg:aspect-auto bg-muted flex items-center justify-center">
                <span className="text-6xl">☀️</span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full mb-4 w-fit">
                  {blogPosts[0].category}
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {blogPosts[0].author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <Link
                  to={`/blog/${blogPosts[0].slug}`}
                  className="inline-flex items-center text-primary font-medium hover:gap-3 transition-all"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-card rounded-2xl overflow-hidden border border-border hover-lift group"
              >
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <span className="text-4xl">☀️</span>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-12">
            <button className="w-10 h-10 rounded-lg gradient-primary text-primary-foreground font-medium">1</button>
            <button className="w-10 h-10 rounded-lg bg-muted text-muted-foreground hover:bg-accent transition-colors">2</button>
            <button className="w-10 h-10 rounded-lg bg-muted text-muted-foreground hover:bg-accent transition-colors">3</button>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Blog;
