import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Mail, Phone, MapPin, Heart } from "lucide-react";
import takayeLogo from "@/assets/takaye-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={takayeLogo} 
                alt="Takaye Comprehensive School" 
                className="h-8 w-8"
              />
              <div>
                <h3 className="font-bold">Takaye Comprehensive</h3>
                <p className="text-sm text-secondary-foreground/80">Strive for the Best</p>
              </div>
            </div>
            <p className="text-secondary-foreground/90 leading-relaxed">
              Empowering education through innovative performance management solutions 
              designed specifically for Kenyan schools.
            </p>
            <Button className="bg-primary hover:bg-primary-hover">
              <GraduationCap className="h-4 w-4 mr-2" />
              Get Started Today
            </Button>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-secondary-foreground/90">
              <li><a href="#" className="hover:text-primary transition-colors">Student Management</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Marks Entry</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Report Generation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Analytics Dashboard</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Excel Integration</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-secondary-foreground/90">
              <li><a href="#" className="hover:text-primary transition-colors">Getting Started</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">User Guide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Video Tutorials</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-secondary-foreground/90">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">Takaye, Kenya</span>
              </div>
              <div className="flex items-center space-x-3 text-secondary-foreground/90">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+254 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-3 text-secondary-foreground/90">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">info@takayeschool.ac.ke</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-secondary-foreground/80">
              © 2024 Takaye Comprehensive School. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm text-secondary-foreground/80">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>for Education</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};