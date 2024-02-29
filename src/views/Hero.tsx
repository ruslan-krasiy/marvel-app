import { FC } from "react";
import useGetHero from "../hooks/useGetHero";

const Hero:FC = () => {
  const  {data, status} = useGetHero();

  if(status === "loading"){
    return <div>Loading...</div>;
  }else if(status === "rejected" || !data){
    return <div>Not found</div>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
};

export default Hero;