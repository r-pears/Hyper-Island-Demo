import { useEffect, useState } from "react";
import "./App.css";
import getPage from "./api/content";

interface Duration {
  milliseconds: number;
  readable: string;
}

interface People {
  directors: string[];
  participants: string[];
}

interface Production {
  country: string[];
  year: number;
}

interface Product {
  duration: Duration;
  flags: string[];
  genres: string[];
  guid: string;
  parentalRating: string;
  people: People;
  production: Production;
  path: string;
  title: string;
  type: string;
  imdb?: {
    id: string;
    rating: string;
  };
}

interface Template {
  href: string;
  type: string;
}

interface Block {
  type: string;
  templates: Template[];
  products: Product[];
}

interface PageData {
  type: string;
  blocks: Block[];
}
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<PageData | null>(null);

  useEffect(() => {
    // Loads the data
    getPage()
      .then((resp) => {
        if (resp) {
          setData(resp as PageData);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log("Something went wrong: " + error);
      });
  }, []);

  console.log(data?.blocks[0].products);

  if (isLoading) {
    return (
      <div className="loadingFrame">
        <div className="loadingSpinner" />
      </div>
    );
  }

  return <></>;
};

export default App;
