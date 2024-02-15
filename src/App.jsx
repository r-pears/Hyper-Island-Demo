import { useEffect, useState } from "react";
import "./App.css";
import getPage from "./api/content";
import DetailsPage from "./components/DetailsPage";
import Nav from "./components/Nav";
import MainContent from "./components/MainContent";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Loads the data
    getPage()
      .then((resp) => {
        if (resp) {
          setData(resp);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log("Something went wrong: " + error);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="loadingFrame">
        <div className="loadingSpinner" />
      </div>
    );
  }

  // if (data) {
  //   data.blocks.map((block, index) => {
  //     <DetailsPage key={index} block={block} />;
  //   });
  // }
  let titles;

  data.blocks.map((block) => {
    titles = block.products.map((product) => product.title);
  });

  return (
    <>
      <header>
        <Nav />
      </header>
      <MainContent data={data} />
      <footer>
        <p>© 2024 Hyperflix</p>
      </footer>
    </>
  );
};

export default App;
