import { createFileRoute } from "@tanstack/react-router";
import { Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GITHUB_URL } from "@/lib/portfolio";
export const Route = createFileRoute("/kontakt")({
  component: Contact,
  head: () => ({ meta: [
    { title: "Kontakt — Martin | IT-säkerhet" },
    { name: "description", content: "Kontakta Martin för samtal om IT-säkerhet och projektsamarbeten." },
    { property: "og:title", content: "Kontakt — Martin | IT-säkerhet" },
    { property: "og:description", content: "Kontakta Martin för samtal om IT-säkerhet och projektsamarbeten." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
});

function Contact() { return (
      {/* Kontakt / footer */}
      <section className="py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-12 text-center">
          <h1 className="text-xl font-bold">Kontakt</h1>
          <p className="max-w-md text-sm text-muted-foreground">
            Hör gärna av dig om du vill prata IT-säkerhet, samarbeta på ett projekt
            eller bara säga hej.
          </p>
          <div className="flex gap-3">
            <Button asChild><a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <Github className="h-4 w-4" />
              GitHub
            </a></Button>
            <Button asChild><a
              href="mailto:martin@example.com"
              
            >
              <Mail className="h-4 w-4" />
              E-post
            </a></Button>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Martin
          </p>
        </div>
      </section>
); }
