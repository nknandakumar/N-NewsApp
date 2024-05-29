import { formatDistanceToNow } from "date-fns";
import newsImg from "../assets/news.jpg";

const CardComp = (props) => {
  const { title, desc, img, author, url, date, content, Dark, source } = props;

  // Convert date to a relative time format
  const formattedDate = formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });

  // Function to truncate text to 100 words
  const truncateText = (text) => {
    if (!text) return ""; // Return empty string if text is null or undefined
    const words = text.split(" ");
    if (words.length > 100) {
      return words.slice(0, 100).join(" ") + "...";
    }
    return text;
  };

  // Truncate description to 100 words or show content if description is empty
  const truncatedDesc = truncateText(desc || content);

  return (
    <div
      className={`flex flex-col max-w-sm mx-auto border rounded-lg overflow-hidden shadow-lg transition-colors duration-500  ${
        Dark
          ? "bg-gray-900 text-white border-gray-700"
          : "bg-white text-gray-900 border-gray-200"
      }`}
    >
      <div className="flex-shrink-0">
        <img
          className="w-full h-48 object-cover"
          src={img || newsImg}
          alt="Article"
        />
      </div>
      <div className="p-6">
        <div
          className={`flex items-center justify-between text-sm ${
            Dark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <p className="font-semibold">{source}</p>
          <p>{formattedDate}</p>
        </div>
        <h1
          className={`mt-2 text-lg font-bold ${
            Dark ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h1>
        <p
          className={`mt-1 text-sm ${Dark ? "text-gray-400" : "text-gray-600"}`}
        >
          By {author}
        </p>
        <p
          className={`mt-2 text-base ${
            Dark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {truncatedDesc}
        </p>
        <div className="mt-4">
          <button
            className={`px-4 py-2 text-sm font-semibold rounded focus:outline-none ${
              Dark
                ? "bg-blue-500 text-white hover:bg-blue-400 focus:bg-blue-600"
                : "bg-blue-600 text-white hover:bg-blue-500 focus:bg-blue-700"
            }`}
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComp;
