import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4 md:px-8">
        <div>
          <div className="font-display text-xl font-bold">Explore New Zealand</div>
          <p className="mt-2 text-sm opacity-80">Ehrliche Insider-Tipps und Live-Eindrücke aus Aotearoa für deutschsprachige Reisende.</p>
        </div>
        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest opacity-70">Entdecken</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/regionen" className="opacity-90 hover:opacity-100">Regionen</Link></li>
            <li><Link to="/sicherheit" className="opacity-90 hover:opacity-100">Sicherheit</Link></li>
            <li><Link to="/faq" className="opacity-90 hover:opacity-100">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest opacity-70">Rechtliches</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/impressum" className="opacity-90 hover:opacity-100">Impressum</Link></li>
            <li><Link to="/datenschutz" className="opacity-90 hover:opacity-100">Datenschutz</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest opacity-70">Quellen</div>
          <p className="text-sm opacity-80">Inhalte basieren auf offiziellen Quellen wie Auswärtigem Amt, Tourism New Zealand und Immigration NZ.</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs opacity-70 md:px-8">
        © {new Date().getFullYear()} Explore New Zealand · Reiseblog (privat, nicht-kommerziell)
      </div>
    </footer>
  );
}
