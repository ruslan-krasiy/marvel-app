import { expect, it, describe } from "vitest";
import { getComicSaleDate } from "../utils/common";
import { DateElement } from "../interfaces/comics.interface";

describe("#Comic year", () => {
  it("2008",
    () => {
      const mock = [
        {
          "type": "onsaleDate",
          "date": "2008-04-16T00:00:00-0400"
        }
      ];
      expect(getComicSaleDate(mock as DateElement[])).equal(2008);
    }
  );
  it("Null",
    () => {
      expect(getComicSaleDate([] as DateElement[])).equal(null);
    }
  );
});