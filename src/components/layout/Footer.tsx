import { Link } from "react-router-dom";
import { GraduationCap, Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">
                <span className="gradient-text">PICT</span> Academic
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Your one-stop academic universe for PICT Autonomous. Access PYQs, notes, and more.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/pyqs" className="hover:text-primary transition-colors">PYQ Repository</Link></li>
              <li><Link to="/notes" className="hover:text-primary transition-colors">Notes Vault</Link></li>
              <li><Link to="/lab" className="hover:text-primary transition-colors">Lab & Viva Bank</Link></li>
              <li><Link to="/predict" className="hover:text-primary transition-colors">AI Predictions</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/forum" className="hover:text-primary transition-colors">Discussion Forum</Link></li>
              <li><Link to="/updates" className="hover:text-primary transition-colors">Exam Updates</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contribute</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Guidelines</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 PICT Academic Universe. Made with ❤️ for students.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
