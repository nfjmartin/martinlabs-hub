import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Github, Linkedin, Mail, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GITHUB_URL, LINKEDIN_URL, EMAIL } from "@/lib/portfolio";
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

function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };
  return (
      <section className="py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-12 text-center">
          <h1 className="text-3xl font-bold">Kontakt</h1>
          <p className="max-w-md text-sm text-muted-foreground">
            Jag söker LIA inom IT-säkerhet — hör gärna av dig om du vill prata
            praktikplats, samarbeta på ett projekt eller bara säga hej.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button onClick={copyEmail} aria-label={`Kopiera e-postadressen ${EMAIL}`}>
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Mail className="h-4 w-4" />
              )}
              {copied ? "Kopierad!" : EMAIL}
            </Button>
            <Button asChild variant="outline"><a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a></Button>
            <Button asChild variant="outline"><a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a></Button>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Martin
          </p>
        </div>
      </section>
  );
}
