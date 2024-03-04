import { FC } from "react";
import useGetAllHeroes from "../hooks/useGetAllHeroes";
import HeroesList from "../components/heroes-list/list";
import Container from "../components/container/container";
import Loader from "../components/loader/loader";

const Heroes:FC = () => {
  const { data, isLoading } = useGetAllHeroes();
  
  if(isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <HeroesList list={data} />
    </Container>
  );
};

export default Heroes;