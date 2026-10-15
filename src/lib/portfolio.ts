import { Bug, Network, Lock, Terminal } from "lucide-react";

export const GITHUB_URL = "https://github.com/ditt-anvandarnamn";

export const projects = [
  {
    icon: Bug,
    title: "Sårbarhetsskanner",
    description:
      "Ett eget verktyg som skannar webbapplikationer efter vanliga sårbarheter som XSS och SQL-injektion. Byggt för att förstå hur attacker fungerar i praktiken.",
    tags: ["Python", "Webbsäkerhet", "OWASP"],
  },
  {
    icon: Network,
    title: "Nätverksövervakning i privat nät",
    description:
      "Byggde en Linuxbaserad sensor som övervakar nätverkstrafiken kontinuerligt. I virtuella maskiner simulerar jag intrångsförsök för att testa och förbättra detektionen. Verktyg: nmap, Wireshark, ntopng, Suricata och Wazuh.",
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

export const skills = [
  "Nätverkssäkerhet",
  "Penetrationstestning",
  "Linux",
  "Python",
  "Kryptografi",
  "Webbsäkerhet",
  "Incidenthantering",
  "SIEM & logganalys",
];

export const focusAreas = [
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

