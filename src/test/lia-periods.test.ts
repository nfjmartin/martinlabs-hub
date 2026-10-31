import { describe, expect, it } from "vitest";
import { liaPeriods } from "@/lib/portfolio";

describe("LIA periods shared by Start and Kontakt", () => {
  it("covers weeks 35–42 in 2027", () => {
    expect(liaPeriods[0].start).toBe("2027-08-30");
    expect(liaPeriods[0].end).toBe("2027-10-24");
    expect(liaPeriods[0].weeks).toEqual([35, 42]);
  });
  it("covers weeks 52–13 across 2027 and 2028", () => {
    expect(liaPeriods[1].start).toBe("2027-12-27");
    expect(liaPeriods[1].end).toBe("2028-04-02");
    expect(liaPeriods[1].weeks).toEqual([52, 13]);
  });
});