import { FC } from "react";
import useGetHero from "../hooks/useGetHero";
import Banner from "../components/banner-hero/banner";
import HeroComics from "../components/comics/comics";
import Loader from "../components/loader/loader";
import ErrorUi from "../components/not-found/error-ui";

const Hero:FC = () => {
  const {data, isLoading, comics, error} = useGetHero();

  if(isLoading){
    return <Loader />;
  }

  if(error){
    return <ErrorUi text={error} />;
  }
  
  return (
    <>
      {
        data && <Banner 
          avatar={`${data.thumbnail.path}.${data.thumbnail.extension}`}
          description={data.description}
          id={data.id}
          name={data.name}
        />
      }
      { comics && <HeroComics comics={comics} />}
    </>
  );
};

export default Hero;