import { useCallback, useEffect, useState } from "react";
import { Hero } from "../interfaces/hero.interface";
import { apiGet } from "../api";
import { useAppContext } from "../context";

interface StateType {
  data: Hero[];
  isLoading: boolean;
}

const useGetAllFavoritsHeroes = ():StateType => {
  const {favorits} = useAppContext();
  const [state, setState] = useState<StateType>({
    data: [],
    isLoading: true,
  });

  const getData = useCallback(async () => {
    if(favorits.length === 0){
      setState({data: [], isLoading: false});
      return;
    }
    
    const results = [];
    for(const heroId of favorits){
      try{
        const hero = await apiGet<Hero[]>(`characters/${heroId}`);
        if(hero){
          results.push(hero[0]);
        }
      }catch(e){
        console.error(e);
      }
    }  
    
    if(results.length > 0){
      setState({data: results, isLoading: false});
    }
  }, []);

  useEffect(()=>{
    getData();
  }, [getData]);

  return state;
};

export default useGetAllFavoritsHeroes;