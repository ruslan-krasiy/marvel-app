import { useCallback, useEffect, useState } from "react";
import { Hero } from "../interfaces/hero.interface";
import { apiGet } from "../api";
import { useParams } from "react-router";
import { Comic } from "../interfaces/comics.interface";

interface StateType {
  comics: Comic[] | null;
  data: Hero | null;
  isLoading: boolean; 
}
const useGetHero = ():StateType => {
  const [state, setState] = useState<StateType>({
    data: null,
    comics: null,
    isLoading: true
  });

  const { id } = useParams();

  const getData = useCallback(async () => {
    if(!id)
      return;

    const {hero, comics} = await getHeroData(id);
    
    if(hero && comics){
      setState({data: hero[0], isLoading: false, comics: comics});
    }
    
  }, []);

  useEffect(()=>{
    getData();
  }, [getData]);

  return state;
};

async function getHeroData(id: string):Promise<{hero: Hero[], comics: Comic[]}> {
  const responseHero = await apiGet<Hero[]>(`characters/${id}`);
  const responseComics = await apiGet<Comic[]>(`characters/${id}/comics`);

  return {
    hero: responseHero,
    comics: responseComics
  };
}

export default useGetHero;