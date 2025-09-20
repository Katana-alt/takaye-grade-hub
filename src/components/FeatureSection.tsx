import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  FileSpreadsheet, 
  Calculator, 
  BarChart, 
  FileText, 
  Shield,
  Upload,
  Download,
  Award
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Teacher Authentication",
    description: "Secure login system for teachers with role-based access control",
    badge: "Security",
    color: "bg-primary"
  },
  {
    icon: Users,
    title: "Student Database",
    description: "Comprehensive student management with Excel import capabilities",
    badge: "Management",
    color: "bg-accent"
  },
  {
    icon: Calculator,
    title: "Automatic Calculations",
    description: "Auto-calculate totals, means, grades, and class rankings",
    badge: "Smart",
    color: "bg-success"
  },
  {
    icon: FileText,
    title: "PDF Reports",
    description: "Generate professional report cards and merit lists",
    badge: "Reports",
    color: "bg-warning"
  },
  {
    icon: BarChart,
    title: "Analytics Dashboard",
    description: "Visual insights with performance trends and subject analysis",
    badge: "Analytics",
    color: "bg-primary"
  },
  {
    icon: Download,
    title: "Excel Exports",
    description: "Download performance data in Excel format for further analysis",
    badge: "Export",
    color: "bg-accent"
  }
];

export const FeatureSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Features
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Everything You Need</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tools designed to streamline academic performance management 
            for Kenyan schools following the CBC curriculum.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-medium hover:shadow-large transition-all duration-300 border-0">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${feature.color}`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary">{feature.badge}</Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto shadow-large border-0 bg-gradient-primary text-white">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <Award className="h-12 w-12 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">CBC Curriculum Compliant</h3>
              <p className="text-lg text-white/90 mb-6">
                Designed specifically for Grades 1-9 following the Kenyan Competency Based Curriculum, 
                ensuring all subject areas and assessment criteria are properly covered.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Mathematics", "English", "Kiswahili", "Science", "Social Studies", "Creative Arts"].map((subject) => (
                  <Badge key={subject} variant="secondary" className="bg-white/20 text-white border-white/30">
                    {subject}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};