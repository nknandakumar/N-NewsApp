import NavBar from "./components/NavBar";
import NewsCard from "./components/NewsCard";
import { useState } from "react";

const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <>
      <NavBar setCategory={setCategory} />
      <NewsCard category={category} />
    </>
  );
};

export default App;
