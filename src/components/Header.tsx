import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, User } from "lucide-react";
import takayeLogo from "@/assets/takaye-logo.png";

export const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src={takayeLogo} 
              alt="Takaye Comprehensive School" 
              className="h-10 w-10"
            />
            <div>
              <h1 className="text-xl font-bold text-foreground">Takaye Comprehensive School</h1>
              <p className="text-sm text-muted-foreground italic">Strive for the Best</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#dashboard" className="text-foreground hover:text-primary transition-colors">
              Dashboard
            </a>
            <a href="#students" className="text-foreground hover:text-primary transition-colors">
              Students
            </a>
            <a href="#marks" className="text-foreground hover:text-primary transition-colors">
              Marks Entry
            </a>
            <a href="#reports" className="text-foreground hover:text-primary transition-colors">
              Reports
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <User className="h-4 w-4 mr-2" />
              Teacher Login
            </Button>
            <Button size="sm" className="bg-gradient-primary hover:opacity-90 shadow-glow">
              <GraduationCap className="h-4 w-4 mr-2" />
              Get Started
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};