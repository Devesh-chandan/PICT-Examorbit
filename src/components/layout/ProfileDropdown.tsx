import { Link } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuDescription } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User, LogOut, Target } from "lucide-react";
import { toast } from "sonner";

// Mock user data (In a real app, this would come from a global state/context)
const currentUser = {
    name: "Dev. Chandan",
    initials: "DC",
    email: "dev.chandan@pict.edu"
};

const ProfileDropdown = () => {
    // Placeholder for actual logout logic
    const handleLogout = () => {
        // In a real application, replace this with: localStorage.removeItem('token');
        
        toast.info("Successfully logged out.", { duration: 2000 });
        
        // Simulate immediate redirection to the login page (root '/')
        setTimeout(() => {
            window.location.href = "/";
        }, 300);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full overflow-hidden w-10 h-10 ml-2 hover:scale-105 transition-transform duration-300">
                    <Avatar className="w-10 h-10 border border-border">
                        {/* Using AvatarFallback to display initials */}
                        <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                            {currentUser.initials}
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-semibold flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {currentUser.name}
                </DropdownMenuLabel>
                <DropdownMenuDescription className="text-xs text-muted-foreground truncate px-2 mb-1">
                    {currentUser.email}
                </DropdownMenuDescription>
                <DropdownMenuSeparator />
                
                {/* Progress Tracker Button */}
                <Link to="/dashboard">
                    <DropdownMenuItem className="cursor-pointer font-medium text-primary hover:!bg-primary/10">
                        <Target className="w-4 h-4 mr-2" />
                        Progress Tracker
                    </DropdownMenuItem>
                </Link>

                <DropdownMenuSeparator />
                
                {/* Logout Button */}
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-destructive focus:bg-destructive/10 focus:text-destructive">
                    <LogOut className="w-4 h-4 mr-2" />
                    Log Out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ProfileDropdown;