import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowRight, BookOpen, Users, FileText, Sparkles } from "lucide-react";
import { useState } from "react";
import YearQuickLinks from "./YearQuickLinks"; // Import the new component

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const stats = [
    { icon: FileText, label: "PYQ Papers", value: "2,500+" },
    { icon: BookOpen, label: "Study Notes", value: "1,200+" },
    { icon: Users, label: "Active Students", value: "5,000+" },
    { icon: Sparkles, label: "AI Predictions", value: "98%" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      
      {/* Floating Elements (Re-enabled the floating blocks) */}
      {/* <div className="absolute top-40 right-20 hidden lg:block animate-float">
        <div className="glass rounded-2xl p-4 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-emerald-500" />
            </div>
            <div>
              <p className="text-sm font-medium">AI Predicted</p>
              <p className="text-xs text-muted-foreground">95% accuracy</p>
            </div>
          </div>
        </div>
      </div> */}
      
      {/* <div className="absolute bottom-40 left-20 hidden lg:block animate-float" style={{ animationDelay: "3s" }}>
        <div className="glass rounded-2xl p-4 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
              <FileText className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <p className="text-sm font-medium">New PYQs</p>
              <p className="text-xs text-muted-foreground">2024 Papers Added</p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-slide-up">
            Everything you need 
            <br />
            <span className="gradient-text">to score higher</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            PYQs, notes, AI predictions, and student collaboration
          </p>

          <div className="max-w-xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
  <div className="
    relative group 
    hover:rounded-full 
    transition-all duration-300 
    hover:glow-primary
  "> 
    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

    <input
      type="text"
      placeholder="Search subjects, modules, or questions..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="
        w-full h-14 pl-12 pr-32 
        rounded-2xl 
        border border-border 
        bg-card/80 
        backdrop-blur-sm 
        text-foreground 
        placeholder:text-muted-foreground 
        focus:outline-none 
        focus:ring-2 focus:ring-primary/50 
        transition-all 
        group-hover:rounded-full
      " 
    />

    <Button 
      variant="gradient" 
      size="lg"
      className="
        absolute right-2 top-1/2 -translate-y-1/2
        
        group-hover:rounded-full 
        
      "
    >
      Search
    </Button>
  </div>
</div>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/pyqs">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Browse PYQs
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="glass" size="xl" className="w-full sm:w-auto">
                Go to Dashboard
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-4 hover-lift"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* NEW: Year Selection Component */}
          <YearQuickLinks />
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;