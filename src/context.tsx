import React, {
  createContext,
  useContext,
  useState
} from "react";

type AppContext = {
  favorits: number[];
  handlerFavorits?: (a: number)=>void
}

export const appContext = createContext<AppContext>({
  favorits: [],
  handlerFavorits: undefined,
});

export function useAppContext(): AppContext {
  return useContext(appContext);
}

interface ProvideAppContextProps {
  children: React.ReactNode
}

export default function ProvideAppContext({ children }: ProvideAppContextProps) {
  const context = useProvideAppContext();
  return (
    <appContext.Provider value={context}>
      {children}
    </appContext.Provider>
  );
}

export function useProvideAppContext() {
  const [favorits, setFavorits] = useState<number[]>([]);

  const handlerFavorits = (id: number) => {
    let list = favorits;
    if(list.includes(id)){
      list = list.filter(fav => fav !== id);
    }else{
      list.push(id);
    }
    setFavorits([...list]);
  };

  return {
    favorits,
    handlerFavorits
  };
}