import { useCallback, useEffect, useState } from "react";
import { Hero } from "../interfaces/hero.interface";
import { StatusLoader } from "../interfaces/status.interface";
import { apiGet } from "../api";
import { useParams } from "react-router";

interface StateType {
  data: Hero | null;
  status: StatusLoader 
}
const useGetHero = ():StateType => {
  const [state, setState] = useState<StateType>({
    data: null,
    status: StatusLoader.Loading
  });

  const { id } = useParams();

  const getData = useCallback(async () => {
    if(!id)
      return;

    const response = await apiGet(`characters/${id}`);

    let newState:StateType = {data: null, status: StatusLoader.Rejected};
    
    if(response){
      newState = {data: response[0], status: StatusLoader.Successed};
    }

    setState(newState);
  }, []);

  useEffect(()=>{
    getData();
  }, [getData]);

  return state;
};

export default useGetHero;