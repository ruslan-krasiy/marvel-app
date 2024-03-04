import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import HeroComics from "../components/comics/comics";


describe("Component Hero List", () => {
  test("Empty Comics ", () => {
    render(<HeroComics comics={[]} />);
    expect(screen.getByText("No results")).toBeDefined();
  });
});