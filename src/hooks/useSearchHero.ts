import { useEffect, useState } from "react";
import { Hero } from "../interfaces/hero.interface";

interface HookState {
  results: Hero[];
  searchHero: (a: string) => void;
}
const useSearchHero = (heroes: Hero[]):HookState => {
  const [state, setState] = useState<Hero[]>([]);

  useEffect(()=>{
    setState(heroes);
  },[heroes]);

  const searchHero = (value: string) => {
    if(value.length === 0){
      setState(heroes);
    }else{
      const name = value.toLowerCase();
      const results = heroes.filter(hero => hero.name.toLowerCase().indexOf(name) > -1);
  
      setState(results);
    }
  };

  return {
    results: state,
    searchHero
  };
};

export default useSearchHero;