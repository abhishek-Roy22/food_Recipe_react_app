import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import RecipeCard from "./components/RecipeCard";

function App() {
  const [recipes, setRecipes] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("paneer");

  useEffect(() => {
    fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=${term}&app_id=8c2804e5&app_key=1f63d5e77be092b6373e9641c3578de6`
    )
      .then((res) => res.json())
      .then((res) => {
        setRecipes(res.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className=" min-w-full overflow-hidden">
      <Navbar searchText={(text) => setTerm(text)} />
      {isLoading ? (
        <h1 className="text-rose-900 text-center text-3xl m-4">Loading...</h1>
      ) : (
        <div className="container mx-auto max-w-full overflow-hidden flex flex-wrap px-3 gap-5 md:ml-6 lg:ml-24 mt-10">
          {recipes.map((r, id) => (
            <RecipeCard key={id} r={r} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
