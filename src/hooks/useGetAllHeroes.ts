import { useCallback, useEffect, useState } from "react";
import { Hero } from "../interfaces/hero.interface";
import { apiGet } from "../api";
import { RequestError } from "../utils/error";

interface StateType {
  data: Hero[];
  isLoading: boolean;
  error: string | null;
}
const useGetAllHeroes = ():StateType => {
  const [state, setState] = useState<StateType>({
    data: [],
    isLoading: true,
    error: null
  });

  const getData = useCallback(async () => {
    
   
    try{
      const response = await apiGet<Hero[]>("characters");    
    
      if(response){
        setState({data: response, isLoading: false, error: null});
      }
    }catch(e){
      const error = e as RequestError;
      setState({...state, isLoading: false, error: error.message});
    }

  }, []);

  useEffect(()=>{
    getData();
  }, [getData]);

  return state;
};

export default useGetAllHeroes;