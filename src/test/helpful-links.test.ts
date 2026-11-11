import { describe, expect, it } from "vitest";
import { helpfulLinks, riskUpdates, windowsTools } from "@/lib/portfolio";

const VIRUSTOTAL = "https://www.virustotal.com/";

describe("Bra att ha-listan", () => {
  it("links to exactly the pages Martin named", () => {
    expect(helpfulLinks.map((link) => link.url)).toEqual([
      "https://fixit.com/",
      "https://haveibeenpwned.com/",
      VIRUSTOTAL,
    ]);
    expect(windowsTools.links.map((link) => link.url)).toEqual([
      "https://learn.microsoft.com/en-us/sysinternals/downloads/autoruns",
      "https://learn.microsoft.com/en-us/sysinternals/downloads/process-explorer",
    ]);
  });

  it("lists VirusTotal as an ordinary link, with the Windows tools nested after it", () => {
    expect(helpfulLinks.at(-1)?.url).toBe(VIRUSTOTAL);
    const order = [
      ...helpfulLinks.map((link) => link.url),
      ...windowsTools.links.map((link) => link.url),
    ];
    expect(order).toHaveLength(5);
    expect(order.indexOf(VIRUSTOTAL)).toBeLessThan(
      order.indexOf(windowsTools.links[0].url),
    );
    expect(order.at(-1)).toBe(windowsTools.links[1].url);
    expect(new Set(order).size).toBe(order.length);
    expect(windowsTools.heading.length).toBeGreaterThan(0);
  });

  it("points both Windows tools at VirusTotal", () => {
    for (const link of windowsTools.links) {
      expect(link.description).toContain("VirusTotal");
    }
  });

  it("keeps the two current-risk links in their own group, never duplicated elsewhere", () => {
    expect(riskUpdates.links.map((link) => link.url)).toEqual([
      "https://www.svenskhandel.se/sakerhet/",
      "https://cve.hackhint.com/",
    ]);
    expect(riskUpdates.heading).toContain("säkerhetsriskerna");
    const all = [
      ...helpfulLinks,
      ...windowsTools.links,
      ...riskUpdates.links,
    ].map((link) => link.url);
    expect(new Set(all).size).toBe(all.length);
  });

  it("gives every listed page a name and a description", () => {
    for (const item of [...helpfulLinks, ...windowsTools.links, ...riskUpdates.links]) {
      expect(item.name.length).toBeGreaterThan(0);
      expect(item.description.length).toBeGreaterThan(20);
    }
  });
});
