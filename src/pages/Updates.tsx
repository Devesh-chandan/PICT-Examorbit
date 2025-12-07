import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Bell, 
  Calendar,
  Download,
  ExternalLink,
  AlertTriangle,
  Info,
  CheckCircle,
  Clock
} from "lucide-react";

const updates = [
  {
    id: 1,
    title: "Mid-Sem Examination Schedule - December 2024",
    description: "The mid-semester examination schedule for SE, TE, and BE has been released. Download the timetable below.",
    type: "exam",
    date: "Dec 1, 2024",
    isNew: true,
    hasAttachment: true,
  },
  {
    id: 2,
    title: "Holiday Notice - Constitution Day",
    description: "College will remain closed on November 26, 2024 on account of Constitution Day.",
    type: "holiday",
    date: "Nov 24, 2024",
    isNew: false,
    hasAttachment: false,
  },
  {
    id: 3,
    title: "Lab External Examination - DSA Lab",
    description: "DSA Lab external examination for TE Computer batch A will be conducted on December 5, 2024.",
    type: "exam",
    date: "Nov 22, 2024",
    isNew: false,
    hasAttachment: true,
  },
  {
    id: 4,
    title: "Placement Drive - TCS Digital",
    description: "TCS Digital recruitment drive scheduled for December 10, 2024. Eligible students must register by December 5.",
    type: "placement",
    date: "Nov 20, 2024",
    isNew: false,
    hasAttachment: true,
  },
  {
    id: 5,
    title: "Syllabus Revision Notice",
    description: "Minor revisions in Operating Systems syllabus for Module 4 & 5. Updated syllabus available for download.",
    type: "academic",
    date: "Nov 18, 2024",
    isNew: false,
    hasAttachment: true,
  },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "exam": return AlertTriangle;
    case "holiday": return CheckCircle;
    case "placement": return Info;
    default: return Bell;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "exam": return "text-amber-500 bg-amber-500/10";
    case "holiday": return "text-emerald-500 bg-emerald-500/10";
    case "placement": return "text-blue-500 bg-blue-500/10";
    default: return "text-primary bg-primary/10";
  }
};

const getTypeBadge = (type: string) => {
  switch (type) {
    case "exam": return "warning";
    case "holiday": return "success";
    case "placement": return "info";
    default: return "secondary";
  }
};

const Updates = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <Badge variant="glass" className="mb-4">
              <Bell className="w-3 h-3 mr-1" />
              Updates
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Circulars & <span className="gradient-text">Announcements</span>
            </h1>
            <p className="text-muted-foreground">
              Stay updated with the latest notices and exam schedules
            </p>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Button variant="default" size="sm">All</Button>
            <Button variant="outline" size="sm">Exams</Button>
            <Button variant="outline" size="sm">Holidays</Button>
            <Button variant="outline" size="sm">Placements</Button>
            <Button variant="outline" size="sm">Academic</Button>
          </div>

          {/* Updates List */}
          <div className="space-y-4">
            {updates.map((update, index) => {
              const Icon = getTypeIcon(update.type);
              const colorClass = getTypeColor(update.type);
              
              return (
                <Card 
                  key={update.id}
                  variant="interactive"
                  className="animate-slide-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-5">
                    <div className="flex gap-4">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${colorClass}`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Badge variant={getTypeBadge(update.type) as any}>
                            {update.type.charAt(0).toUpperCase() + update.type.slice(1)}
                          </Badge>
                          {update.isNew && (
                            <Badge variant="gradient">New</Badge>
                          )}
                        </div>

                        <h3 className="font-semibold text-lg mb-2">{update.title}</h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          {update.description}
                        </p>

                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {update.date}
                          </div>

                          {update.hasAttachment && (
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <Download className="w-4 h-4 mr-2" />
                                Download
                              </Button>
                              <Button variant="ghost" size="sm">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                View
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Subscribe Card */}
          <Card variant="gradient" className="mt-8">
            <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Bell className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Never Miss an Update</h3>
                  <p className="text-sm text-muted-foreground">Get notified about important circulars via email</p>
                </div>
              </div>
              <Button variant="default">
                Subscribe to Updates
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Updates;
