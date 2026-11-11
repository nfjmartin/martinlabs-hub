import { describe, expect, it } from "vitest";
import { helpfulLinks, virusTotalLink, windowsTools } from "@/lib/portfolio";

describe("Bra att ha-listan", () => {
  it("links to exactly the pages Martin named", () => {
    expect(helpfulLinks.map((link) => link.url)).toEqual([
      "https://fixit.com/",
      "https://haveibeenpwned.com/",
    ]);
    expect(windowsTools.links.map((link) => link.url)).toEqual([
      "https://learn.microsoft.com/en-us/sysinternals/downloads/autoruns",
      "https://learn.microsoft.com/en-us/sysinternals/downloads/process-explorer",
    ]);
    expect(virusTotalLink.url).toBe("https://www.virustotal.com/");
  });

  it("lists the Windows tools as a sub-part of the VirusTotal section", () => {
    const order = [
      ...helpfulLinks.map((link) => link.url),
      virusTotalLink.url,
      ...windowsTools.links.map((link) => link.url),
    ];
    expect(order).toHaveLength(5);
    expect(order.indexOf(virusTotalLink.url)).toBeLessThan(
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

  it("gives every listed page a name and a description", () => {
    for (const item of [...helpfulLinks, ...windowsTools.links, virusTotalLink]) {
      expect(item.name.length).toBeGreaterThan(0);
      expect(item.description.length).toBeGreaterThan(20);
    }
  });
});
