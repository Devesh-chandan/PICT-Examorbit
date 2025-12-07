import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { BookOpen, FileText, FlaskConical, Users, MessageSquare, Bell } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// NOTE: axios is not defined in the available files, so we're mocking the import/usage.
// For a real application, you would need to install it (`npm install axios`) and configure your API endpoint.
// import axios from 'axios'; 

const FeatureCard = ({ icon, title, description, color }: { icon: JSX.Element, title: string, description: string, color: string }) => {
    // Map custom colors to Tailwind classes using the design tokens (e.g., primary, accent, success)
    const colorClasses: Record<string, string> = {
        primary: 'bg-primary/10 text-primary',
        accent: 'bg-accent/10 text-accent',
        success: 'bg-emerald-500/10 text-emerald-500',
        warning: 'bg-amber-500/10 text-amber-500',
        destructive: 'bg-destructive/10 text-destructive',
        secondary: 'bg-secondary/50 text-secondary-foreground'
    };

    return (
        <div className="p-8 rounded-2xl border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-card">
            <div className={`w-16 h-16 rounded-xl ${colorClasses[color]} flex items-center justify-center mb-6`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
    );
};

const AuthLanding = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        branch: '',
        year: 1
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        // --- PLACEHOLDER AUTH LOGIC ---
        try {
            await new Promise(resolve => setTimeout(resolve, 1500)); 

            if (formData.email.includes("fail")) {
                 throw new Error("Invalid credentials or user already exists.");
            }

            // SUCCESS MESSAGE AND REDIRECTION
            toast.success(isLogin ? 'Login successful! Redirecting to Home.' : 'Registration successful! Please log in.');
            
            // Redirect to the original home page (/home) upon successful login
            if (isLogin) {
                 window.location.href = "/home"; 
            } else {
                setIsLogin(true);
            }
        } catch (error: any) {
            toast.error(error.message || 'Authentication failed. Please try again.');
        } finally {
            setLoading(false);
        }
        // --- END PLACEHOLDER AUTH LOGIC ---
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: name === 'year' ? parseInt(value) : value }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950">
            {/* The Navbar component handles its own conditional rendering based on the URL path */}
            <Navbar /> 
            
            <section className="relative overflow-hidden pt-16">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 animate-fade-in">
                            <div className="inline-block">
                                <span className="px-4 py-2 bg-primary/10 text-primary dark:bg-primary/20 rounded-full text-sm font-semibold">
                                    PICT Autonomous Edition
                                </span>
                            </div>
                            <h1 className="text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
                                Your Academic
                                <span className="block gradient-text">Universe</span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                One-stop platform for PYQs, Notes, Lab Codes, Viva Questions, and more. Built by students, for students.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <BookOpen className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground">10K+</p>
                                        <p className="text-sm text-muted-foreground">Questions</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                                        <FileText className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground">500+</p>
                                        <p className="text-sm text-muted-foreground">Notes</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                        <Users className="w-6 h-6 text-emerald-500" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground">5K+</p>
                                        <p className="text-sm text-muted-foreground">Students</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Auth Card */}
                        <div className="animate-slide-in">
                            <Card className="shadow-2xl border-border/50 bg-card/80 backdrop-blur-sm">
                                <CardHeader className="space-y-2">
                                    <CardTitle className="text-2xl">{isLogin ? 'Welcome Back' : 'Join PICT Hub'}</CardTitle>
                                    <CardDescription>
                                        {isLogin ? 'Sign in to access your resources' : 'Create your account to get started'}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Tabs value={isLogin ? 'login' : 'register'} onValueChange={(v) => setIsLogin(v === 'login')}>
                                        <TabsList className="grid w-full grid-cols-2 mb-6">
                                            <TabsTrigger value="login">Login</TabsTrigger>
                                            <TabsTrigger value="register">Register</TabsTrigger>
                                        </TabsList>
                                        <TabsContent value="login">
                                            <form onSubmit={handleSubmit} className="space-y-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="email">Email</Label>
                                                    <Input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        placeholder="your.email@pict.edu"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="password">Password</Label>
                                                    <Input
                                                        id="password"
                                                        name="password"
                                                        type="password"
                                                        placeholder="••••••••"
                                                        value={formData.password}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                                <Button type="submit" className="w-full" disabled={loading} variant="hero">
                                                    {loading ? 'Signing in...' : 'Sign In'}
                                                </Button>
                                            </form>
                                        </TabsContent>
                                        <TabsContent value="register">
                                            <form onSubmit={handleSubmit} className="space-y-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="name">Full Name</Label>
                                                    <Input
                                                        id="name"
                                                        name="name"
                                                        placeholder="John Doe"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="reg-email">Email</Label>
                                                    <Input
                                                        id="reg-email"
                                                        name="email"
                                                        type="email"
                                                        placeholder="your.email@pict.edu"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="reg-password">Password</Label>
                                                    <Input
                                                        id="reg-password"
                                                        name="password"
                                                        type="password"
                                                        placeholder="••••••••"
                                                        value={formData.password}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="branch">Branch</Label>
                                                        <Select name="branch" value={formData.branch} onValueChange={(v) => handleSelectChange('branch', v)}>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="CSE">CSE</SelectItem>
                                                                <SelectItem value="IT">IT</SelectItem>
                                                                <SelectItem value="ECE">ECE</SelectItem>
                                                                <SelectItem value="MECH">MECH</SelectItem>
                                                                <SelectItem value="CIVIL">CIVIL</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="year">Year</Label>
                                                        <Select name="year" value={String(formData.year)} onValueChange={(v) => handleSelectChange('year', v)}>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="1">1st Year</SelectItem>
                                                                <SelectItem value="2">2nd Year</SelectItem>
                                                                <SelectItem value="3">3rd Year</SelectItem>
                                                                <SelectItem value="4">4th Year</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                </div>
                                                <Button type="submit" className="w-full" disabled={loading} variant="gradient">
                                                    {loading ? 'Creating Account...' : 'Create Account'}
                                                </Button>
                                            </form>
                                        </TabsContent>
                                    </Tabs>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-card">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-foreground mb-4">Everything You Need</h2>
                        <p className="text-xl text-muted-foreground">All academic resources in one place</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<BookOpen className="w-8 h-8" />}
                            title="PYQ Repository"
                            description="Browse thousands of previous year questions filtered by subject, module, and year"
                            color="primary"
                        />
                        <FeatureCard
                            icon={<FileText className="w-8 h-8" />}
                            title="Notes Vault"
                            description="Access student-uploaded notes with ratings and easy download options"
                            color="accent"
                        />
                        <FeatureCard
                            icon={<FlaskConical className="w-8 h-8" />}
                            title="Lab Bank"
                            description="Complete lab experiments with code, output, and explanations"
                            color="success"
                        />
                        <FeatureCard
                            icon={<MessageSquare className="w-8 h-8" />}
                            title="Discussion Forum"
                            description="Ask questions, share knowledge, and connect with peers anonymously"
                            color="warning"
                        />
                        <FeatureCard
                            icon={<Users className="w-8 h-8" />}
                            title="Viva Bank"
                            description="Prepare for vivas with curated questions and detailed answers"
                            color="secondary"
                        />
                        <FeatureCard
                            icon={<Bell className="w-8 h-8" />}
                            title="Circulars"
                            description="Stay updated with latest exam schedules and important announcements"
                            color="destructive"
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default AuthLanding;