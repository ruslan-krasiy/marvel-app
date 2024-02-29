import { FC } from "react";
import useGetAllHeroes from "../hooks/useGetAllHeroes";
import SearchHeroes from "../components/search/search";
import HeroesList from "../components/heroes-list/list";

const Heroes:FC = () => {
  const { data, status } = useGetAllHeroes();

  console.log(data, status);

  if(status === "loading") {
    return <div>Loading...</div>;
  }else if(status === "rejected"){
    return <div>Sorry. We have some problems with API Marvel</div>;
  }

  return (
    <div>
      <SearchHeroes amount={data.length}/>
      <HeroesList list={data} />
    </div>
  );
};

export default Heroes;