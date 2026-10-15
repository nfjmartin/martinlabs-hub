import { createFileRoute } from "@tanstack/react-router";
import {
  Github,
  Shield,
  Terminal,
  Lock,
  Bug,
  Network,
  Mail,
  ArrowUpRight,
  Code2,
} from "lucide-react";

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

const GITHUB_URL = "https://github.com/ditt-anvandarnamn";

const projects = [
  {
    icon: Bug,
    title: "Sårbarhetsskanner",
    description:
      "Ett eget verktyg som skannar webbapplikationer efter vanliga sårbarheter som XSS och SQL-injektion. Byggt för att förstå hur attacker fungerar i praktiken.",
    tags: ["Python", "Webbsäkerhet", "OWASP"],
  },
  {
    icon: Network,
    title: "Nätverksövervakning i hemlab",
    description:
      "Satte upp ett hemlab med virtuella maskiner där jag analyserar nätverkstrafik och tränar på att upptäcka intrångsförsök med öppen källkod.",
    tags: ["Wireshark", "Linux", "IDS"],
  },
  {
    icon: Lock,
    title: "Lösenordshanterare",
    description:
      "En lokal lösenordshanterare med kryptering, byggd som ett skolprojekt för att lära mig kryptografi och säker lagring av känslig data.",
    tags: ["Kryptografi", "Java", "Säker lagring"],
  },
];

const skills = [
  "Nätverkssäkerhet",
  "Penetrationstestning",
  "Linux",
  "Python",
  "Kryptografi",
  "Webbsäkerhet",
  "Incidenthantering",
  "SIEM & logganalys",
];

const focusAreas = [
  {
    icon: Bug,
    title: "Sårbarhetsanalys",
    description: "Kontrollerad testning av webbapplikationer mot OWASP Top 10.",
  },
  {
    icon: Network,
    title: "Nätverkssäkerhet",
    description: "Övervakning, segmentering och intrångsupptäckt i egen labbmiljö.",
  },
  {
    icon: Lock,
    title: "Kryptografi",
    description: "Säker lagring, nyckelhantering och krypteringsprinciper.",
  },
  {
    icon: Terminal,
    title: "Automation",
    description: "Egna skript och verktyg i Python för att effektivisera arbetet.",
  },
];

function Index() {
  return (
    <div className="min-h-screen text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-semibold">
            <Shield className="h-5 w-5 text-primary" />
            Martin
          </a>
          <div className="flex items-center gap-6 text-sm">
            <a href="#om-mig" className="text-muted-foreground transition-colors hover:text-foreground">
              Om mig
            </a>
            <a href="#projekt" className="text-muted-foreground transition-colors hover:text-foreground">
              Projekt
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20 md:py-28">
        <div className="grid items-start gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs uppercase tracking-wide text-muted-foreground">
              <Shield className="h-3.5 w-3.5 text-primary" />
              IT-säkerhetsstudent
            </p>
            <h1 className="max-w-xl text-4xl font-bold tracking-tight md:text-5xl">
              Säkerhet som håller
              <span className="block text-muted-foreground">för verkliga tester.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Jag studerar IT-säkerhet och arbetar med att analysera, testa och
              härda system i egna miljöer. Allt jag bygger dokumenteras publikt på
              GitHub — nedan ett urval av vad jag jobbat med.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projekt"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Se projekten
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
          <aside className="rounded-xl border border-border bg-card p-6">
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

      {/* Om mig */}
      <section id="om-mig" className="scroll-mt-20 border-t border-border bg-card">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Om mig</h2>
            <p className="mt-4 font-medium text-foreground">Hej, jag heter Martin.</p>
            <p className="mt-3 text-muted-foreground">
              Jag läser IT-säkerhet och tillbringar stora delar av min fritid i
              hemlabbet — där jag bygger, bryter och försvarar egna miljöer. Min
              målsättning är att arbeta med säkerhetsanalys eller penetrationstestning
              efter examen.
            </p>
            <p className="mt-4 text-muted-foreground">
              Just nu fördjupar jag mig i nätverkssäkerhet och webbsäkerhet, och jag
              gillar att dokumentera allt jag lär mig på GitHub.
            </p>
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              <Code2 className="h-4 w-4 text-primary" />
              Kompetenser
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-background px-3 py-1 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projekt */}
      <section id="projekt" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
        <h2 className="text-2xl font-bold tracking-tight">Projekt</h2>
        <p className="mt-2 text-muted-foreground">
          Ett urval av saker jag byggt och labbat med. Mer finns på min GitHub.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <project.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Kontakt / footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-12 text-center">
          <h2 className="text-xl font-bold">Vill du komma i kontakt?</h2>
          <p className="max-w-md text-sm text-muted-foreground">
            Hör gärna av dig om du vill prata IT-säkerhet, samarbeta på ett projekt
            eller bara säga hej.
          </p>
          <div className="flex gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="mailto:martin@example.com"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
            >
              <Mail className="h-4 w-4" />
              E-post
            </a>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Martin
          </p>
        </div>
      </footer>
    </div>
  );
}
