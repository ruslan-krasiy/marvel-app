import { useCallback, useEffect, useState } from "react";
import { Hero } from "../interfaces/hero.interface";
import { StatusLoader } from "../interfaces/status.interface";
import { apiGet } from "../api";

interface StateType {
  data: Hero[];
  status: StatusLoader 
}
const useGetAllHeroes = ():StateType => {
  const [state, setState] = useState<StateType>({
    data: [],
    status: StatusLoader.Loading
  });

  const getData = useCallback(async () => {
    
    const response = await apiGet("characters");
    let newState:StateType = {data: [], status: StatusLoader.Rejected};
    
    if(response){
      newState = {data: response, status: StatusLoader.Successed};
    }

    setState(newState);
  }, []);

  useEffect(()=>{
    getData();
  }, [getData]);

  return state;
};

export default useGetAllHeroes;