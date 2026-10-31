import { createFileRoute, Link } from "@tanstack/react-router";
import { Github, Shield, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GITHUB_URL, LINKEDIN_URL, focusAreas } from "@/lib/portfolio";
import profilbild from "@/assets/profilbild-kvadrat.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Martin — IT-säkerhetsstudent" },
      {
        name: "description",
        content:
          "Portfolio för Martin, IT-säkerhetsstudent. Projekt, kompetenser och länkar till GitHub.",
      },
      { property: "og:title", content: "Martin — IT-säkerhetsstudent" },
      {
        property: "og:description",
        content:
          "Portfolio för Martin, IT-säkerhetsstudent. Projekt, kompetenser och länkar till GitHub.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() { return (
      <section id="top" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 md:py-28">
        <div className="grid items-start gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs uppercase tracking-wide text-muted-foreground">
              <Shield className="h-3.5 w-3.5 text-primary" />
              IT-säkerhetsstudent
            </p>
            <h1 className="max-w-xl text-4xl font-bold  md:text-5xl">
              Säkerhet som håller
              <span className="block text-muted-foreground">för verkliga tester.</span>
            </h1>
            <div className="mt-6 flex max-w-lg items-start gap-5">
              <p className="text-lg text-muted-foreground">
                Jag heter Martin och studerar IT-säkerhet på{" "}
                <a
                  href="https://www.iths.se/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  ITHS
                </a>
                . I mina egna labbmiljöer
                analyserar, testar samt härdar jag system som används både på
                företag och i privata hem.
              </p>
              <img
                src={profilbild.url}
                alt="Porträtt av Martin"
                className="h-44 w-44 shrink-0 rounded-full object-cover ring-2 ring-primary/60"
              />
            </div>
            <div className="mt-8 flex max-w-lg items-start gap-3 rounded-lg border border-primary/40 bg-primary/10 p-4">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <div className="text-sm text-foreground/90">
                <p>
                  <span className="font-semibold text-primary">Aktuellt:</span>{" "}
                  Jag söker LIA (lärande i arbete)
                </p>
                <p className="mt-1">30 aug–24 okt 2027 (v. 35–42)</p>
                <p>27 dec 2027–2 apr 2028 (v. 52–13)</p>
                <p className="mt-1">
                  Hör gärna av dig via{" "}
                <Link
                  to="/kontakt"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  kontaktsidan
                </Link>{" "}
                eller{" "}
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  LinkedIn
                </a>
                .
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link to="/projekt">
                Se projekten
                <ArrowUpRight className="h-4 w-4" />
              </Link></Button>
              <Button asChild variant="outline" size="lg"><a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                
              >
                <Github className="h-4 w-4" />
                GitHub
              </a></Button>
            </div>
          </div>
          <aside className="border-l border-border pl-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Fokusområden
            </h2>
            <ul className="mt-4 space-y-4">
              {focusAreas.map((area) => (
                <li key={area.title} className="flex gap-3">
                  <area.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium">{area.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {area.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>


); }
