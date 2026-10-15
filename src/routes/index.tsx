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

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
      <section id="top" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
          <Terminal className="h-3.5 w-3.5 text-primary" />
          IT-säkerhetsstudent
        </p>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight md:text-6xl">
          Hej, jag heter Martin.
          <span className="block text-muted-foreground">Jag studerar IT-säkerhet.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Jag brinner för att förstå hur system kan angripas — och ännu mer för hur
          man skyddar dem. Här samlar jag mina projekt, labbar och det jag lär mig
          under vägen.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projekt"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Se mina projekt
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
          >
            <Github className="h-4 w-4" />
            Följ på GitHub
          </a>
        </div>
      </section>

      {/* Om mig */}
      <section id="om-mig" className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Om mig</h2>
            <p className="mt-4 text-muted-foreground">
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
      <section id="projekt" className="mx-auto max-w-5xl px-6 py-20">
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
