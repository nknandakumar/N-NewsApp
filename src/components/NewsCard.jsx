import axios from "axios";
import { useState, useEffect } from "react";
import CardComp from "./CardComp";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";


const CardGrid = ({ category }) => {
  const [news, setNews] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const URL = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=e6e65d1e059e4abfa350f29b406489e9`;
    axios
      .get(URL)
      .then((res) => {
        setNews(res.data.articles);
        console.log(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`transition-colors duration-500 
       ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}
      `}
    >
      <div
        className={`container w-full mx-auto px-4 py-8 ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        } transition-colors duration-500 `}
      >
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 text-white rounded-full  focus:outline-none shadow-xl "
          >
          {isDarkMode ? <Sun className=" text-yellow-400" /> : <Moon className="text-gray-800" />}
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CardComp
                key={index}
                img={data.urlToImage}
                title={data.title}
                date={data.publishedAt}
                desc={data.description}
                url={data.url}
                author={data.author}
                content={data.content}
                source={data.source.name}
                Dark={isDarkMode}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
