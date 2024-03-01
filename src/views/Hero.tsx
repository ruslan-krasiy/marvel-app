import { FC } from "react";
import useGetHero from "../hooks/useGetHero";
import Banner from "../components/banner-hero/banner";
import HeroComics from "../components/comics/comics";
import Loader from "../components/loader/loader";

const Hero:FC = () => {
  const {data, isLoading, comics} = useGetHero();

  if(isLoading){
    return <Loader />;
  }

  if(!data){
    return <div>Not found</div>;
  }
  
  return (
    <div>
      <Banner 
        avatar={`${data.thumbnail.path}.${data.thumbnail.extension}`}
        description={data.description}
        id={data.id}
        name={data.name}
      />
      { comics && <HeroComics comics={comics} />}
    </div>
  );
};

export default Hero;