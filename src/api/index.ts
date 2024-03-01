import { ApiResponse } from "../interfaces/response.interface";

const API = "https://gateway.marvel.com:443/v1/public";
const API_KEY = "ts=1&apikey=a2fa95e3e927058d80203ddbbe8269f3&hash=0e74afce0916eb27e1560c6ad8b3a870";

export async function apiGet<T>(params: string):Promise<T> {
  try{
    const response = await fetch(`${API}/${params}?${API_KEY}&limit=50`);

    const json:ApiResponse = await response.json();
    
    if(json.code === 200){
      return json.data.results as T;
    }
    throw new Error("No data");
  }catch(error){
    console.error(error);
    throw new Error("No data 2");
  }
}

