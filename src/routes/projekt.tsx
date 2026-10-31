import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/lib/portfolio";
export const Route = createFileRoute("/projekt")({
  component: Projects,
  head: () => ({ meta: [
    { title: "Projekt — Martin | IT-säkerhet" },
    { name: "description", content: "Martins projekt inom IT-säkerhet: sårbarhetsskanning och nätverksövervakning i privat nät." },
    { property: "og:title", content: "Projekt — Martin | IT-säkerhet" },
    { property: "og:description", content: "Martins projekt inom IT-säkerhet: sårbarhetsskanning och nätverksövervakning i privat nät." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
});

function Projects() { return (
      <section id="projekt" className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-3xl font-bold">Projekt</h1>
        <p className="mt-2 text-muted-foreground">
          Ett urval av projekt jag byggt och labbat med samt en mer utförlig
          förklaring på pågående projekt.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50"
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


); }
