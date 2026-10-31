import { createFileRoute } from "@tanstack/react-router";
import { Code2 } from "lucide-react";
import { skills } from "@/lib/portfolio";
export const Route = createFileRoute("/om-mig")({
  component: About,
  head: () => ({ meta: [
    { title: "Om mig — Martin | IT-säkerhet" },
    { name: "description", content: "Lär känna Martin, IT-säkerhetsstudent med fokus på säkerhetsanalys, nätverk och webbsäkerhet." },
    { property: "og:title", content: "Om mig — Martin | IT-säkerhet" },
    { property: "og:description", content: "Lär känna Martin, IT-säkerhetsstudent med fokus på säkerhetsanalys, nätverk och webbsäkerhet." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
});

function About() { return (
      <section id="om-mig" className="py-4">
        <div className="mx-auto grid max-w-4xl gap-10 px-6 py-20 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold">Om mig</h1>
            <p className="mt-4 font-medium text-foreground">Hej, jag heter Martin.</p>
            <p className="mt-3 text-muted-foreground">
              Jag läser IT-säkerhet på{" "}
              <a
                href="https://www.iths.se/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                ITHS
              </a>{" "}
              och tillbringar stora delar av min fritid i
              hemlabbet — där jag bygger, bryter och försvarar egna miljöer. Min
              målsättning är att arbeta brett inom säkerhet, från skydd av datorer
              och trådbundna och trådlösa nätverk till fysisk säkerhet.
            </p>
            <p className="mt-4 text-muted-foreground">
              Just nu fördjupar jag mig i nätverkssäkerhet och webbsäkerhet ur ett
              privat nätverksperspektiv.
            </p>
            <p className="mt-4 text-muted-foreground">
              Håller ett öga på CERT-SE samt CISA för att se vad som är aktuellt
              både på hemmaplan och i hela ligan.
            </p>
            <h2 className="mt-8 text-xl font-semibold">Hemmalabbet</h2>
            <p className="mt-3 text-muted-foreground">
              Mitt hemmalabb består av två dedikerade Windows-datorer med VMware,
              där jag kör Windows Server, Linux Server samt klienter. En separat
              Ubuntu-dator fungerar som testdator.
            </p>
            <p className="mt-4 text-muted-foreground">
              I pipen just nu: Qwen3.8 27B Q4 som via SSH styr Ubuntu-datorn och
              agerar red team mot min egen labbmiljö. Modellen använder ett konto
              utan sudo-behörighet samt med ytterligare begränsningar. Målet är att
              undersöka och mäta hur långt och snabbt en lokal LLM kan ta sig i ett
              privat, segmenterat nätverk när den ligger helt på VRAM och vilka
              skydd som stoppar den.
            </p>
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              <Code2 className="h-4 w-4 text-primary" />
              Kunskapsområden
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


); }
