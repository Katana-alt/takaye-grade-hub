import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart, 
  Users, 
  Award, 
  TrendingUp, 
  BookOpen,
  FileText,
  Calendar,
  Target
} from "lucide-react";

export const DashboardPreview = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Dashboard Preview
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Powerful Analytics at a Glance</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get instant insights into student performance, class averages, and 
            academic trends with our intuitive dashboard interface.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-12">
          <Card className="shadow-medium hover:shadow-large transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">1,247</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-success">+12%</span> from last term
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-medium hover:shadow-large transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Class Average</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">78.5%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-success">+5.2%</span> improvement
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-medium hover:shadow-large transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Top Performers</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">156</div>
              <p className="text-xs text-muted-foreground">
                Students above 85%
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-medium hover:shadow-large transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Reports Generated</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">342</div>
              <p className="text-xs text-muted-foreground">
                This month
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 shadow-large">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Performance Trends
              </CardTitle>
              <CardDescription>
                Class performance across different subjects this term
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { subject: "Mathematics", score: 85, color: "bg-primary" },
                { subject: "English", score: 78, color: "bg-accent" },
                { subject: "Science", score: 82, color: "bg-success" },
                { subject: "Kiswahili", score: 75, color: "bg-warning" },
                { subject: "Social Studies", score: 80, color: "bg-secondary" }
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{item.subject}</span>
                    <span className="text-muted-foreground">{item.score}%</span>
                  </div>
                  <Progress value={item.score} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Add New Students
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Enter Marks
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Reports
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-medium bg-gradient-accent text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Term Goals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Average Goal: 80%</span>
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      78.5%
                    </Badge>
                  </div>
                  <Progress value={78.5} className="h-2 bg-white/20" />
                  <p className="text-xs text-white/90">
                    1.5% away from term target
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};