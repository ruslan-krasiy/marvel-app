import { FC } from "react";
import HeroesList from "../components/heroes-list/list";
import Container from "../components/container/container";
import Loader from "../components/loader/loader";
import useGetAllFavoritsHeroes from "../hooks/useGetAllFAvoritsHeroes";

const Favorits:FC = () => {
  const { data, isLoading } = useGetAllFavoritsHeroes();


  if(isLoading) {
    return <Loader />;
  }
  
  return (
    <Container>
      <h2>Favorites</h2>
      <HeroesList list={data} />
    </Container>
  );
};

export default Favorits;