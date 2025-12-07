import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  BookmarkPlus,
  Calendar,
  User,
  ChevronDown,
  FileText,
  Sparkles
} from "lucide-react";

const subjects = ["All", "DSA", "DBMS", "OS", "CN", "TOC", "SE", "AI"];
const years = ["All", "2024", "2023", "2022", "2021", "2020"];
const examTypes = ["All", "Mid-Sem", "End-Sem", "Unit Test"];
const difficulties = ["All", "Easy", "Medium", "Hard"];

const pyqData = [
  {
    id: 1,
    subject: "Data Structures & Algorithms",
    code: "DSA",
    year: 2024,
    type: "Mid-Sem",
    module: 3,
    question: "Explain the heapify operation with a detailed example. Also discuss the time complexity of building a heap.",
    difficulty: "Medium",
    faculty: "Prof. ABC",
    views: 234,
    downloads: 156,
  },
  {
    id: 2,
    subject: "Database Management Systems",
    code: "DBMS",
    year: 2024,
    type: "Mid-Sem",
    module: 2,
    question: "Explain normalization with examples of 1NF, 2NF, 3NF, and BCNF. Why is normalization important?",
    difficulty: "Hard",
    faculty: "Prof. XYZ",
    views: 312,
    downloads: 198,
  },
  {
    id: 3,
    subject: "Operating Systems",
    code: "OS",
    year: 2023,
    type: "End-Sem",
    module: 4,
    question: "Compare and contrast different CPU scheduling algorithms: FCFS, SJF, Round Robin, and Priority Scheduling.",
    difficulty: "Medium",
    faculty: "Prof. DEF",
    views: 189,
    downloads: 145,
  },
  {
    id: 4,
    subject: "Computer Networks",
    code: "CN",
    year: 2023,
    type: "Mid-Sem",
    module: 1,
    question: "Explain the OSI model layers with their functions and protocols used at each layer.",
    difficulty: "Easy",
    faculty: "Prof. GHI",
    views: 267,
    downloads: 178,
  },
  {
    id: 5,
    subject: "Data Structures & Algorithms",
    code: "DSA",
    year: 2024,
    type: "End-Sem",
    module: 5,
    question: "Implement Dijkstra's algorithm and explain its working with an example graph.",
    difficulty: "Hard",
    faculty: "Prof. ABC",
    views: 445,
    downloads: 287,
  },
  {
    id: 6,
    subject: "Theory of Computation",
    code: "TOC",
    year: 2024,
    type: "Mid-Sem",
    module: 2,
    question: "Design a DFA that accepts strings over {0,1} with an even number of 0s and 1s.",
    difficulty: "Medium",
    faculty: "Prof. JKL",
    views: 156,
    downloads: 98,
  },
];

const getDifficultyVariant = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case "easy": return "easy";
    case "medium": return "medium";
    case "hard": return "hard";
    default: return "secondary";
  }
};

const getSubjectColor = (code: string) => {
  const colors: Record<string, string> = {
    DSA: "from-blue-500 to-indigo-500",
    DBMS: "from-emerald-500 to-teal-500",
    OS: "from-orange-500 to-amber-500",
    CN: "from-purple-500 to-pink-500",
    TOC: "from-rose-500 to-red-500",
    SE: "from-cyan-500 to-sky-500",
    AI: "from-violet-500 to-purple-500",
  };
  return colors[code] || "from-gray-500 to-slate-500";
};

const PYQs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  const filteredPYQs = pyqData.filter((pyq) => {
    const matchesSearch = pyq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pyq.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = selectedSubject === "All" || pyq.code === selectedSubject;
    const matchesYear = selectedYear === "All" || pyq.year.toString() === selectedYear;
    const matchesType = selectedType === "All" || pyq.type === selectedType;
    const matchesDifficulty = selectedDifficulty === "All" || pyq.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesSubject && matchesYear && matchesType && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <Badge variant="glass" className="mb-4">
              <FileText className="w-3 h-3 mr-1" />
              PYQ Repository
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Previous Year <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-muted-foreground">
              Browse and filter through 2500+ questions from previous exams
            </p>
          </div>

          {/* Search and Filters */}
          <Card className="mb-6">
            <CardContent className="p-4">
              {/* Search Bar */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search questions, subjects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 pl-10 pr-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-3">
                {/* Subject Filter */}
                <div className="flex flex-wrap gap-2">
                  {subjects.map((subject) => (
                    <Button
                      key={subject}
                      variant={selectedSubject === subject ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedSubject(subject)}
                    >
                      {subject}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Secondary Filters */}
              <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-border">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="h-9 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>{year === "All" ? "All Years" : year}</option>
                  ))}
                </select>

                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="h-9 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  {examTypes.map((type) => (
                    <option key={type} value={type}>{type === "All" ? "All Types" : type}</option>
                  ))}
                </select>

                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="h-9 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  {difficulties.map((diff) => (
                    <option key={diff} value={diff}>{diff === "All" ? "All Difficulty" : diff}</option>
                  ))}
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-medium text-foreground">{filteredPYQs.length}</span> questions
            </p>
            <Button variant="ghost" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>

          {/* Questions List */}
          <div className="space-y-4">
            {filteredPYQs.map((pyq, index) => (
              <Card 
                key={pyq.id} 
                variant="interactive"
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    {/* Subject Badge */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${getSubjectColor(pyq.code)} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                      {pyq.code}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge variant={getDifficultyVariant(pyq.difficulty) as any}>
                          {pyq.difficulty}
                        </Badge>
                        <Badge variant="outline">{pyq.type}</Badge>
                        <Badge variant="secondary">Module {pyq.module}</Badge>
                        <span className="text-sm text-muted-foreground">{pyq.year}</span>
                      </div>

                      <h3 className="font-medium text-lg mb-2">{pyq.question}</h3>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {pyq.faculty}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {pyq.views} views
                        </span>
                        <span className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          {pyq.downloads}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex md:flex-col gap-2">
                      <Button variant="ghost" size="icon">
                        <BookmarkPlus className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Download className="w-5 h-5" />
                      </Button>
                      <Button variant="accent" size="icon">
                        <Sparkles className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="flex justify-center mt-8">
            <Button variant="outline" size="lg">
              Load More Questions
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PYQs;
