import { expect, it, describe } from "vitest";
import { renderHook } from "@testing-library/react-hooks";
import useSearchHero from "../hooks/useSearchHero";
import { Hero } from "../interfaces/hero.interface";
import { act } from "react-dom/test-utils";

describe("useSearchHero Hook", () => { 
  it("should return a default search term and original heros", () => { 
    const items = [{ name: "Robin" }, {name: "Spiderman"}];

    const { result } = renderHook(() => useSearchHero(items as Hero[]));
    expect(result.current.searchTerm).toBe("");
    expect(result.current.results).toEqual(items);
  });

  it("should return a Spiderman", () => { 
    const items = [{ name: "Robin" }, {name: "Spiderman"}];

    const { result } = renderHook(() => useSearchHero(items as Hero[]));
    act(() => {
      result.current.setSearchTerm("spi");
    });
    expect(result.current.results).toEqual([{name: "Spiderman"}]);
  });

  it("should return a ADAM WARLOCK and Adam Destine", () => { 
    const items = [
      { name: "Robin" }, 
      {name: "Spiderman"}, 
      {name: "ADAM DESTINE"}, 
      {name: "ADAM WARLOCK"}];

    const { result } = renderHook(() => useSearchHero(items as Hero[]));

    act(() => {
      result.current.setSearchTerm("ADAM");
    });
    expect(result.current.results).toEqual([{name: "ADAM DESTINE"}, {name: "ADAM WARLOCK"}]);
  });

  it("should return an empty array", () => { 
    const items = [{ name: "Robin" }, {name: "Spiderman"}, {name: "ADAM DESTINE"}, {name: "ADAM WARLOCK"}];

    const { result } = renderHook(() => useSearchHero(items as Hero[]));
    act(() => {
      result.current.setSearchTerm("Nnon");
    });
    expect(result.current.results).toEqual([]);
  });
});