import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Users, Award, FileText, TrendingUp, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

export const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight">
                Performance Entry
                <span className="block text-accent">Made Simple</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Streamline your academic record keeping with our comprehensive 
                learner performance management system designed specifically for 
                Kenyan schools.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-large"
              >
                <Users className="h-5 w-5 mr-2" />
                Start Managing Students
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                <FileText className="h-5 w-5 mr-2" />
                View Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { icon: Users, label: "Students", value: "500+" },
                { icon: BookOpen, label: "Subjects", value: "15+" },
                { icon: Award, label: "Reports", value: "1000+" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-accent" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Card className="shadow-large border-0 overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src={heroImage} 
                  alt="Educational Dashboard" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </CardContent>
            </Card>
            
            <div className="absolute -bottom-6 -right-6 bg-accent text-white p-4 rounded-lg shadow-glow">
              <TrendingUp className="h-6 w-6 mb-2" />
              <div className="text-sm font-semibold">95% Accuracy</div>
              <div className="text-xs opacity-90">Grade Calculation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};