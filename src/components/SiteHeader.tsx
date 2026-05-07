import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Start" },
  { to: "/regionen", label: "Regionen" },
  { to: "/sicherheit", label: "Sicherheit" },
  { to: "/faq", label: "FAQ" },
  { to: "/impressum", label: "Impressum" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-primary text-primary-foreground shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Explore New Zealand Logo" className="h-10 w-10 rounded-full bg-white/10 object-contain" width={40} height={40} />
          <div className="leading-tight">
            <div className="font-display text-lg font-bold">Explore New Zealand</div>
            <div className="text-[10px] uppercase tracking-widest opacity-70">Naturally Epic</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium opacity-90 transition hover:opacity-100"
              activeProps={{ className: "text-sm font-semibold opacity-100 border-b-2 border-accent pb-0.5" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
      <nav className="flex gap-4 overflow-x-auto border-t border-white/10 px-4 py-2 text-sm md:hidden">
        {nav.map((n) => (
          <Link key={n.to} to={n.to} className="whitespace-nowrap opacity-90" activeProps={{ className: "whitespace-nowrap font-semibold opacity-100" }} activeOptions={{ exact: n.to === "/" }}>
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
