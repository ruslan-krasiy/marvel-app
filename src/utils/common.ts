import { DateElement } from "../interfaces/comics.interface";

export function getComicSaleDate(dates: DateElement[]):number | null{
  const focDate = dates.find(d => d.type === "onsaleDate");

  if(focDate){
    return (new Date(focDate.date)).getFullYear();
  }

  return null;
}