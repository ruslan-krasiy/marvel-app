import { FC } from "react";
import useGetAllHeroes from "../hooks/useGetAllHeroes";
import SearchHeroes from "../components/search/search";
import HeroesList from "../components/heroes-list/list";
import Container from "../components/container/container";
import Loader from "../components/loader/loader";

const Heroes:FC = () => {
  const { data, status } = useGetAllHeroes();

  console.log(data, status);

  if(status === "loading") {
    return <Loader />;
  }

  return (
    <Container>
      {
        data.length > 0 
          ? <>
            <SearchHeroes amount={data.length}/>
            <HeroesList list={data} />
          </>
          : <div>Sorry. We have some problems with API Marvel</div>
      }
      
    </Container>
  );
};

export default Heroes;