import { useCallback, useEffect, useState } from "react";
import { Hero } from "../interfaces/hero.interface";
import { apiGet } from "../api";

interface StateType {
  data: Hero[];
  isLoading: boolean 
}
const useGetAllHeroes = ():StateType => {
  const [state, setState] = useState<StateType>({
    data: [],
    isLoading: true
  });

  const getData = useCallback(async () => {
    
    const response = await apiGet<Hero[]>("characters");    
    if(response){
      setState({data: response, isLoading: false});
    }

  }, []);

  useEffect(()=>{
    getData();
  }, [getData]);

  return state;
};

export default useGetAllHeroes;