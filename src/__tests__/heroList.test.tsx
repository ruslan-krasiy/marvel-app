import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import HeroesList from "../components/heroes-list/list";

describe("Component Hero List", () => {
  test("Empty Heroes List", () => {
    render(<HeroesList list={[]}/>);
    expect(screen.getByText("0 Results")).toBeDefined();
  });
});