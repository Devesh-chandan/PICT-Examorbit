import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import PYQs from "./pages/PYQs";
import Notes from "./pages/Notes";
import Predict from "./pages/Predict";
import Lab from "./pages/Lab";
import Forum from "./pages/Forum";
import Updates from "./pages/Updates";
import NotFound from "./pages/NotFound";
import AuthLanding from "./pages/AuthLanding"; // Import the new AuthLanding component

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLanding />} /> {/* Set AuthLanding as the new root page */}
          <Route path="/home" element={<Index />} /> {/* Move original Index to /home */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pyqs" element={<PYQs />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/predict" element={<Predict />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;