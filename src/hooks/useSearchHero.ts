import { useMemo, useState } from "react";
import { Hero } from "../interfaces/hero.interface";

interface HookState {
  results: Hero[];
  searchTerm: string;
  setSearchTerm: (a: string) => void;
}
const useSearchHero = (heroes: Hero[]):HookState => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const results = useMemo(
    () => heroes.filter(hero => hero.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
    , [heroes, searchTerm]);

  return {
    results,
    searchTerm,
    setSearchTerm
  };
};

export default useSearchHero;