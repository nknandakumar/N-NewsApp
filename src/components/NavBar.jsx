import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = ({ setCategory }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <div className="bg-black border-2 rounded-full h-8 w-8"></div>
            <span className="text-2xl tracking-tight  font-bold font-serif rounded-full  ">
              N
            </span>
            <span className=" text-xl font-semibold text-gray-500 font-sans ">
              News
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 font-sans text-neutral-500 space-x-12 uppercase ">
            <li className="mx-4 hover:text-black ">
              <a href="#business" onClick={() => setCategory("business")}>
                Business
              </a>
            </li>
            <li className="mx-4  hover:text-black">
              <a
                href="#entertainment"
                onClick={() => setCategory("entertainment")}
              >
                Entertainment
              </a>
            </li>
            <li className="mx-4  hover:text-black">
              <a href="#general" onClick={() => setCategory("general")}>
                General
              </a>
            </li>
            <li className="mx-4  hover:text-black">
              <a href="#health" onClick={() => setCategory("health")}>
                Health
              </a>
            </li>
            <li className="mx-4  hover:text-black">
              <a href="#science" onClick={() => setCategory("science")}>
                Science
              </a>
            </li>
            <li className="mx-4  hover:text-black">
              <a href="#sports" onClick={() => setCategory("sports")}>
                Sports
              </a>
            </li>
            <li className="mx-4  hover:text-black transition-colors duration-500">
              <a href="#technology" onClick={() => setCategory("technology")}>
                Technology
              </a>
            </li>
          </ul>
          <div className="lg:hidden text-neutral-400 md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div
            className={`fixed right-0 z-20 gap-4 font-semibold 
      ${mobileDrawerOpen ? "" : "bg-transparent backdrop-blur-0"} 
      w-full p-12 flex flex-col justify-center items-center lg:hidden bg-white  `}
          >
            <ul className=" space-y-3 tracking-wider text-xl uppercase font-mono font-bold  ">
              <li className="mx-4  border-b border-black">
                <a href="#technology" onClick={() => setCategory("technology")}>
                  Technology
                </a>
              </li>
              <li className="mx-4 my-2 border-b border-black ">
                <a href="#business" onClick={() => setCategory("business")}>
                  Business
                </a>
              </li>
              <li className="mx-4  my-2  border-b border-black">
                <a
                  href="#entertainment"
                  onClick={() => setCategory("entertainment")}
                >
                  Entertainment
                </a>
              </li>

              <li className="mx-4  my-2  border-b border-black">
                <a href="#general" onClick={() => setCategory("general")}>
                  General
                </a>
              </li>
              <li className="mx-4  my-2  border-b border-black">
                <a href="#health" onClick={() => setCategory("health")}>
                  Health
                </a>
              </li>
              <li className="mx-4  border-b border-black">
                <a href="#science" onClick={() => setCategory("science")}>
                  Science
                </a>
              </li>
              <li className="mx-4  border-b border-black">
                <a href="#sports" onClick={() => setCategory("sports")}>
                  Sports
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
