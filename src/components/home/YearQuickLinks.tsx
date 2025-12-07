import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const YearQuickLinks = () => {
    const years = ["First", "Second", "Third", "Final"]; // Years for quick access

    return (
        <div className="mt-16 animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <h3 className="text-2xl font-bold text-foreground mb-4">Jump to Specific Year's Papers</h3>
            <div className="flex flex-wrap justify-center gap-4">
                {years.map((year, index) => (
                    // The link navigates to the PYQs page and adds a query parameter to filter results
                    <Link key={year} to={`/pyqs?year=${year}`}>
                        <Button 
                            variant="outline" 
                            size="lg" 
                            className="text-lg hover:bg-primary hover:text-white border-2 border-primary/50 transition-all duration-300 hover:shadow-lg"
                            style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                        >
                            {year}
                        </Button>
                    </Link>
                ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">Select a year to filter the PYQ Repository instantly.</p>
        </div>
    );
};

export default YearQuickLinks;