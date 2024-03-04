import { FC } from "react";
import useGetAllHeroes from "../hooks/useGetAllHeroes";
import HeroesList from "../components/heroes-list/list";
import Container from "../components/container/container";
import Loader from "../components/loader/loader";
import ErrorUi from "../components/not-found/error-ui";

const Heroes:FC = () => {
  const { data, isLoading, error } = useGetAllHeroes();
  
  if(isLoading) {
    return <Loader />;
  }

  if(error){
    return <ErrorUi text={error} />;
  }

  return (
    <Container>
      <HeroesList list={data} />
    </Container>
  );
};

export default Heroes;