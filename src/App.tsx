import { useEffect, useState } from "react";
import "./App.css";
import getPage from "./api/content";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

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

  return <></>;
};

export default App;
