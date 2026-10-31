import { Bug, Network, Lock, Terminal, Radar } from "lucide-react";

export const GITHUB_URL = "https://github.com/nfjmartin";
export const LINKEDIN_URL = "https://www.linkedin.com/in/martinlabsse/";
export const EMAIL = "martinlabs.se@proton.me";

export const liaPeriods = [
  { start: "2027-08-30", end: "2027-10-24", weeks: [35, 42], label: "30 aug–24 okt 2027 (v. 35–42)" },
  { start: "2027-12-27", end: "2028-04-02", weeks: [52, 13], label: "27 dec 2027–2 apr 2028 (v. 52–13)" },
] as const;

export const projects = [
  {
    icon: Terminal,
    title: "Penetrationstestning",
    description:
      "En lokal LLM får via SSH till en Ubuntu-maskin i uppgift att penetrera ett lokalt nätverk. För varje omgång får den tillgång till fler verktyg samt dokumentation om nätverket och hur verktygen används. Mätning och dokumentation sker utifrån: om den fastnar, vilka steg den tar samt hur snabbt den fångar flaggan (på uppgifter där flagga förekommer). Kommande: vilka metoder som stoppar den eller endast försenar den.",
    tags: ["Pågående", "LLM", "Red team"],
  },
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
    description: "Kontrollerad testning mot OS, som Windows och Linux (client/server).",
  },
  {
    icon: Network,
    title: "Nätverkssäkerhet",
    description: "Övervakning, segmentering samt intrångsförsök och upptäckt i egen labbmiljö.",
  },
  {
    icon: Radar,
    title: "Omvärldsbevakning",
    description: "Följer säkerhetsnyheter, nya sårbarheter och trender inom IT-säkerhet.",
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

