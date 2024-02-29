import { FC } from "react";
import useGetHero from "../hooks/useGetHero";
import Banner from "../components/hero/banner";
import HeroComics from "../components/comics/comics";

const Hero:FC = () => {
  const  {data, status} = useGetHero();

  if(status === "loading"){
    return <div>Loading...</div>;
  }else if(status === "rejected" || !data){
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
      <HeroComics commics={data.comics} />
    </div>
  );
};

export default Hero;