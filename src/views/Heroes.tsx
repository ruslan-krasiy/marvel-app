import { FC } from "react";
import useGetAllHeroes from "../hooks/useGetAllHeroes";
import { Link } from "react-router-dom";

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
      <h1>Heroes Page</h1>
      <div>
        <ul>
          {
            data.map(hero => (
              <li key={hero.id}>
                <Link to={`${hero.id}`}>
                  {hero.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Heroes;