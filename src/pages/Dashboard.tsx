import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  FileText, 
  BookOpen, 
  Sparkles, 
  FlaskConical, 
  Calendar,
  Clock,
  TrendingUp,
  Bell,
  ArrowRight,
  BookmarkCheck,
  Target
} from "lucide-react";

const quickStats = [
  { label: "Saved PYQs", value: "24", icon: FileText, color: "text-blue-500", bgColor: "bg-blue-500/10" },
  { label: "Notes Bookmarked", value: "12", icon: BookOpen, color: "text-emerald-500", bgColor: "bg-emerald-500/10" },
  { label: "Practice Done", value: "68%", icon: Target, color: "text-amber-500", bgColor: "bg-amber-500/10" },
  { label: "Forum Posts", value: "8", icon: TrendingUp, color: "text-purple-500", bgColor: "bg-purple-500/10" },
];

const upcomingExams = [
  { subject: "Data Structures", date: "Dec 15, 2024", type: "Mid-Sem", daysLeft: 10 },
  { subject: "Computer Networks", date: "Dec 18, 2024", type: "Mid-Sem", daysLeft: 13 },
  { subject: "Operating Systems", date: "Dec 20, 2024", type: "Mid-Sem", daysLeft: 15 },
];

const recentActivity = [
  { action: "Downloaded", item: "DSA 2023 Mid-Sem Paper", time: "2 hours ago", icon: FileText },
  { action: "Bookmarked", item: "DBMS Complete Notes", time: "5 hours ago", icon: BookOpen },
  { action: "Viewed", item: "AI Predictions for CN", time: "1 day ago", icon: Sparkles },
  { action: "Completed", item: "OS Lab Experiment 5", time: "2 days ago", icon: FlaskConical },
];

const subjectProgress = [
  { name: "DSA", progress: 75, total: 45, completed: 34 },
  { name: "DBMS", progress: 60, total: 38, completed: 23 },
  { name: "OS", progress: 40, total: 42, completed: 17 },
  { name: "CN", progress: 25, total: 35, completed: 9 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome back, Student! 👋</h1>
            <p className="text-muted-foreground">Here's your academic progress overview</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {quickStats.map((stat, index) => (
              <Card key={stat.label} variant="elevated" className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Subject Progress */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      Subject Progress
                    </CardTitle>
                    <Badge variant="glass">This Semester</Badge>
                  </div>
                  <CardDescription>Track your PYQ completion across subjects</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {subjectProgress.map((subject) => (
                    <div key={subject.name} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{subject.name}</span>
                        <span className="text-muted-foreground">
                          {subject.completed}/{subject.total} papers
                        </span>
                      </div>
                      <Progress value={subject.progress} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* AI Predictions Preview */}
              <Card variant="accent">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-accent" />
                      AI Predicted Questions
                    </CardTitle>
                    <Badge variant="info">New</Badge>
                  </div>
                  <CardDescription>Top predicted questions for your upcoming exams</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-card rounded-lg border border-border/50">
                      <div className="flex items-start justify-between">
                        <div>
                          <Badge variant="easy" className="mb-2">High Confidence</Badge>
                          <p className="text-sm">Explain the time complexity of QuickSort with best and worst case scenarios.</p>
                        </div>
                        <span className="text-xs text-muted-foreground">DSA</span>
                      </div>
                    </div>
                    <div className="p-3 bg-card rounded-lg border border-border/50">
                      <div className="flex items-start justify-between">
                        <div>
                          <Badge variant="medium" className="mb-2">Medium Confidence</Badge>
                          <p className="text-sm">Compare and contrast TCP and UDP protocols with examples.</p>
                        </div>
                        <span className="text-xs text-muted-foreground">CN</span>
                      </div>
                    </div>
                  </div>
                  <Link to="/predict">
                    <Button variant="accent" className="w-full mt-4">
                      View All Predictions
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Exams */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Calendar className="w-5 h-5 text-primary" />
                    Upcoming Exams
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {upcomingExams.map((exam) => (
                    <div key={exam.subject} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium text-sm">{exam.subject}</p>
                        <p className="text-xs text-muted-foreground">{exam.date}</p>
                      </div>
                      <Badge variant={exam.daysLeft <= 10 ? "destructive" : "secondary"}>
                        {exam.daysLeft} days
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Clock className="w-5 h-5 text-primary" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <activity.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm">
                          <span className="text-muted-foreground">{activity.action}</span>{" "}
                          <span className="font-medium truncate">{activity.item}</span>
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card variant="gradient">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link to="/pyqs">
                    <Button variant="secondary" className="w-full justify-start">
                      <FileText className="w-4 h-4 mr-2" />
                      Browse PYQs
                    </Button>
                  </Link>
                  <Link to="/notes">
                    <Button variant="secondary" className="w-full justify-start">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Study Notes
                    </Button>
                  </Link>
                  <Link to="/lab">
                    <Button variant="secondary" className="w-full justify-start">
                      <FlaskConical className="w-4 h-4 mr-2" />
                      Lab Materials
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
