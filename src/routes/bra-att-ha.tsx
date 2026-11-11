import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { helpfulLinks, virusTotalLink, windowsTools } from "@/lib/portfolio";

export const Route = createFileRoute("/bra-att-ha")({
  component: Helpful,
  head: () => ({
    meta: [
      { title: "Bra att ha — Martin | IT-säkerhet" },
      {
        name: "description",
        content:
          "Sidor och program jag själv använder: Fixit, Have I Been Pwned, Autoruns, Process Explorer och VirusTotal.",
      },
      { property: "og:title", content: "Bra att ha — Martin | IT-säkerhet" },
      {
        property: "og:description",
        content:
          "Sidor och program jag själv använder: Fixit, Have I Been Pwned, Autoruns, Process Explorer och VirusTotal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

type LinkItem = {
  name: string;
  url: string;
  description: string;
};

function LinkCard({ item }: { item: LinkItem }) {
  return (
    <li className="rounded-lg border border-border bg-background/40 p-5">
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 font-medium text-primary underline-offset-4 hover:underline"
      >
        {item.name}
        <ArrowUpRight className="h-4 w-4" />
      </a>
      <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
    </li>
  );
}

function Helpful() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold">Bra att ha</h1>
      <p className="mt-3 text-muted-foreground">
        Sidor och program jag själv använder. Ingen reklam — bara länkar jag
        tycker är värda att dela.
      </p>

      <ul className="mt-10 space-y-4">
        {helpfulLinks.map((item) => (
          <LinkCard key={item.url} item={item} />
        ))}
      </ul>

      <h2 className="mt-12 text-xl font-semibold">Kontrollera mot VirusTotal</h2>
      <ul className="mt-6 space-y-4">
        <LinkCard item={virusTotalLink} />
      </ul>

      <div className="mt-4 ml-4 border-l-2 border-primary/40 pl-6 sm:ml-8">
        <h3 className="text-lg font-semibold">{windowsTools.heading}</h3>
        <p className="mt-2 text-muted-foreground">{windowsTools.intro}</p>
        <ul className="mt-5 space-y-4">
          {windowsTools.links.map((item) => (
            <LinkCard key={item.url} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
